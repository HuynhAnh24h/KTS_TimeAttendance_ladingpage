import React, { useState } from 'react';
import { X, Check, Copy, QrCode, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export default function VietQRModal({ isOpen, onClose, order, onGoToLookup }) {
  const [copiedField, setCopiedField] = useState('');

  if (!isOpen || !order) return null;

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Quét Mã VietQR Napas 24/7 Tự Động
          </div>
          <h2 className="text-xl font-bold text-white">Thanh Toán Kích Hoạt Bản Quyền</h2>
          <p className="text-xs text-slate-400 mt-1">
            Đơn hàng: <strong className="text-blue-400 font-mono">{order.orderCode}</strong> ({order.packageType})
          </p>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-inner mb-6 mx-auto max-w-[280px]">
          <img
            src={order.qrUrl}
            alt="Mã QR Chuyển khoản VietQR"
            className="w-full h-auto object-contain rounded-lg"
          />
          <span className="text-[11px] font-bold text-slate-700 mt-2">Mở app Ngân hàng để quét mã QR</span>
        </div>

        {/* Bank details with 1-click Copy */}
        <div className="space-y-2.5 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs mb-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400">Ngân hàng thụ hưởng:</span>
            <span className="text-white font-bold">{order.bankInfo?.bankId || 'MB Bank'}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400">Số tài khoản:</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold">{order.bankInfo?.accountNo}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(order.bankInfo?.accountNo, 'acc')}
                className="p-1 rounded text-blue-400 hover:bg-slate-800"
                title="Sao chép số tài khoản"
              >
                {copiedField === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400">Chủ tài khoản:</span>
            <span className="text-white font-bold uppercase">{order.bankInfo?.accountName}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400">Số tiền thanh toán:</span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-sm">{order.formattedAmount}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(String(order.amount), 'amount')}
                className="p-1 rounded text-blue-400 hover:bg-slate-800"
                title="Sao chép số tiền"
              >
                {copiedField === 'amount' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-slate-400 block">Nội dung chuyển khoản:</span>
              <span className="text-[10px] text-amber-400">(Vui lòng giữ nguyên nội dung này)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-300 font-mono font-bold bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                {order.transferMemo}
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(order.transferMemo, 'memo')}
                className="p-1 rounded text-blue-400 hover:bg-slate-800"
                title="Sao chép nội dung chuyển khoản"
              >
                {copiedField === 'memo' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Guide message */}
        <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs flex items-start gap-2.5 mb-6">
          <Clock className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
          <p className="leading-relaxed">
            Hệ thống hoặc Quản trị viên sẽ tự động duyệt đơn và cấp mã bản quyền trong vòng <strong>5-15 phút</strong>.
            Bạn có thể bấm nút bên dưới để chuyển sang màn hình <strong>Tra Cứu Bản Quyền</strong> và lấy License Key bất cứ lúc nào!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onGoToLookup(order.phone || order.machineId);
            }}
            className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30 hover:from-emerald-500 hover:to-teal-500 transition-all text-center"
          >
            Đã Chuyển Khoản & Tra Cứu Key
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
