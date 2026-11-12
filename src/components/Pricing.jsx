import React, { useState } from 'react';
import { Check, Sparkles, Building2, Shield, Network, Zap } from 'lucide-react';

export default function Pricing({ plans = [], onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'yearly' | 'lifetime'

  // Map package configurations
  const packageCatalog = {
    standard: {
      tag: 'Cơ Bản / Văn Phòng',
      title: 'Gói Tiêu Chuẩn (Standard)',
      badge: null,
      description: 'Dành cho văn phòng, xưởng sản xuất hoặc công ty 1 địa điểm trong cùng mạng LAN',
      icon: Network,
      yearly: {
        id: 'STANDARD_YEARLY',
        price: 890000,
        formattedPrice: '890.000đ',
        period: '/năm',
        subtext: 'Gia hạn linh hoạt hàng năm'
      },
      lifetime: {
        id: 'STANDARD_LIFETIME',
        price: 1890000,
        formattedPrice: '1.890.000đ',
        period: '/trọn đời',
        subtext: 'Thanh toán 1 lần dùng mãi mãi'
      },
      features: [
        'Hỗ trợ toàn bộ máy ZKTeco, Ronald Jack, Gigata T9',
        'Quét Radar mạng LAN siêu tốc chỉ 0.7 giây',
        'Không giới hạn nhân viên & máy chấm công nội bộ',
        'Thuật toán Auto-Shift tự động tìm ca thông minh',
        'Báo cáo bảng công ma trận 31 ngày chuẩn Excel',
        'Tính lương tự động (OT 1.5x, 2.0x, 3.0x, tạm ứng, BHXH)',
        'Kích hoạt bản quyền Offline theo Machine ID',
        'Cập nhật phần mềm 1-Click trực tiếp Local'
      ]
    },
    pro: {
      tag: 'Khuyên Dùng Cho Chuỗi',
      title: 'Gói Pro Đa Chi Nhánh (Cloud ADMS)',
      badge: 'Bán Chạy Nhất',
      description: 'Chấm công tập trung chuỗi cửa hàng, nhiều chi nhánh toàn quốc không cần IP tĩnh',
      icon: Zap,
      isPopular: true,
      yearly: {
        id: 'PRO_YEARLY',
        price: 2490000,
        formattedPrice: '2.490.000đ',
        period: '/năm',
        subtext: 'Bao gồm Cloud Push ADMS trọn năm'
      },
      lifetime: {
        id: 'PRO_LIFETIME',
        price: 4890000,
        formattedPrice: '4.890.000đ',
        period: '/trọn đời',
        subtext: 'Bản quyền & Cloud Push trọn đời'
      },
      features: [
        'Toàn bộ tính năng cao cấp của Gói Tiêu Chuẩn',
        'Mở khóa tính năng Đa Chi Nhánh (Multi-Branch)',
        'ZKTeco Native ADMS Cloud Push: Đẩy dữ liệu Real-time',
        'Xuyên tường lửa & NAT: Hoạt động ngay không cần mở Port modem',
        'Không cần thuê IP tĩnh, tiết kiệm hàng triệu đồng/năm',
        'KTS Edge Sync Agent cho các máy đời cũ qua Internet',
        'Quản lý không giới hạn số lượng chi nhánh & máy chấm công',
        'Báo cáo & bảng lương riêng biệt từng chi nhánh hoặc toàn bộ chuỗi',
        'Kỹ sư KTS hỗ trợ cấu hình từ xa tận nơi qua UltraView/Zalo'
      ]
    },
    enterprise: {
      tag: 'Tập Đoàn / Tùy Biến ERP',
      title: 'Gói Doanh Nghiệp (Enterprise)',
      badge: 'Tùy Biến Cao Cấp',
      description: 'Dành cho nhà máy quy mô lớn hoặc tập đoàn cần tích hợp trực tiếp ERP / Kế toán',
      icon: Building2,
      yearly: {
        id: 'ENTERPRISE',
        price: 8900000,
        formattedPrice: '8.900.000đ',
        period: '/trọn gói',
        subtext: 'Triển khai chìa khóa trao tay'
      },
      lifetime: {
        id: 'ENTERPRISE',
        price: 8900000,
        formattedPrice: '8.900.000đ',
        period: '/trọn gói',
        subtext: 'Triển khai chìa khóa trao tay'
      },
      features: [
        'Toàn bộ tính năng Gói Pro Đa Chi Nhánh',
        'Triển khai máy chủ riêng On-Premise hoặc Private Cloud',
        'API 2 chiều kết nối ERP (MISA, FAST, BRAVO, SAP, Base)',
        'Tùy chỉnh công thức tính lương & phụ cấp theo quy chế công ty',
        'Kỹ sư chuyên gia khảo sát & đào tạo nhân sự tận nơi',
        'Cam kết SLA 99.9% và bảo hành hệ thống trọn đời'
      ]
    }
  };

  const handleSelect = (tierKey) => {
    const tier = packageCatalog[tierKey];
    const planData = billingCycle === 'yearly' ? tier.yearly : tier.lifetime;
    
    // Find matching plan from API plans if available, else construct payload
    const foundPlan = plans.find(p => p.id === planData.id);
    const selected = foundPlan || {
      id: planData.id,
      name: `${tier.title} (${billingCycle === 'yearly' ? '1 Năm' : 'Vĩnh Viễn'})`,
      price: planData.price,
      formattedPrice: planData.formattedPrice,
      period: planData.period,
      features: tier.features
    };
    onSelectPlan(selected);
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50/80 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Bảng Giá Bản Quyền Minh Bạch</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chọn Gói Phù Hợp Cho Doanh Nghiệp Bạn
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Từ văn phòng 1 địa điểm đến chuỗi hàng chục chi nhánh toàn quốc. Kích hoạt tự động 24/7 bằng quét VietQR.
          </p>

          {/* Billing Cycle Switcher Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thanh Toán Theo Năm
            </button>
            <button
              onClick={() => setBillingCycle('lifetime')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'lifetime'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Bản Quyền Vĩnh Viễn</span>
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800">
                Tiết Kiệm 50%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {/* TIER 1: STANDARD */}
          {(() => {
            const t = packageCatalog.standard;
            const p = billingCycle === 'yearly' ? t.yearly : t.lifetime;
            return (
              <div className="relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-slate-500 px-2.5 py-1 bg-slate-100 rounded-md">
                      {t.tag}
                    </span>
                    <Network className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 min-h-[38px] leading-relaxed">{t.description}</p>

                  <div className="flex items-baseline gap-1.5 mt-5 mb-2">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {p.formattedPrice}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{p.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-6 pb-6 border-b border-slate-100">
                    {p.subtext}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelect('standard')}
                  className="w-full py-3 rounded-xl font-bold text-xs tracking-wide bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Chọn Gói Tiêu Chuẩn
                </button>
              </div>
            );
          })()}

          {/* TIER 2: PRO MULTI-BRANCH (HERO / HIGHLIGHTED) */}
          {(() => {
            const t = packageCatalog.pro;
            const p = billingCycle === 'yearly' ? t.yearly : t.lifetime;
            return (
              <div className="relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white border-2 border-blue-600 shadow-2xl shadow-blue-500/15 -translate-y-2 transition-all duration-300 ring-4 ring-blue-50">
                {/* Popular Pill */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.badge}</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-blue-700 px-2.5 py-1 bg-blue-50 rounded-md">
                      {t.tag}
                    </span>
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 min-h-[38px] leading-relaxed">{t.description}</p>

                  <div className="flex items-baseline gap-1.5 mt-5 mb-2">
                    <span className="text-3xl font-extrabold text-blue-600 tracking-tight">
                      {p.formattedPrice}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{p.period}</span>
                  </div>
                  <div className="text-[11px] text-blue-600/80 font-medium mb-6 pb-6 border-b border-slate-100">
                    ⚡ {p.subtext}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <Check className="w-4 h-4 text-blue-600 font-bold shrink-0 mt-0.5" />
                        <span className={i < 4 ? 'font-semibold text-slate-900' : ''}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelect('pro')}
                  className="w-full py-3.5 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Đăng Ký Gói Pro Ngay
                </button>
              </div>
            );
          })()}

          {/* TIER 3: ENTERPRISE */}
          {(() => {
            const t = packageCatalog.enterprise;
            const p = billingCycle === 'yearly' ? t.yearly : t.lifetime;
            return (
              <div className="relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-purple-700 px-2.5 py-1 bg-purple-50 rounded-md">
                      {t.tag}
                    </span>
                    <Building2 className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 min-h-[38px] leading-relaxed">{t.description}</p>

                  <div className="flex items-baseline gap-1.5 mt-5 mb-2">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {p.formattedPrice}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{p.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-6 pb-6 border-b border-slate-100">
                    {p.subtext}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelect('enterprise')}
                  className="w-full py-3 rounded-xl font-bold text-xs tracking-wide bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Liên Hệ Tư Vấn Enterprise
                </button>
              </div>
            );
          })()}
        </div>

        {/* Trial note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Khách hàng có thể trải nghiệm 30 ngày hoàn toàn miễn phí trước khi đăng ký.</span>
          <button
            onClick={() => onSelectPlan({ id: 'MONTHLY', name: 'Gói Trải Nghiệm 1 Tháng', price: 99000, formattedPrice: '99.000đ', period: '/tháng' })}
            className="text-blue-600 font-bold hover:underline cursor-pointer"
          >
            Hoặc chọn gói dùng thử 1 tháng (99.000đ)
          </button>
        </div>
      </div>
    </section>
  );
}
