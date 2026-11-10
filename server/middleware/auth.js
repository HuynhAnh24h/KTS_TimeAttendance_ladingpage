const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'KTS-LICENSE-SECRET-JWT-KEY-2026';

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Yêu cầu đăng nhập quản trị viên' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Phiên làm việc hết hạn hoặc không hợp lệ' });
  }
}

module.exports = {
  requireAdmin,
  JWT_SECRET
};
