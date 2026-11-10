const crypto = require('crypto');
const zlib = require('zlib');

const MASTER_SECRET = process.env.MASTER_SECRET || 'KTS-ENTERPRISE-FACTORY-SECURE-KEY-2026-HUYNHANH-KORNBEST-AI';

/**
 * Thuật toán sinh License Key tương thích 100% với LicenseService trong phần mềm Desktop (Python).
 */
function generateLicenseKey({
  customer,
  machineId,
  expireDate = 'PERPETUAL',
  maxEmployees = 0,
  maxDevices = 0,
  edition = 'Enterprise Edition'
}) {
  const payload = {
    customer: (customer || 'Khách hàng KTS').trim(),
    machine_id: (machineId || '*').trim().toUpperCase(),
    issue_date: new Date().toISOString().split('T')[0],
    expire_date: expireDate ? expireDate.trim().toUpperCase() : 'PERPETUAL',
    max_employees: maxEmployees || 0,
    max_devices: maxDevices || 0,
    edition: edition || 'Enterprise Edition',
    salt: crypto.randomBytes(4).toString('hex')
  };

  const payloadBytes = Buffer.from(JSON.stringify(payload));
  // Nén zlib mức 9 tương tự zlib.compress(level=9) của Python
  const compressed = zlib.deflateSync(payloadBytes, { level: 9 });
  const payloadB64 = compressed.toString('base64url').replace(/=/g, '');

  // Ký HMAC-SHA256, lấy 32 ký tự đầu
  const sig = crypto.createHmac('sha256', MASTER_SECRET).update(payloadB64).digest('hex').substring(0, 32);

  return `KTS-LIC.${payloadB64}.${sig}`;
}

/**
 * Giải mã và kiểm tra tính hợp lệ của chuỗi License Key.
 */
function verifyLicenseKey(licenseKey, currentMachineId = null) {
  if (!licenseKey || typeof licenseKey !== 'string') {
    return { valid: false, message: 'Mã bản quyền rỗng hoặc không hợp lệ' };
  }

  const parts = licenseKey.trim().split('.');
  if (parts.length !== 3 || parts[0] !== 'KTS-LIC') {
    return { valid: false, message: 'Định dạng mã bản quyền không đúng (phải bắt đầu bằng KTS-LIC)' };
  }

  const [, payloadB64, providedSig] = parts;

  // Xác minh chữ ký HMAC
  const expectedSig = crypto.createHmac('sha256', MASTER_SECRET).update(payloadB64).digest('hex').substring(0, 32);
  if (providedSig !== expectedSig) {
    return { valid: false, message: 'Chữ ký bản quyền không hợp lệ hoặc đã bị chỉnh sửa!' };
  }

  // Giải nén payload
  try {
    let b64 = payloadB64;
    const rem = b64.length % 4;
    if (rem > 0) {
      b64 += '='.repeat(4 - rem);
    }
    const compressed = Buffer.from(b64, 'base64url');
    const decompressed = zlib.inflateSync(compressed);
    const payload = JSON.parse(decompressed.toString('utf-8'));

    // Kiểm tra Machine ID nếu có
    const machineInKey = (payload.machine_id || '').toUpperCase();
    if (currentMachineId) {
      const isMaster = (machineInKey === 'DEVELOPER-MASTER-ALL-MACHINES' || machineInKey === '*');
      if (!isMaster && machineInKey !== currentMachineId.toUpperCase()) {
        return {
          valid: false,
          message: `Mã cấp cho máy ${machineInKey}, không khớp với máy hiện tại (${currentMachineId})`,
          payload
        };
      }
    }

    // Kiểm tra hạn sử dụng
    const expireStr = (payload.expire_date || 'PERPETUAL').toUpperCase();
    const isPerpetual = (expireStr === 'PERPETUAL' || expireStr === 'VINH_VIEN');
    let daysLeft = 99999;

    if (!isPerpetual) {
      const expDate = new Date(expireStr);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      daysLeft = Math.ceil((expDate - now) / (1000 * 60 * 60 * 24));
      if (daysLeft < 0) {
        return {
          valid: false,
          status: 'EXPIRED',
          message: `Bản quyền đã hết hạn vào ngày ${expireStr}`,
          payload,
          daysRemaining: daysLeft
        };
      }
    }

    return {
      valid: true,
      status: 'ACTIVE',
      message: 'Bản quyền hợp lệ',
      customer: payload.customer,
      machineId: machineInKey,
      edition: payload.edition,
      isPerpetual,
      expireDate: isPerpetual ? 'Vĩnh viễn' : expireStr,
      daysRemaining: daysLeft,
      payload
    };
  } catch (err) {
    return { valid: false, message: `Không thể giải mã dữ liệu bản quyền: ${err.message}` };
  }
}

/**
 * Tính ngày hết hạn dựa theo gói (Gói tháng, Gói năm, Gói vĩnh viễn)
 */
function calculateExpireDate(packageType, months = 1) {
  if (packageType === 'LIFETIME' || packageType === 'PERPETUAL') {
    return 'PERPETUAL';
  }
  const date = new Date();
  if (packageType === 'YEARLY') {
    date.setFullYear(date.getFullYear() + 1);
  } else if (packageType === 'MONTHLY') {
    date.setMonth(date.getMonth() + (months || 1));
  } else {
    // Mặc định 1 tháng
    date.setMonth(date.getMonth() + 1);
  }
  return date.toISOString().split('T')[0];
}

module.exports = {
  generateLicenseKey,
  verifyLicenseKey,
  calculateExpireDate,
  MASTER_SECRET
};
