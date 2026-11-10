import React from 'react';
import { Check, Sparkles, Shield, Zap, Star } from 'lucide-react';

export default function Pricing({ plans = [], onSelectPlan }) {
  const defaultPlans = [
    {
      id: 'MONTHLY',
      name: 'Gói 1 Tháng',
      price: 99000,
      formattedPrice: '99.000đ',
      period: '/tháng',
      description: 'Trải nghiệm linh hoạt, phù hợp doanh nghiệp thử nghiệm hoặc dự án ngắn hạn',
      features: [
        'Mở khóa 100% tính năng phần mềm',
        'Hỗ trợ máy chấm công Ronald Jack, Gigata, ZK',
        'Không giới hạn nhân viên & máy chấm công',
        'Xuất Excel ma trận chấm công 31 ngày',
        'Hỗ trợ kỹ thuật online qua Zalo / UltraView'
      ]
    },
    {
      id: 'YEARLY',
      name: 'Gói 1 Năm',
      price: 899000,
      formattedPrice: '899.000đ',
      period: '/năm',
      isPopular: true,
      discountBadge: 'Tiết Kiệm 25%',
      description: 'Lựa chọn số 1 cho nhà máy, công ty sản xuất & văn phòng vận hành liên tục',
      features: [
        'Toàn bộ quyền lợi của gói tháng',
        'Tiết kiệm hơn 25% ngân sách phần mềm',
        'Miễn phí cập nhật phiên bản mới suốt 1 năm',
        'Hỗ trợ cấu hình ca kíp phức tạp & kết nối máy tận nơi online',
        'Ưu tiên hỗ trợ kỹ thuật 24/7'
      ]
    },
    {
      id: 'LIFETIME',
      name: 'Gói Vĩnh Viễn (Trọn Đời)',
      price: 2490000,
      formattedPrice: '2.490.000đ',
      period: '/trọn đời',
      isBestValue: true,
      discountBadge: 'Dùng Mãi Mãi',
      description: 'Thanh toán 1 lần duy nhất, sở hữu bản quyền vĩnh viễn không lo gia hạn',
      features: [
        'Bản quyền vĩnh viễn khóa theo máy tính',
        'Không phát sinh chi phí duy trì hàng năm',
        'Miễn phí nâng cấp tất cả các bản cập nhật tương lai',
        'Hỗ trợ cấp lại mã kích hoạt khi thay máy tính (tối đa 3 lần)',
        'Đội ngũ kỹ sư KTS hỗ trợ trực tiếp ưu tiên cao nhất'
      ]
    }
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Bảng Giá Bản Quyền Minh Bạch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Chọn Gói Bản Quyền Phù Hợp Với Bạn
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Kích hoạt ngay bằng mã Machine ID hiển thị trên phần mềm. Thanh toán quét mã VietQR tự động 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {displayPlans.map((p) => {
            const isHighlight = p.isPopular || p.isBestValue;
            return (
              <div
                key={p.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-slate-900/90 border-2 border-blue-500 shadow-2xl shadow-blue-500/10 -translate-y-2'
                    : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge if Popular */}
                {p.discountBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                    {p.discountBadge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{p.name}</h3>
                    {p.isBestValue && <Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] mb-6">{p.description}</p>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-800">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {p.formattedPrice || Number(p.price).toLocaleString('vi-VN') + 'đ'}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{p.period}</span>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8">
                    {p.features?.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectPlan(p)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isHighlight
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                  }`}
                >
                  <Sparkles className="w-4 h-4" /> Đăng Ký Mua Gói Này
                </button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            🛡️ Hỗ trợ kích hoạt bản quyền nhanh trong 5-15 phút. Bạn có thể tự tra cứu mã kích hoạt bất cứ lúc nào.
          </p>
        </div>
      </div>
    </section>
  );
}
