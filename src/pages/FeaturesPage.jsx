import React, { useEffect } from 'react';
import WorkflowVisual from '../components/WorkflowVisual';
import Features from '../components/Features';
import ComparisonSection from '../components/ComparisonSection';
import RoiCalculator from '../components/RoiCalculator';
import { Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FeaturesPage({ onOpenOrder }) {
  useEffect(() => {
    document.title = 'Tính Năng & Giải Pháp Công Nghệ | KTS TimeAttendance v2.0.2';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>Kiến Trúc Tự Động Hóa Chấm Công 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Giải Pháp Quản Trị Chấm Công & Tiền Lương Toàn Diện
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Từ doanh nghiệp 1 địa điểm đến chuỗi hàng chục chi nhánh. Tự động quét máy mạng LAN 0.7s, kết nối Cloud ADMS xuyên tường lửa không cần IP tĩnh, thuật toán Auto-Shift đối soát ca kíp 24/7 và tính lương chuẩn kế toán.
          </p>
        </div>
      </section>

      {/* 3 Step Workflow */}
      <WorkflowVisual />

      {/* Bento Grid Features */}
      <Features />

      {/* Comparison with legacy systems */}
      <ComparisonSection />

      {/* ROI & Cost Savings Calculator */}
      <RoiCalculator onOpenOrder={onOpenOrder} />
    </div>
  );
}
