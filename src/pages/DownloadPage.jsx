import React, { useEffect } from 'react';
import DownloadSection from '../components/DownloadSection';
import FaqSection from '../components/FaqSection';
import { Download, Monitor, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DownloadPage() {
  useEffect(() => {
    document.title = 'Tải Phần Mềm KTS TimeAttendance v2.0.2 | Dùng Thử Miễn Phí 30 Ngày';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-blue-50/60 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold mb-4 shadow-2xs">
            <Download className="w-3.5 h-3.5" />
            <span>Tải Bản Phát Hành Mới Nhất v2.0.2 Official</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tải Phần Mềm KTS TimeAttendance
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm đầy đủ 100% tính năng miễn phí 30 ngày. Không cần đăng ký thẻ tín dụng. Tự động nhận diện thiết bị qua mạng LAN và Cloud ADMS. Tương thích Windows 10 & 11 (64-bit).
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Mã hóa nhị phân bảo mật 100%
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-blue-600" /> Không yêu cầu quyền Administrator
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Cập nhật 1-Click trực tiếp Local
            </span>
          </div>
        </div>
      </section>

      {/* Main Download Section with Cards & Release Notes */}
      <DownloadSection />

      {/* FAQ */}
      <FaqSection />
    </div>
  );
}
