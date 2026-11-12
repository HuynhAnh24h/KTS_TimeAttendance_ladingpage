const express = require('express');
const router = express.Router();
const License = require('../models/License');
const { generateLicenseKey, calculateExpireDate } = require('../services/licenseGenerator');
const { generateVietQrUrl, DEFAULT_BANK } = require('../services/vietqrService');

// Bảng giá niêm yết các gói bản quyền phân chia rõ ràng theo nhu cầu doanh nghiệp
const PRICING_PLANS = {
  STANDARD_YEARLY: {
    id: 'STANDARD_YEARLY',
    name: 'Gói Tiêu Chuẩn (1 Năm)',
    tier: 'standard',
    edition: 'Standard Edition',
    price: 890000,
    formattedPrice: '890.000đ',
    period: '/năm',
    description: 'Dành cho văn phòng hoặc nhà máy 1 địa điểm trong cùng mạng LAN',
    features: [
      'Đầy đủ tính năng chấm công & tính lương',
      'Quét Radar LAN tự động trong 0.7 giây',
      'Hỗ trợ mọi máy Ronald Jack, Gigata, ZKTeco (UDP 4370)',
      'Không giới hạn nhân viên & máy chấm công nội bộ',
      'Bảng công ma trận 31 ngày & Bảng lương tự động',
      'Hỗ trợ kỹ thuật qua Zalo / UltraView 24/7'
    ]
  },
  STANDARD_LIFETIME: {
    id: 'STANDARD_LIFETIME',
    name: 'Gói Tiêu Chuẩn (Vĩnh Viễn)',
    tier: 'standard',
    edition: 'Standard Edition',
    price: 1890000,
    formattedPrice: '1.890.000đ',
    period: '/trọn đời',
    description: 'Bản quyền vĩnh viễn 1 địa điểm, thanh toán 1 lần dùng mãi mãi',
    features: [
      'Toàn bộ tính năng của Gói Tiêu Chuẩn 1 Năm',
      'Sở hữu vĩnh viễn, không phí duy trì hàng năm',
      'Miễn phí cập nhật phiên bản mới trọn đời',
      'Hỗ trợ cấp lại mã khi đổi máy tính (tối đa 3 lần)',
      'Ưu tiên hỗ trợ kỹ thuật trực tiếp từ đội ngũ KTS'
    ]
  },
  PRO_YEARLY: {
    id: 'PRO_YEARLY',
    name: 'Gói Pro Đa Chi Nhánh (1 Năm)',
    tier: 'pro',
    edition: 'Pro Multi-Branch Edition',
    price: 2490000,
    formattedPrice: '2.490.000đ',
    period: '/năm',
    isPopular: true,
    discountBadge: 'Bán Chạy Nhất',
    description: 'Chấm công chuỗi chi nhánh toàn quốc, tự động đẩy dữ liệu qua Internet (ZKTeco ADMS)',
    features: [
      'Mở khóa toàn bộ tính năng Đa Chi Nhánh',
      'ZKTeco Native ADMS Cloud Push: Xuyên tường lửa / NAT không cần IP tĩnh',
      'KTS Edge Sync Agent cho các máy đời cũ',
      'Quản lý không giới hạn chi nhánh (HN, HCM, Bình Dương...)',
      'Lọc bảng công & tính lương riêng từng chi nhánh',
      'Hỗ trợ kỹ sư KTS cấu hình từ xa tận nơi'
    ]
  },
  PRO_LIFETIME: {
    id: 'PRO_LIFETIME',
    name: 'Gói Pro Đa Chi Nhánh (Vĩnh Viễn)',
    tier: 'pro',
    edition: 'Pro Multi-Branch Edition',
    price: 4890000,
    formattedPrice: '4.890.000đ',
    period: '/trọn đời',
    isBestValue: true,
    discountBadge: 'Khuyên Dùng Cho Chuỗi',
    description: 'Giải pháp Đa Chi Nhánh trọn đời, tối ưu chi phí vận hành cho doanh nghiệp chuỗi',
    features: [
      'Bản quyền Đa Chi Nhánh vĩnh viễn theo máy chủ',
      'ZKTeco ADMS Cloud Push & Edge Sync không giới hạn',
      'Không bao giờ phát sinh phí duy trì máy chủ hay hàng năm',
      'Miễn phí nâng cấp tất cả tính năng tương lai',
      'Hỗ trợ chuyển đổi máy chủ server linh hoạt',
      'Đội ngũ kỹ sư hỗ trợ riêng VIP 24/7'
    ]
  },
  ENTERPRISE: {
    id: 'ENTERPRISE',
    name: 'Gói Doanh Nghiệp (Enterprise)',
    tier: 'enterprise',
    edition: 'Enterprise Edition',
    price: 8900000,
    formattedPrice: '8.900.000đ',
    period: '/trọn gói',
    discountBadge: 'Tập Đoàn / Nhà Máy',
    description: 'Tùy biến sâu theo yêu cầu, tích hợp ERP / Phần mềm kế toán MISA, Bravo, SAP',
    features: [
      'Toàn bộ tính năng cao cấp nhất của Gói Pro',
      'Triển khai Cloud Server hoặc On-Premise riêng biệt',
      'Kết nối API hai chiều với hệ thống ERP / HRM / CRM',
      'Tùy chỉnh công thức lương, phụ cấp theo quy chế công ty',
      'Kỹ sư KTS đến trực tiếp nhà máy khảo sát & đào tạo',
      'Cam kết SLA 99.9% và bảo hành hệ thống trọn đời'
    ]
  },
  // Tương thích ngược với các đơn hàng cũ
  MONTHLY: {
    id: 'MONTHLY',
    name: 'Gói Trải Nghiệm (1 Tháng)',
    tier: 'standard',
    edition: 'Standard Edition',
    price: 99000,
    formattedPrice: '99.000đ',
    period: '/tháng',
    description: 'Thích hợp dùng thử, trải nghiệm dự án ngắn hạn hoặc theo mùa vụ',
    features: [
      'Đầy đủ mọi tính năng chấm công cơ bản',
      'Hỗ trợ tất cả máy chấm công IP LAN',
      'Không giới hạn số lượng nhân sự',
      'Xuất file Excel bảng công ma trận 31 ngày'
    ]
  },
  YEARLY: {
    id: 'YEARLY',
    name: 'Gói 1 Năm (Tiêu Chuẩn)',
    tier: 'standard',
    edition: 'Standard Edition',
    price: 890000,
    formattedPrice: '890.000đ',
    period: '/năm',
    description: 'Dành cho văn phòng hoặc nhà máy 1 địa điểm trong cùng mạng LAN',
    features: [
      'Đầy đủ tính năng chấm công & tính lương',
      'Quét Radar LAN tự động trong 0.7 giây',
      'Hỗ trợ mọi máy Ronald Jack, Gigata, ZKTeco'
    ]
  },
  LIFETIME: {
    id: 'LIFETIME',
    name: 'Gói Vĩnh Viễn (Tiêu Chuẩn)',
    tier: 'standard',
    edition: 'Standard Edition',
    price: 1890000,
    formattedPrice: '1.890.000đ',
    period: '/vĩnh viễn',
    description: 'Bản quyền vĩnh viễn 1 địa điểm',
    features: [
      'Bản quyền vĩnh viễn theo máy tính',
      'Không bao giờ hết hạn'
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
