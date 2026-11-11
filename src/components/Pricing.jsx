import React from 'react';
import { Check } from 'lucide-react';

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
        'Hỗ trợ máy Ronald Jack, Gigata, ZK',
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
      discountBadge: 'Khuyên Dùng',
      description: 'Lựa chọn phổ biến cho nhà máy, công ty sản xuất & văn phòng vận hành liên tục',
      features: [
        'Toàn bộ quyền lợi của gói tháng',
        'Tiết kiệm hơn 25% ngân sách phần mềm',
        'Miễn phí cập nhật phiên bản mới suốt 1 năm',
        'Hỗ trợ cấu hình ca kíp phức tạp tận nơi online',
        'Ưu tiên hỗ trợ kỹ thuật 24/7'
      ]
    },
    {
      id: 'LIFETIME',
      name: 'Gói Vĩnh Viễn',
      price: 2490000,
      formattedPrice: '2.490.000đ',
      period: '/trọn đời',
      isBestValue: true,
      discountBadge: 'Dùng Mãi Mãi',
      description: 'Thanh toán 1 lần duy nhất, sở hữu bản quyền vĩnh viễn không lo gia hạn',
      features: [
        'Bản quyền vĩnh viễn khóa theo máy tính',
        'Không phát sinh bất kỳ phí duy trì hàng năm',
        'Miễn phí nâng cấp tất cả bản cập nhật tương lai',
        'Hỗ trợ cấp lại mã khi đổi máy tính (tối đa 3 lần)',
        'Đội ngũ kỹ sư KTS hỗ trợ trực tiếp ưu tiên cao nhất'
      ]
    }
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  return (
    <section id="pricing" className="py-24 bg-slate-50/70 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Bảng Giá Bản Quyền</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chi Phí Rõ Ràng, Kích Hoạt Tức Thì
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Kích hoạt ngay bằng mã Machine ID hiển thị trên ứng dụng. Hỗ trợ quét mã VietQR tự động 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {displayPlans.map((p) => {
            const isHighlight = p.isPopular;
            return (
              <div
                key={p.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 -translate-y-1.5'
                    : 'bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Popular Pill */}
                {p.discountBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
                    {p.discountBadge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-slate-900">{p.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[34px] leading-relaxed">{p.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {p.formattedPrice || Number(p.price).toLocaleString('vi-VN') + 'đ'}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{p.period}</span>
                  </div>

                  {/* Feature list - Clean and subtle */}
                  <ul className="space-y-3 mb-8">
                    {p.features?.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => onSelectPlan(p)}
                  className={`w-full py-3 rounded-xl font-semibold text-xs tracking-wide transition-all ${
                    isHighlight
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-[0.98]'
                  }`}
                >
                  Chọn Gói Này
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          Hỗ trợ kích hoạt bản quyền tự động trong 5-15 phút sau khi chuyển khoản.
        </div>
      </div>
    </section>
  );
}
