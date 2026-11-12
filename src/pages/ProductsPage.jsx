import React, { useEffect } from 'react';
import HardwareProducts from '../components/HardwareProducts';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import { Wrench, PhoneCall, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function ProductsPage({ onOpenConsultation }) {
  useEffect(() => {
    document.title = 'Máy Chấm Công Chính Hãng & Thi Công Trọn Gói | KTS TimeAttendance';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Page Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-4 shadow-2xs">
            <Wrench className="w-3.5 h-3.5" />
            <span>Phân Phối Thiết Bị & Lắp Đặt Tận Nơi Toàn Quốc</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Máy Chấm Công Chính Hãng & Dịch Vụ Thi Công Trọn Gói
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            KTS chuyên phân phối các dòng máy chấm công nhận diện khuôn mặt Face ID, vân tay và thẻ từ chính hãng ZKTeco, Ronald Jack, Gigata mới 100%. Đội ngũ kỹ sư trực tiếp khảo sát, kéo dây mạng CAT6 thẩm mỹ, cấu hình phần mềm và chuyển giao tận nơi.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Bảo hành 12 - 24 tháng chính hãng
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Truck className="w-4 h-4 text-blue-600" /> Khảo sát & Lắp đặt trong ngày (2 - 4h)
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Sparkles className="w-4 h-4 text-indigo-600" /> Tặng kèm phần mềm bản quyền trọn đời
            </span>
          </div>
        </div>
      </section>

      {/* Main Hardware Products & Turnkey Installation Workflow */}
      <HardwareProducts onOpenConsultation={onOpenConsultation} />

      {/* Testimonials & FAQs */}
      <Testimonials />
      <FaqSection />
    </div>
  );
}
