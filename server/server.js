const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const { connectToDatabase, MONGODB_URI } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Tự động kết nối DB khi khởi động
connectToDatabase().catch(err => {
  console.warn('⚠️ Cảnh báo khởi động MongoDB:', err.message);
});

// Middleware đảm bảo kết nối DB trước khi xử lý API (Rất quan trọng cho Vercel Serverless)
app.use(async (req, res, next) => {
  if (req.path.startsWith('/api') && req.path !== '/api/health') {
    try {
      await connectToDatabase();
    } catch (err) {
      return res.status(503).json({
        success: false,
        message: 'Cơ sở dữ liệu đang kết nối, vui lòng thử lại sau vài giây',
        error: err.message
      });
    }
  }
  next();
});

// API Health Check
app.get('/api/health', async (req, res) => {
  let dbStatus = 'disconnected';
  try {
    await connectToDatabase();
    dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'connecting';
  } catch (e) {
    dbStatus = 'error: ' + e.message;
  }

  res.json({
    status: 'ok',
    service: 'KTS TimeAttendance License Server',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    database: dbStatus
  });
});

// Import API Routers
const licenseRoutes = require('./routes/licenseRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api/license', licenseRoutes);
app.use('/api/admin', adminRoutes);

// Phục vụ giao diện React Frontend (Production build)
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDistPath) && fs.existsSync(path.join(clientDistPath, 'index.html'))) {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ success: false, message: 'API Endpoint not found' });
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({
      message: 'KTS TimeAttendance License & Landing Server API is Running',
      docs: '/api/health',
      frontendNote: 'Build client bằng lệnh "npm run build" trong thư mục client'
    });
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Lỗi máy chủ nội bộ'
  });
});

// Chỉ lắng nghe port nếu file được chạy trực tiếp (không phải require qua Vercel serverless)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log(`KTS LICENSE PORTAL & LANDING PAGE SERVER ĐANG CHẠY`);
    console.log(`Cổng lắng nghe: http://localhost:${PORT}`);
    console.log(`Môi trường     : ${process.env.NODE_ENV || 'development'}`);
    console.log('='.repeat(60));
  });
}

module.exports = app;
