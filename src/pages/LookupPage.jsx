import React, { useState, useEffect } from 'react';
import { Search, Check, Copy, AlertCircle, KeyRound, ArrowLeft, Sparkles, RefreshCw, Monitor, Clock } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { licenseApi } from '../api/client';

export default function LookupPage({ onOpenOrder }) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    document.title = 'Tra Cứu Bản Quyền Online | KTS TimeAttendance';
    window.scrollTo(0, 0);
    const initialQuery = searchParams.get('q');
    if (initialQuery) {
      handleSearchQuery(initialQuery);
    }
  }, []);

  const handleSearchQuery = async (searchVal) => {
    if (!searchVal.trim()) return;
    setLoading(true);
    setError('');
    setResults(null);
    try {
      const res = await licenseApi.lookupLicense(searchVal.trim());
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

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!query.trim()) {
      setError('Vui lòng nhập Mã máy tính (Machine ID) hoặc Số điện thoại để tra cứu');
      return;
    }
    handleSearchQuery(query);
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
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Back navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại Trang Chủ
        </Link>

        {/* Card Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto mb-2">
              <Search className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Tra Cứu Mã Bản Quyền Online</h1>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Nhập Số điện thoại đăng ký hoặc Mã máy tính (Machine ID) để lấy lại License Key kích hoạt phần mềm.
            </p>
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Nhập Mã máy tính (KTS-...) hoặc Số điện thoại (VD: 0776980269)..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
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
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
              <div>
                <p className="font-semibold">{error}</p>
                <p className="mt-1 text-[11px] text-slate-600">
                  Nếu bạn vừa chuyển khoản, vui lòng đợi 2-5 phút hoặc nhắn Zalo hỗ trợ: <strong className="text-blue-700">0776.980.269</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <div className="space-y-4 pt-2">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">{item.customerName}</span>
                      <span className="text-[11px] text-slate-500">Mã đơn hàng: <strong className="font-mono text-blue-600">{item.orderCode}</strong></span>
                    </div>
                    <div>{getStatusBadge(item.status, item.paymentStatus)}</div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
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
                      <span className="text-slate-500 block text-[11px]">Ngày đăng ký:</span>
                      <span className="text-slate-700">{new Date(item.createdAt).toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>

                  {/* License Key box if ACTIVE */}
                  {item.status === 'ACTIVE' && item.licenseKey ? (
                    <div className="pt-3 border-t border-slate-200 space-y-3">
                      <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <KeyRound className="w-4 h-4 text-amber-600" /> Chuỗi Mã Kích Hoạt Phần Mềm (License Key):
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          readOnly
                          value={item.licenseKey}
                          className="w-full px-3.5 py-2.5 pr-28 rounded-xl bg-white border border-amber-300 text-amber-900 font-mono text-xs select-all focus:outline-none shadow-xs"
                        />
                        <button
                          onClick={() => copyLicenseKey(item.licenseKey)}
                          className="absolute right-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                        >
                          {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey ? 'Đã chép!' : 'Sao chép'}</span>
                        </button>
                      </div>

                      {/* Step by step guide */}
                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-blue-900 space-y-1.5">
                        <p className="font-bold text-blue-950">👉 Hướng dẫn kích hoạt vào phần mềm:</p>
                        <p>1. Mở phần mềm <strong>KTS TimeAttendance</strong> trên máy tính của bạn.</p>
                        <p>2. Nhấp vào nút <strong>Bản quyền</strong> ở góc trái dưới cùng màn hình.</p>
                        <p>3. Dán chuỗi mã trên vào ô và bấm <strong>Kích hoạt bản quyền</strong> là xong!</p>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                      <span>Đơn hàng đang chờ nhân viên duyệt chuyển khoản để sinh mã key.</span>
                      <button
                        onClick={onOpenOrder}
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
    </div>
  );
}
