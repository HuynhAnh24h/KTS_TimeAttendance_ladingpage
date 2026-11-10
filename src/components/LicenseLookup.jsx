import React, { useState } from 'react';
import { X, Search, Check, Copy, AlertCircle, Clock, ShieldCheck, KeyRound, Monitor, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { licenseApi } from '../api/client';

export default function LicenseLookup({ isOpen, onClose, initialQuery = '', onOpenOrder }) {
  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!query.trim()) {
      setError('Vui lòng nhập Mã máy tính (Machine ID) hoặc Số điện thoại để tra cứu');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const res = await licenseApi.lookupLicense(query.trim());
      if (res.success && res.licenses) {
        setResults(res.licenses);
      } else {
        setError(res.message || 'Không tìm thấy thông tin bản quyền');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Không tìm thấy thông tin bản quyền phù hợp với thông tin đã nhập.');
    } finally {
      setLoading(false);
    }
  };

  const copyLicenseKey = (key) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const getStatusBadge = (status, paymentStatus) => {
    if (status === 'ACTIVE') {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">ĐÃ KÍCH HOẠT</span>;
    }
    if (paymentStatus === 'UNPAID' || status === 'PENDING') {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">CHỜ DUYỆT THANH TOÁN</span>;
    }
    if (status === 'EXPIRED') {
      return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">HẾT HẠN</span>;
    }
    return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-200 text-slate-700">{status}</span>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Tra Cứu Bản Quyền Online</h2>
            <p className="text-xs text-slate-500">Kiểm tra trạng thái & lấy lại mã kích hoạt Key của bạn</p>
          </div>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Nhập Mã máy tính (KTS-...) hoặc Số điện thoại..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer shadow-md shadow-blue-500/20"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            <span>Tìm Kiếm</span>
          </button>
        </form>

        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3 mb-6">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
            <div>
              <p className="font-semibold">{error}</p>
              <p className="mt-1 text-[11px] text-slate-600">
                Nếu bạn vừa thanh toán, vui lòng đợi vài phút để hệ thống cập nhật hoặc liên hệ Zalo hỗ trợ.
              </p>
            </div>
          </div>
        )}

        {/* Results */}
        {results && results.length > 0 && (
          <div className="space-y-4">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{item.customerName}</span>
                    <span className="text-[11px] text-slate-500">Mã đơn: {item.orderCode}</span>
                  </div>
                  <div>{getStatusBadge(item.status, item.paymentStatus)}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Mã máy tính (HWID):</span>
                    <span className="text-slate-800 font-mono font-medium">{item.machineId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Gói bản quyền:</span>
                    <span className="text-blue-600 font-bold">{item.packageType}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Hạn sử dụng:</span>
                    <span className="text-emerald-700 font-bold">{item.expireDate === 'PERPETUAL' ? 'Vĩnh viễn trọn đời' : item.expireDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Ngày tạo:</span>
                    <span className="text-slate-700">{new Date(item.createdAt).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>

                {/* License Key box if ACTIVE */}
                {item.status === 'ACTIVE' && item.licenseKey ? (
                  <div className="pt-2 border-t border-slate-200">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-amber-600" /> Chuỗi Mã Kích Hoạt Phần Mềm (License Key):
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        readOnly
                        value={item.licenseKey}
                        className="w-full px-3 py-2 pr-24 rounded-lg bg-white border border-amber-300 text-amber-900 font-mono text-[11px] select-all focus:outline-none shadow-sm"
                      />
                      <button
                        onClick={() => copyLicenseKey(item.licenseKey)}
                        className="absolute right-1 px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey ? 'Đã chép!' : 'Sao chép'}</span>
                      </button>
                    </div>

                    {/* Step by step guide */}
                    <div className="mt-3 p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-blue-900 space-y-1">
                      <p className="font-semibold text-blue-950">👉 Hướng dẫn kích hoạt vào phần mềm:</p>
                      <p>1. Mở app <strong>KTS TimeAttendance</strong> trên máy tính của bạn.</p>
                      <p>2. Nhấp vào <strong>Dùng thử</strong> (hoặc vào mục <em>Cài đặt hệ thống & CSDL</em> -&gt; <em>Bản quyền</em>).</p>
                      <p>3. Dán chuỗi mã trên vào ô và bấm <strong>Kích hoạt bản quyền</strong> là xong!</p>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                    <span>Đơn hàng đang chờ quản trị viên xác nhận chuyển khoản để sinh mã key.</span>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenOrder && onOpenOrder();
                      }}
                      className="text-xs text-blue-600 hover:underline font-bold"
                    >
                      Thanh toán ngay &rarr;
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
