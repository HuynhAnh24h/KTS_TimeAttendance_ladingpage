import React from 'react';
import { Download } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Tải Phần Mềm</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trải Nghiệm Miễn Phí 30 Ngày Ngay Hôm Nay
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Chọn bộ cài đặt tự động hoặc phiên bản Portable chạy trực tiếp từ USB. Tương thích hoàn toàn Windows 10 & 11 (64-bit).
          </p>
        </div>

        {/* Download Cards - Clean without repetitive checkmark icons */}
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
                Tự động tạo biểu tượng ngoài màn hình Desktop, không yêu cầu quyền quản trị Administrator, cập nhật mượt mà.
              </p>

              {/* Specifications as clean metadata pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Dung lượng: ~57 MB
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Phiên bản 2.0.0
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/60">
                  Miễn phí 30 ngày
                </span>
              </div>
            </div>

            <a
              href="/downloads/KTS_TimeAttendance_Commercial_Setup_v2.0.exe"
              download="KTS_TimeAttendance_Commercial_Setup_v2.0.exe"
              className="w-full py-3.5 rounded-xl font-semibold text-xs tracking-wide bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <Download className="w-4 h-4" /> Tải Bộ Cài Đặt (.exe)
            </a>
          </div>

          {/* Card 2: Portable Zip */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                  Bản Di Động
                </span>
                <span className="text-xs font-mono text-slate-400">Portable (.zip)</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                Bản Chạy Trực Tiếp Portable
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Chỉ cần giải nén và mở ứng dụng, phù hợp cho kỹ thuật viên lưu trữ trong USB để triển khai tức thì tại doanh nghiệp.
              </p>

              {/* Specifications as clean metadata pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Dung lượng: ~34 MB
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Không cần cài đặt
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Không bật terminal CMD
                </span>
              </div>
            </div>

            <a
              href="/downloads/KTS_TimeAttendance_Portable_v2.0.zip"
              download="KTS_TimeAttendance_Portable_v2.0.zip"
              className="w-full py-3.5 rounded-xl font-semibold text-xs tracking-wide bg-slate-800 hover:bg-slate-900 text-white shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <Download className="w-4 h-4" /> Tải Bản Nén Portable (.zip)
            </a>
          </div>
        </div>

        {/* 3 Steps Guide - Minimalist & Sleek */}
        <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/70 max-w-4xl mx-auto">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center mb-8">
            3 Bước Bắt Đầu Nhanh
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-3">
              <span className="inline-flex w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center mb-3">
                1
              </span>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">Tải về</h5>
              <p className="text-xs text-slate-500">Tải file cài đặt Setup (.exe) về máy tính.</p>
            </div>
            <div className="p-3">
              <span className="inline-flex w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center mb-3">
                2
              </span>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">Cài đặt 1-Click</h5>
              <p className="text-xs text-slate-500">Nhấp đúp chuột để trình cài đặt tự động hoàn tất.</p>
            </div>
            <div className="p-3">
              <span className="inline-flex w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center mb-3">
                3
              </span>
              <h5 className="text-sm font-semibold text-slate-900 mb-1">Dò tìm máy & Chấm công</h5>
              <p className="text-xs text-slate-500">Bấm nút "Tự Động Nhận Diện Máy (LAN)" là xong.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
