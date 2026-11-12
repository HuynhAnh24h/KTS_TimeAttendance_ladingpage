import React from 'react';
import { Download, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Tải Bản Đầy Đủ</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trải Nghiệm Đầy Đủ Tính Năng Miễn Phí 30 Ngày
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Chọn bộ cài đặt tự động hoặc phiên bản Portable chạy trực tiếp từ USB. Hỗ trợ đầy đủ tính năng Đa Chi Nhánh Cloud ADMS và Tính Lương. Tương thích Windows 10 & 11 (64-bit).
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {/* Card 1: Setup Installer */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold">
                  Khuyên Dùng
                </span>
                <span className="text-xs font-mono text-slate-400">Setup (.exe)</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Bộ Cài Đặt Setup 1-Click
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Tự động tạo biểu tượng ngoài màn hình Desktop, không yêu cầu quyền quản trị Administrator, hỗ trợ cập nhật tự động mượt mà.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Dung lượng: ~57 MB
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200/60">
                  Phiên bản v2.0.2
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/60">
                  Miễn phí 30 ngày
                </span>
              </div>
            </div>

            <a
              href="/downloads/KTS_TimeAttendance_Commercial_Setup_v2.0.exe"
              download="KTS_TimeAttendance_Commercial_Setup_v2.0.exe"
              className="w-full py-3.5 rounded-xl font-semibold text-xs tracking-wide bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
            >
              <Download className="w-4 h-4" /> Tải Bộ Cài Đặt (.exe)
            </a>
          </div>

          {/* Card 2: Portable Zip (Full App v2.0) */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                  Bản Đầy Đủ Portable
                </span>
                <span className="text-xs font-mono text-slate-400">Portable (.zip)</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                Bản Chạy Trực Tiếp Portable
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Đã tích hợp đầy đủ backend và giao diện Desktop, giải nén là chạy ngay không cần cài đặt. Thích hợp lưu trong USB triển khai ngay.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Dung lượng: ~39.8 MB
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200/60">
                  Phiên bản v2.0.2
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Bảo mật nhị phân 100%
                </span>
              </div>
            </div>

            <a
              href="/downloads/KTS_TimeAttendance_Portable_v2.0.zip"
              download="KTS_TimeAttendance_Portable_v2.0.zip"
              className="w-full py-3.5 rounded-xl font-semibold text-xs tracking-wide bg-slate-800 hover:bg-slate-900 text-white shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
            >
              <Download className="w-4 h-4" /> Tải Bản Nén Portable (.zip)
            </a>
          </div>
        </div>

        {/* 3 Steps Guide */}
        <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/70 max-w-4xl mx-auto mb-8">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center mb-8">
            3 Bước Bắt Đầu Nhanh
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-3">
              <span className="inline-flex w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center mb-3">
                1
              </span>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">Tải về</h5>
              <p className="text-xs text-slate-500">Tải file cài đặt (.exe) hoặc giải nén file Portable (.zip).</p>
            </div>
            <div className="p-3">
              <span className="inline-flex w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center mb-3">
                2
              </span>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">Khởi động</h5>
              <p className="text-xs text-slate-500">Mở ứng dụng, đăng nhập tài khoản <code>admin / admin123</code>.</p>
            </div>
            <div className="p-3">
              <span className="inline-flex w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center mb-3">
                3
              </span>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">Nhận diện máy & Sử dụng</h5>
              <p className="text-xs text-slate-500">Bấm nút "Tự Động Nhận Diện Máy (LAN)" hoặc kết nối Đa Chi Nhánh ADMS.</p>
            </div>
          </div>
        </div>

        {/* Release Notes Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50/60 to-indigo-50/40 border border-blue-100 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-blue-200/50">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white">
                v2.0.2 OFFICIAL
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Nhật Ký Bản Phát Hành Mới (Release Notes)
              </h4>
            </div>
            <span className="text-xs text-slate-500">Cập nhật ngày: 12/11/2026</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Chấm Công Đa Chi Nhánh Cloud ADMS:</strong> Tự động đẩy dữ liệu thời gian thực không cần IP tĩnh (Zero NAT).</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Tính Lương Tự Động Kế Toán:</strong> Tính hệ số OT 1.5x, 2.0x, 3.0x, phụ cấp ca đêm 30%, khấu trừ bảo hiểm 10.5%.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Phân chia các gói bản quyền:</strong> Bổ sung Gói Pro Đa Chi Nhánh và Enterprise đáp ứng từng quy mô doanh nghiệp.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Cập nhật 1-Click Local:</strong> Quản trị viên nâng cấp mượt mà ngay trong ứng dụng không làm mất dữ liệu.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
