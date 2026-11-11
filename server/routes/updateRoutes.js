const express = require('express');
const router = express.Router();

/**
 * GET /api/updates/check
 * API kiểm tra phiên bản mới từ phần mềm Desktop
 */
router.get('/check', (req, res) => {
  const clientVersion = req.query.version || '2.0.0';
  const latestVersion = '2.0.0';
  const hasUpdate = clientVersion !== latestVersion;

  res.json({
    current_version: clientVersion,
    latest_version: latestVersion,
    has_update: hasUpdate,
    release_date: '2026-11-11',
    release_title: `KTS TimeAttendance v${latestVersion} Commercial Edition`,
    release_notes: [
      'Tự động quét và nhận diện máy chấm công qua mạng LAN trong 0.7 giây',
      'Bảo mật bản quyền doanh nghiệp độc quyền theo từng Công Ty & Machine ID',
      'Cơ chế tự động khóa toàn bộ tính năng khi hết hạn',
      'Đếm ngược 30 ngày bảo lưu dữ liệu trước khi tự động xóa sạch để bảo mật',
      'Xuất bảng công ma trận 31 ngày chuẩn Luật Lao Động 2026'
    ],
    download_url_setup: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage/releases/download/v2.0/KTS_TimeAttendance_Commercial_Setup_v2.0.exe',
    download_url_portable: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage/releases/download/v2.0/KTS_TimeAttendance_Portable_v2.0.zip',
    is_critical: false
  });
});

module.exports = router;
