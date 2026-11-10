const express = require('express');
const router = express.Router();
const License = require('../models/License');
const { generateLicenseKey, calculateExpireDate } = require('../services/licenseGenerator');
const { generateVietQrUrl, DEFAULT_BANK } = require('../services/vietqrService');

// Bảng giá niêm yết các gói bản quyền
const PRICING_PLANS = {
  MONTHLY: {
    id: 'MONTHLY',
    name: 'Gói 1 Tháng',
    price: 99000,
    formattedPrice: '99.000đ',
    period: '/tháng',
    description: 'Thích hợp dùng thử, trải nghiệm dự án ngắn hạn hoặc theo mùa vụ',
    features: [
      'Đầy đủ mọi tính năng chấm công',
      'Hỗ trợ tất cả máy chấm công IP (Ronald Jack, Gigata, ZK, Hikvision)',
      'Không giới hạn số lượng nhân sự & máy',
      'Xuất file Excel bảng công ma trận chuẩn 31 ngày',
      'Hỗ trợ kỹ thuật qua Zalo/UltraView'
    ]
  },
  YEARLY: {
    id: 'YEARLY',
    name: 'Gói 1 Năm',
    price: 899000,
    formattedPrice: '899.000đ',
    period: '/năm',
    isPopular: true,
    discountBadge: 'Tiết kiệm 25%',
    description: 'Lựa chọn phổ biến nhất cho doanh nghiệp & nhà máy vừa và nhỏ',
    features: [
      'Toàn bộ quyền lợi gói tháng',
      'Tiết kiệm hơn 25% chi phí so với theo tháng',
      'Cập nhật phiên bản phần mềm miễn phí 1 năm',
      'Hỗ trợ cấu hình ca kíp & kết nối máy tận nơi online',
      'Ưu tiên hỗ trợ kỹ thuật 24/7'
    ]
  },
  LIFETIME: {
    id: 'LIFETIME',
    name: 'Gói Vĩnh Viễn (Trọn Đời)',
    price: 2490000,
    formattedPrice: '2.490.000đ',
    period: '/vĩnh viễn',
    isBestValue: true,
    discountBadge: 'Dùng Mãi Mãi',
    description: 'Mua một lần duy nhất, sở hữu phần mềm trọn đời, không phát sinh chi phí',
    features: [
      'Bản quyền vĩnh viễn theo máy tính',
      'Không bao giờ hết hạn',
      'Miễn phí nâng cấp tất cả các bản cập nhật tương lai',
      'Hỗ trợ chuyển đổi máy khi đổi máy tính (tối đa 3 lần)',
      'Hỗ trợ trực tiếp từ đội ngũ kỹ sư phần mềm KTS'
    ]
  }
};

/**
 * GET /api/license/packages
 * Lấy danh sách gói giá
 */
router.get('/packages', (req, res) => {
  res.json({
    success: true,
    plans: Object.values(PRICING_PLANS),
    bankInfo: DEFAULT_BANK
  });
});

/**
 * POST /api/license/order
 * Khách hàng đăng ký mua gói bản quyền
 */
router.post('/order', async (req, res) => {
  try {
    const { customerName, phone, email, company, machineId, packageType } = req.body;

    if (!customerName || !phone || !machineId) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng cung cấp đầy đủ: Tên, Số điện thoại/Zalo và Mã máy tính (Machine ID)!'
      });
    }

    const planKey = (packageType || 'YEARLY').toUpperCase();
    const plan = PRICING_PLANS[planKey] || PRICING_PLANS.YEARLY;

    // Sinh mã đơn hàng ngẫu nhiên dễ nhớ: KTS + 6 số
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    const orderCode = `KTS${randomCode}`;

    // Tạo bản ghi đơn hàng
    const license = new License({
      orderCode,
      customerName: customerName.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      company: (company || '').trim(),
      machineId: machineId.trim().toUpperCase(),
      packageType: plan.id,
      amount: plan.price,
      paymentStatus: 'UNPAID',
      status: 'PENDING',
      notes: `Đăng ký gói ${plan.name}`
    });

    await license.save();

    // Sinh mã QR chuyển khoản VietQR chuẩn
    const transferMemo = `KTS ${orderCode} ${phone.slice(-4)}`;
    const qrUrl = generateVietQrUrl({
      amount: plan.price,
      memo: transferMemo
    });

    res.status(201).json({
      success: true,
      message: 'Tạo đơn đăng ký bản quyền thành công!',
      order: {
        orderCode,
        customerName: license.customerName,
        phone: license.phone,
        machineId: license.machineId,
        packageType: plan.name,
        amount: plan.price,
        formattedAmount: plan.formattedPrice,
        transferMemo,
        qrUrl,
        bankInfo: DEFAULT_BANK,
        createdAt: license.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Lỗi xử lý đơn đăng ký: ${err.message}`
    });
  }
});

/**
 * GET /api/license/lookup
 * Tra cứu bản quyền theo Mã máy tính (Machine ID) hoặc Số điện thoại
 */
router.get('/lookup', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || !query.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng nhập Mã máy tính (KTS-XXXX-...) hoặc Số điện thoại để tra cứu'
      });
    }

    const cleanQuery = query.trim().toUpperCase();

    // Tìm kiếm theo Machine ID hoặc SĐT
    const licenses = await License.find({
      $or: [
        { machineId: cleanQuery },
        { phone: query.trim() },
        { orderCode: cleanQuery }
      ]
    }).sort({ createdAt: -1 });

    if (!licenses || licenses.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Không tìm thấy thông tin bản quyền nào khớp với "${query}".`
      });
    }

    // Cập nhật trạng thái hết hạn nếu cần
    licenses.forEach(l => l.checkExpiration());

    res.json({
      success: true,
      total: licenses.length,
      licenses: licenses.map(l => ({
        orderCode: l.orderCode,
        customerName: l.customerName,
        machineId: l.machineId,
        packageType: l.packageType,
        status: l.status,
        paymentStatus: l.paymentStatus,
        licenseKey: l.status === 'ACTIVE' ? l.licenseKey : null,
        expireDate: l.expireDate,
        createdAt: l.createdAt
      }))
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Lỗi tra cứu: ${err.message}`
    });
  }
});

/**
 * GET /api/license/online-check
 * API kiểm tra bản quyền trực tuyến cho phần mềm Desktop tự động cập nhật
 */
router.get('/online-check', async (req, res) => {
  try {
    const { machine_id } = req.query;
    if (!machine_id) {
      return res.status(400).json({ valid: false, message: 'Thiếu machine_id' });
    }

    const cleanMachineId = machine_id.trim().toUpperCase();
    const license = await License.findOne({
      machineId: cleanMachineId,
      status: 'ACTIVE',
      paymentStatus: 'PAID'
    }).sort({ createdAt: -1 });

    if (!license) {
      return res.json({
        valid: false,
        status: 'UNREGISTERED',
        message: 'Chưa tìm thấy bản quyền trực tuyến cho máy này'
      });
    }

    license.checkExpiration();
    if (license.status !== 'ACTIVE') {
      return res.json({
        valid: false,
        status: license.status,
        message: 'Bản quyền đã hết hạn'
      });
    }

    res.json({
      valid: true,
      status: 'ACTIVE',
      customer: license.customerName,
      licenseKey: license.licenseKey,
      expireDate: license.expireDate,
      edition: license.edition
    });
  } catch (err) {
    res.status(500).json({ valid: false, message: err.message });
  }
});

module.exports = router;
