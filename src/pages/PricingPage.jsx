import React, { useEffect } from 'react';
import Pricing from '../components/Pricing';
import RoiCalculator from '../components/RoiCalculator';
import FaqSection from '../components/FaqSection';
import { Tag, Sparkles, ShieldCheck } from 'lucide-react';

export default function PricingPage({ plans, onSelectPlan }) {
  useEffect(() => {
    document.title = 'Bảng Giá Bản Quyền KTS TimeAttendance | Kích Hoạt Online 24/7';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold mb-4 shadow-2xs">
            <Tag className="w-3.5 h-3.5" />
            <span>Bảng Giá Niêm Yết Minh Bạch • Kích Hoạt Tức Thì 24/7</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Chọn Gói Bản Quyền Tối Ưu Cho Doanh Nghiệp Bạn
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kích hoạt tự động qua quét mã VietQR. Hỗ trợ kích hoạt Offline 100% bằng Machine ID hiển thị trên ứng dụng. Miễn phí nâng cấp phiên bản mới.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Kích hoạt Offline 100%
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Hỗ trợ chuyển đổi máy mới miễn phí 3 lần
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" /> Quét VietQR duyệt tự động sau 1-5 phút
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Matrix */}
      <Pricing plans={plans} onSelectPlan={onSelectPlan} />

      {/* ROI Calculator */}
      <RoiCalculator onOpenOrder={() => onSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)} />

      {/* FAQ Accordion */}
      <FaqSection />
    </div>
  );
}
