const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const License = require('../models/License');
const Admin = require('../models/Admin');
const { generateLicenseKey, calculateExpireDate } = require('../services/licenseGenerator');
const { requireAdmin, JWT_SECRET } = require('../middleware/auth');
const { DEFAULT_BANK } = require('../services/vietqrService');

const ADMIN_DEFAULT_USER = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_DEFAULT_PASS = process.env.ADMIN_PASSWORD || 'KtsAdmin@2026';

/**
 * POST /api/admin/login
 * Đăng nhập quản trị viên
 */
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập tài khoản và mật khẩu' });
    }

    // Kiểm tra tài khoản trong database
    let admin = await Admin.findOne({ username: username.toLowerCase().trim() });

    // Nếu chưa có tài khoản admin đầu tiên, tự động khởi tạo theo biến môi trường
    if (!admin && username.trim() === ADMIN_DEFAULT_USER && password === ADMIN_DEFAULT_PASS) {
      admin = new Admin({
        username: ADMIN_DEFAULT_USER,
        password: ADMIN_DEFAULT_PASS
      });
      await admin.save();
    }

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Tài khoản hoặc mật khẩu không chính xác' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Tài khoản hoặc mật khẩu không chính xác' });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Đăng nhập thành công',
      token,
      user: {
        username: admin.username,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Toàn bộ các routes bên dưới đều yêu cầu quyền Quản trị viên
router.use(requireAdmin);

/**
 * GET /api/admin/stats
 * Thống kê tổng quan hệ thống bản quyền
 */
router.get('/stats', async (req, res) => {
  try {
    const total = await License.countDocuments();
    const active = await License.countDocuments({ status: 'ACTIVE' });
    const pending = await License.countDocuments({ paymentStatus: 'UNPAID' });
    const lifetime = await License.countDocuments({ packageType: 'LIFETIME', status: 'ACTIVE' });

    const revenueResult = await License.aggregate([
      { $match: { paymentStatus: 'PAID' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    const totalRevenue = revenueResult[0]?.total || 0;

    res.json({
      success: true,
      stats: {
        total,
        active,
        pending,
        lifetime,
        totalRevenue
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * GET /api/admin/licenses
 * Danh sách toàn bộ bản quyền có tìm kiếm và phân trang
 */
router.get('/licenses', async (req, res) => {
  try {
    const { search, status, paymentStatus, page = 1, limit = 20 } = req.query;

    const query = {};
    if (status && status !== 'ALL') {
      query.status = status;
    }
    if (paymentStatus && paymentStatus !== 'ALL') {
      query.paymentStatus = paymentStatus;
    }
    if (search && search.trim()) {
      const s = search.trim();
      query.$or = [
        { customerName: { $regex: s, $options: 'i' } },
        { phone: { $regex: s, $options: 'i' } },
        { orderCode: { $regex: s, $options: 'i' } },
        { machineId: { $regex: s, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await License.countDocuments(query);
    const licenses = await License.find(query).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit));

    // Cập nhật trạng thái hết hạn
    licenses.forEach(l => l.checkExpiration());

    res.json({
      success: true,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      licenses
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * POST /api/admin/licenses/create
 * Quản trị viên tự tay tạo bản quyền mới
 */
router.post('/licenses/create', async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      company,
      machineId,
      packageType,
      edition,
      customExpireDate,
      amount,
      notes
    } = req.body;

    if (!customerName || !machineId) {
      return res.status(400).json({ success: false, message: 'Tên khách hàng và Machine ID là bắt buộc' });
    }

    const pkg = (packageType || 'YEARLY').toUpperCase();
    const expireDate = customExpireDate || calculateExpireDate(pkg);
    const ed = edition || 'Enterprise Edition';

    // Tạo license key chuẩn thuật toán HMAC ràng buộc với Công Ty và Machine ID
    const licenseKey = generateLicenseKey({
      companyName: company || customerName,
      customer: customerName,
      machineId,
      expireDate,
      edition: ed
    });

    const randomCode = Math.floor(100000 + Math.random() * 900000);
    const orderCode = `ADM${randomCode}`;

    const license = new License({
      orderCode,
      customerName: customerName.trim(),
      phone: (phone || '0000000000').trim(),
      email: (email || '').trim(),
      company: (company || '').trim(),
      machineId: machineId.trim().toUpperCase(),
      packageType: pkg,
      edition: ed,
      amount: amount || 0,
      paymentStatus: 'PAID',
      status: 'ACTIVE',
      licenseKey,
      issueDate: new Date().toISOString().split('T')[0],
      expireDate,
      activatedAt: new Date(),
      notes: notes || 'Tạo trực tiếp bởi Admin'
    });

    await license.save();

    res.status(201).json({
      success: true,
      message: 'Tạo bản quyền thành công!',
      license
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * POST /api/admin/licenses/:id/approve
 * 1-Click Duyệt đơn và kích hoạt License Key
 */
router.post('/licenses/:id/approve', async (req, res) => {
  try {
    const license = await License.findById(req.params.id);
    if (!license) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy bản ghi đơn hàng' });
    }

    // Tính ngày hết hạn dựa theo gói
    const expireDate = calculateExpireDate(license.packageType);

    // Sinh License Key chính thức ràng buộc theo Công Ty và Machine ID
    const licenseKey = generateLicenseKey({
      companyName: license.company || license.customerName,
      customer: license.customerName,
      machineId: license.machineId,
      expireDate,
      edition: license.edition
    });

    license.paymentStatus = 'PAID';
    license.status = 'ACTIVE';
    license.licenseKey = licenseKey;
    license.issueDate = new Date().toISOString().split('T')[0];
    license.expireDate = expireDate;
    license.activatedAt = new Date();

    await license.save();

    res.json({
      success: true,
      message: `Đã duyệt đơn và cấp Key cho khách hàng ${license.customerName}!`,
      license
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * POST /api/admin/licenses/:id/revoke
 * Thu hồi / Hủy kích hoạt bản quyền
 */
router.post('/licenses/:id/revoke', async (req, res) => {
  try {
    const license = await License.findById(req.params.id);
    if (!license) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy bản ghi' });
    }

    license.status = 'REVOKED';
    await license.save();

    res.json({ success: true, message: 'Đã thu hồi bản quyền này thành công', license });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * PUT /api/admin/licenses/:id/renew
 * Gia hạn thời hạn bản quyền
 */
router.put('/licenses/:id/renew', async (req, res) => {
  try {
    const { months = 12, newPackageType } = req.body;
    const license = await License.findById(req.params.id);
    if (!license) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy bản ghi' });
    }

    if (newPackageType) {
      license.packageType = newPackageType;
    }

    const expireDate = calculateExpireDate(license.packageType, months);
    const licenseKey = generateLicenseKey({
      customer: license.customerName,
      machineId: license.machineId,
      expireDate,
      edition: license.edition
    });

    license.expireDate = expireDate;
    license.licenseKey = licenseKey;
    license.status = 'ACTIVE';
    license.paymentStatus = 'PAID';
    license.activatedAt = new Date();

    await license.save();

    res.json({ success: true, message: 'Gia hạn bản quyền thành công!', license });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * DELETE /api/admin/licenses/:id
 * Xóa bản ghi
 */
router.delete('/licenses/:id', async (req, res) => {
  try {
    await License.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Đã xóa bản ghi thành công' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
