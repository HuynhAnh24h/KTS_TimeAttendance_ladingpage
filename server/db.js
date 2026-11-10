const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://anhdev24h_db_user:miencuclac1dem2em@kts-timeattendance.nmnzhgn.mongodb.net/kts_license?retryWrites=true&w=majority';

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 8000,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('✅ Đã kết nối cơ sở dữ liệu MongoDB Atlas thành công');
      return mongooseInstance;
    }).catch(err => {
      cached.promise = null;
      console.error('❌ Lỗi kết nối MongoDB Atlas:', err.message);
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

module.exports = {
  connectToDatabase,
  MONGODB_URI
};
