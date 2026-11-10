const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema(
  {
    orderCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    customerName: {
      type: String,
      required: [true, 'Vui lòng cung cấp tên khách hàng'],
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'Vui lòng cung cấp số điện thoại hoặc Zalo'],
      trim: true,
      index: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    company: {
      type: String,
      trim: true
    },
    machineId: {
      type: String,
      required: [true, 'Vui lòng nhập mã máy tính (Machine ID)'],
      trim: true,
      uppercase: true,
      index: true
    },
    packageType: {
      type: String,
      enum: ['MONTHLY', 'YEARLY', 'LIFETIME'],
      default: 'YEARLY'
    },
    edition: {
      type: String,
      default: 'Enterprise Edition'
    },
    amount: {
      type: Number,
      required: true,
      default: 0
    },
    paymentStatus: {
      type: String,
      enum: ['UNPAID', 'PAID', 'REFUNDED'],
      default: 'UNPAID',
      index: true
    },
    licenseKey: {
      type: String,
      trim: true
    },
    issueDate: {
      type: String
    },
    expireDate: {
      type: String,
      default: 'PERPETUAL'
    },
    status: {
      type: String,
      enum: ['PENDING', 'ACTIVE', 'EXPIRED', 'REVOKED'],
      default: 'PENDING',
      index: true
    },
    maxEmployees: {
      type: Number,
      default: 0 // 0 = Không giới hạn
    },
    maxDevices: {
      type: Number,
      default: 0 // 0 = Không giới hạn
    },
    activatedAt: {
      type: Date
    },
    notes: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// Tự động cập nhật trạng thái nếu đã quá hạn
licenseSchema.methods.checkExpiration = function () {
  if (this.expireDate && this.expireDate !== 'PERPETUAL' && this.expireDate !== 'VINH_VIEN') {
    const exp = new Date(this.expireDate);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (exp < now && this.status === 'ACTIVE') {
      this.status = 'EXPIRED';
    }
  }
  return this;
};

module.exports = mongoose.model('License', licenseSchema);
