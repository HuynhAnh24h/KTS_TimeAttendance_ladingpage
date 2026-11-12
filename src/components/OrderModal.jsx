import React, { useState, useEffect } from 'react';
import { X, Sparkles, AlertCircle, Monitor, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { licenseApi } from '../api/client';

export default function OrderModal({ isOpen, onClose, selectedPlan, onSuccess }) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    company: '',
    machineId: '',
    packageType: 'PRO_YEARLY'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const packageOptions = [
    {
      group: 'Khuyên Dùng Cho Chuỗi',
      items: [
        { id: 'PRO_YEARLY', label: 'Pro Đa Chi Nhánh (1 Năm)', price: '2.490.000đ', badge: 'Bán chạy' },
        { id: 'PRO_LIFETIME', label: 'Pro Đa Chi Nhánh (Vĩnh Viễn)', price: '4.890.000đ', badge: 'Tiết kiệm' }
      ]
    },
    {
      group: 'Văn Phòng 1 Địa Điểm (Mạng LAN)',
      items: [
        { id: 'STANDARD_YEARLY', label: 'Tiêu Chuẩn (1 Năm)', price: '890.000đ' },
        { id: 'STANDARD_LIFETIME', label: 'Tiêu Chuẩn (Vĩnh Viễn)', price: '1.890.000đ' }
      ]
    },
    {
      group: 'Khác',
      items: [
        { id: 'ENTERPRISE', label: 'Enterprise (Trọn Gói ERP)', price: '8.900.000đ' },
        { id: 'MONTHLY', label: 'Dùng Thử (1 Tháng)', price: '99.000đ' }
      ]
    }
  ];

  useEffect(() => {
    if (selectedPlan && selectedPlan.id) {
      setFormData(prev => ({
        ...prev,
        packageType: selectedPlan.id
      }));
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.customerName.trim()) {
      setError('Vui lòng nhập họ và tên người đại diện');
      return;
    }
    if (!formData.company.trim()) {
      setError('Vui lòng nhập Tên công ty / Doanh nghiệp sử dụng');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Vui lòng nhập số điện thoại hoặc Zalo liên hệ');
      return;
    }
    if (!formData.machineId.trim()) {
      setError('Vui lòng nhập Mã máy tính (Machine ID) để khóa bản quyền');
      return;
    }

    setLoading(true);
    try {
      const res = await licenseApi.orderLicense(formData);
      if (res.success && res.order) {
        onSuccess(res.order);
      } else {
        setError(res.message || 'Có lỗi xảy ra khi tạo đơn hàng');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Không thể kết nối đến máy chủ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Đăng Ký Mua Bản Quyền</h2>
            <p className="text-xs text-slate-500">Kích hoạt phần mềm KTS TimeAttendance v2.0</p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Chọn gói phân chia theo nhóm rõ ràng */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Chọn Gói Bản Quyền Đăng Ký
            </label>
            <div className="space-y-3">
              {packageOptions.map((group, gIdx) => (
                <div key={gIdx} className="space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
                    {group.group}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((opt) => {
                      const isSelected = formData.packageType === opt.id;
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setFormData({ ...formData, packageType: opt.id })}
                          className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-500 shadow-xs'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs font-bold leading-tight">{opt.label}</span>
                            {opt.badge && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase bg-blue-600 text-white shrink-0">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-blue-700' : 'text-slate-600'}`}>
                            {opt.price}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Họ tên & SĐT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Họ & Tên khách hàng *
              </label>
              <input
                type="text"
                required
                placeholder="Nguyễn Văn A"
                value={formData.customerName}
                onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Số điện thoại / Zalo *
              </label>
              <input
                type="tel"
                required
                placeholder="0912345678"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Công ty & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tên công ty / Doanh nghiệp *
              </label>
              <input
                type="text"
                required
                placeholder="VD: Công ty CP May Sài Gòn"
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
              <p className="text-[10px] text-slate-400 mt-0.5">Bản quyền được cấp cho tên công ty này</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email nhận mã bản quyền
              </label>
              <input
                type="email"
                placeholder="khachhang@gmail.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Machine ID */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                Mã Máy Tính (Machine ID) *
              </label>
              <span className="text-[10px] text-blue-600 font-semibold flex items-center gap-1">
                <Monitor className="w-3 h-3" /> Lấy trên màn hình App
              </span>
            </div>
            <input
              type="text"
              required
              placeholder="Ví dụ: KTS-A1B2-C3D4-E5F6"
              value={formData.machineId}
              onChange={e => setFormData({ ...formData, machineId: e.target.value.toUpperCase() })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono uppercase tracking-wider placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
            />
            <p className="mt-1 text-[11px] text-slate-500 leading-normal">
              💡 <strong>Cách lấy mã:</strong> Mở phần mềm KTS TimeAttendance trên máy bạn muốn cài đặt, nhấp vào nút <strong>Bản quyền</strong> ở góc trái bên dưới để sao chép Mã máy tính.
            </p>
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Đang xử lý đơn đăng ký...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> Tiếp Tục Thanh Toán VietQR Tự Động
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
