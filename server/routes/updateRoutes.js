const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { requireAdmin } = require('../middleware/auth');

const RELEASE_FILE = path.join(__dirname, '..', 'data', 'latest_release.json');

function getReleaseData() {
  try {
    if (fs.existsSync(RELEASE_FILE)) {
      const raw = fs.readFileSync(RELEASE_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Lỗi đọc latest_release.json:', err);
  }
  return {
    latest_version: '2.0.1',
    release_date: '2026-11-12',
    release_title: 'KTS TimeAttendance v2.0.1 Commercial Release',
    release_notes: [
      'Tự động quét và nhận diện máy chấm công qua mạng LAN trong 0.7 giây',
      'Bảo mật mã nguồn: Vô hiệu hóa DevTools F12 và đóng gói nhị phân an toàn',
      'Hỗ trợ tính năng Cập nhật trực tiếp 1-Click phía local dành cho Quản trị viên',
      'Khóa bản quyền phần cứng độc quyền và tự hủy dữ liệu sau 30 ngày',
      'Xuất báo cáo bảng công ma trận 31 ngày chuẩn Luật Lao Động 2026'
    ],
    download_url_setup: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage/releases/download/v2.0/KTS_TimeAttendance_Commercial_Setup_v2.0.exe',
    download_url_portable: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage/releases/download/v2.0/KTS_TimeAttendance_Portable_v2.0.zip',
    is_critical: false,
    history: []
  };
}

function saveReleaseData(data) {
  try {
    fs.mkdirSync(path.dirname(RELEASE_FILE), { recursive: true });
    fs.writeFileSync(RELEASE_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Lỗi ghi latest_release.json:', err);
    return false;
  }
}

function isNewerVersion(latest, current) {
  if (!latest || !current) return false;
  const lParts = latest.replace(/[^0-9.]/g, '').split('.').map(n => parseInt(n, 10) || 0);
  const cParts = current.replace(/[^0-9.]/g, '').split('.').map(n => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(lParts.length, cParts.length); i++) {
    const l = lParts[i] || 0;
    const c = cParts[i] || 0;
    if (l > c) return true;
    if (l < c) return false;
  }
  return false;
}

/**
 * GET /api/updates/check
 * Kiểm tra phiên bản mới từ phần mềm Desktop hoặc người dùng
 */
router.get('/check', (req, res) => {
  const clientVersion = req.query.version || '2.0.0';
  const data = getReleaseData();
  const hasUpdate = isNewerVersion(data.latest_version, clientVersion);

  res.json({
    current_version: clientVersion,
    latest_version: data.latest_version,
    has_update: hasUpdate,
    release_date: data.release_date,
    release_title: data.release_title,
    release_notes: data.release_notes,
    download_url_setup: data.download_url_setup,
    download_url_portable: data.download_url_portable,
    is_critical: data.is_critical || false
  });
});

/**
 * GET /api/updates/history
 * Lấy lịch sử các bản cập nhật để hiển thị trên Landing Page
 */
router.get('/history', (req, res) => {
  const data = getReleaseData();
  res.json({
    success: true,
    latest_version: data.latest_version,
    history: data.history || []
  });
});

/**
 * POST /api/updates/publish
 * Dành cho Quản trị viên (Admin) phát hành phiên bản mới trực tiếp từ Dashboard
 */
router.post('/publish', requireAdmin, (req, res) => {
  try {
    const {
      version,
      title,
      notes,
      download_url_setup,
      download_url_portable,
      is_critical
    } = req.body;

    if (!version || !title) {
      return res.status(400).json({ success: false, message: 'Vui lòng cung cấp số phiên bản và tiêu đề bản phát hành' });
    }

    const currentData = getReleaseData();
    const today = new Date().toISOString().split('T')[0];

    // Chuyển đổi notes sang mảng nếu là chuỗi
    let releaseNotes = [];
    if (Array.isArray(notes)) {
      releaseNotes = notes;
    } else if (typeof notes === 'string') {
      releaseNotes = notes.split('\n').map(s => s.trim()).filter(Boolean);
    }

    const newHistoryItem = {
      version: version.trim(),
      release_date: today,
      title: title.trim(),
      notes: releaseNotes
    };

    const updatedData = {
      latest_version: version.trim(),
      release_date: today,
      release_title: title.trim(),
      release_notes: releaseNotes.length > 0 ? releaseNotes : currentData.release_notes,
      download_url_setup: download_url_setup?.trim() || currentData.download_url_setup,
      download_url_portable: download_url_portable?.trim() || currentData.download_url_portable,
      is_critical: Boolean(is_critical),
      history: [newHistoryItem, ...(currentData.history || []).filter(h => h.version !== version.trim())]
    };

    saveReleaseData(updatedData);

    res.json({
      success: true,
      message: `Đã phát hành thành công phiên bản mới v${version.trim()}! Tất cả ứng dụng Desktop sẽ nhận diện được bản cập nhật này.`,
      release: updatedData
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
