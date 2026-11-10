const assert = require('assert');
const { generateLicenseKey, verifyLicenseKey, calculateExpireDate } = require('../services/licenseGenerator');

console.log('🧪 Đang chạy kiểm thử bộ sinh License Key...');

// 1. Kiểm thử tạo key có thời hạn
const testCustomer = 'Công Ty TNHH Test KTS';
const testMachineId = 'KTS-TEST-1234-5678-ABCD';
const expireDate = '2026-12-31';

const key = generateLicenseKey({
  customer: testCustomer,
  machineId: testMachineId,
  expireDate: expireDate
});

assert(key.startsWith('KTS-LIC.'), 'Key phải bắt đầu bằng KTS-LIC.');
console.log('✅ Định dạng key chuẩn:', key.substring(0, 30) + '...');

// 2. Kiểm thử xác minh hợp lệ
const verified = verifyLicenseKey(key, testMachineId);
assert.strictEqual(verified.valid, true, 'Key phải hợp lệ');
assert.strictEqual(verified.customer, testCustomer, 'Tên khách hàng phải khớp');
assert.strictEqual(verified.status, 'ACTIVE', 'Trạng thái phải là ACTIVE');
console.log('✅ Xác minh key thành công 100%');

// 3. Kiểm thử sai Machine ID
const wrongMachineVerified = verifyLicenseKey(key, 'KTS-WRONG-MACHINE-ID');
assert.strictEqual(wrongMachineVerified.valid, false, 'Sai Machine ID phải bị từ chối');
console.log('✅ Kiểm tra khóa Machine ID thành công');

// 4. Kiểm thử gói Vĩnh Viễn
const lifetimeKey = generateLicenseKey({
  customer: testCustomer,
  machineId: testMachineId,
  expireDate: 'PERPETUAL'
});
const lifetimeVerified = verifyLicenseKey(lifetimeKey, testMachineId);
assert.strictEqual(lifetimeVerified.valid, true, 'Key vĩnh viễn phải hợp lệ');
assert.strictEqual(lifetimeVerified.isPerpetual, true, 'Key phải có cờ isPerpetual');
console.log('✅ Bản quyền vĩnh viễn hợp lệ');

console.log('🎉 TẤT CẢ KIỂM THỬ ĐÃ VƯỢT QUA XUẤT SẮC!');
process.exit(0);
