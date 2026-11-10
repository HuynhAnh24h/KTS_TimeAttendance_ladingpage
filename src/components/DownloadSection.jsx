import React from 'react';
import { Download, Monitor, CheckCircle2, ShieldCheck, HardDrive, Cpu, Terminal } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Tải & Cài Đặt 1-Click</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trải Nghiệm Miễn Phí 30 Ngày Ngay Hôm Nay
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Tải về bộ cài đặt chính thức hoặc bản Portable không cần cài đặt. Không cần cấu hình phức tạp, bật lên là dùng được ngay.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Card 1: Setup Installer */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Khuyên Dùng
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bộ Cài Đặt Setup 1-Click</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Tự động tạo icon trên Desktop, không đòi hỏi quyền Admin, tích hợp chuẩn hóa hệ thống Windows.
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dung lượng: ~57 MB (.exe)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Phiên bản: 2.0.0 Commercial Edition</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Tự động kích hoạt 30 ngày dùng thử</span>
                </div>
              </div>
            </div>

            <a
              href="/downloads/KTS_TimeAttendance_Commercial_Setup_v2.0.exe"
              download
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Tải Bộ Cài Đặt Setup (.exe)
            </a>
          </div>

          {/* Card 2: Portable Zip */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold mb-4">
                <HardDrive className="w-3.5 h-3.5" /> Bản Portable
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bản Chạy Trực Tiếp (ZIP)</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Dành cho kỹ thuật viên mang theo USB hoặc triển khai nhanh mà không cần chạy trình cài đặt.
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  <span>Dung lượng: ~67 MB (.zip)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  <span>Chỉ cần giải nén & nhấp đúp file chạy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  <span>Chạy 1 App duy nhất, không có CMD</span>
                </div>
              </div>
            </div>

            <a
              href="/downloads/KTS_TimeAttendance_Portable_v2.0.zip"
              download
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Tải Bản Nén Portable (.zip)
            </a>
          </div>
        </div>

        {/* 3 Steps Guide */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 max-w-4xl mx-auto">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-center mb-8">
            3 Bước Cài Đặt Đơn Giản Trong 1 Phút
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm flex items-center justify-center mx-auto mb-3 border border-blue-500/20">
                1
              </div>
              <h5 className="text-sm font-bold text-white mb-1">Tải file .exe về máy</h5>
              <p className="text-xs text-slate-400">Bấm nút tải bộ cài đặt ở trên về máy tính.</p>
            </div>
            <div className="p-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm flex items-center justify-center mx-auto mb-3 border border-blue-500/20">
                2
              </div>
              <h5 className="text-sm font-bold text-white mb-1">Cài đặt 1-Click</h5>
              <p className="text-xs text-slate-400">Nhấp đúp mở file, bấm Next & Install để hoàn tất.</p>
            </div>
            <div className="p-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm flex items-center justify-center mx-auto mb-3 border border-blue-500/20">
                3
              </div>
              <h5 className="text-sm font-bold text-white mb-1">Kết nối & Sử dụng</h5>
              <p className="text-xs text-slate-400">Mở icon KTS ngoài Desktop và kết nối IP máy chấm công.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
