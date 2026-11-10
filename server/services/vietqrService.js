/**
 * Dịch vụ tạo mã thanh toán VietQR chuẩn Napas 24/7 tự động điền số tiền và nội dung chuyển khoản.
 */

// Cấu hình ngân hàng mặc định của bạn (Có thể điều chỉnh qua biến môi trường hoặc trang Admin)
const DEFAULT_BANK = {
  bankId: process.env.BANK_ID || 'MB',           // MB: Ngân hàng Quân Đội, VCB: Vietcombank, TCB: Techcombank, ACB, v.v.
  accountNo: process.env.BANK_ACCOUNT_NO || '0987654321',
  accountName: process.env.BANK_ACCOUNT_NAME || 'NGUYEN HUYNH ANH',
  template: 'compact2'                          // compact2: mẫu QR kèm logo Napas & ngân hàng
};

function generateVietQrUrl({
  bankId = DEFAULT_BANK.bankId,
  accountNo = DEFAULT_BANK.accountNo,
  accountName = DEFAULT_BANK.accountName,
  amount = 0,
  memo = ''
}) {
  const cleanBank = (bankId || DEFAULT_BANK.bankId).trim().toUpperCase();
  const cleanAccount = (accountNo || DEFAULT_BANK.accountNo).trim();
  const cleanName = encodeURIComponent((accountName || DEFAULT_BANK.accountName).trim());
  const cleanMemo = encodeURIComponent(memo.trim());

  return `https://img.vietqr.io/image/${cleanBank}-${cleanAccount}-${DEFAULT_BANK.template}.png?amount=${amount}&addInfo=${cleanMemo}&accountName=${cleanName}`;
}

module.exports = {
  DEFAULT_BANK,
  generateVietQrUrl
};
