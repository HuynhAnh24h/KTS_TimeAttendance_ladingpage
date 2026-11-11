import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero({ onOpenOrder }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-grid-subtle">
      {/* Ambient background glows with subtle animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[300px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Pill with gentle pulse */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-xs font-medium text-slate-700 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] mb-8 hover:border-slate-300 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-800 font-semibold">Bản Thương Mại v2.0</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-slate-600">Dò tìm máy chấm công LAN tự động</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Phần Mềm Quản Lý Chấm Công <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Thông Minh & Chuẩn Mực
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Tự động kết nối và nhận diện máy chấm công qua mạng LAN không cần cấu hình IP thủ công.
          Tự động tìm ca, tổng hợp dữ liệu và xuất báo cáo ma trận Excel 31 ngày chuẩn Luật Lao Động.
        </p>

        {/* Refined CTA: Clean & Focused without icon clutter */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" /> Tải Bộ Cài Đặt (Miễn Phí)
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
          >
            Xem Bảng Giá Bản Quyền
          </a>
        </div>

        {/* Subtle secondary link */}
        <div className="mt-4">
          <Link
            to="/tra-cuu"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            Đã có mã kích hoạt? Tra cứu bản quyền <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Software App Mockup with Smooth Float Animation */}
        <div className="mt-14 relative max-w-4xl mx-auto">
          {/* Decorative Floating Stat Badges */}
          <div className="hidden md:flex absolute -top-5 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-float">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-left">
              <p className="text-[11px] font-bold text-slate-900">Radar Quét LAN Siêu Tốc</p>
              <p className="text-[10px] text-slate-500">Tự nhận diện máy trong 0.7s</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-float-reverse">
            <span className="text-sm">📊</span>
            <div className="text-left">
              <p className="text-[11px] font-bold text-slate-900">Xuất Báo Cáo Excel 31 Ngày</p>
              <p className="text-[10px] text-slate-500">Chuẩn Bộ Luật Lao Động 2026</p>
            </div>
          </div>

          {/* Main App Window Mockup */}
          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(15,23,42,0.12)]">
            {/* Window Titlebar */}
            <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-semibold text-slate-600 hidden sm:inline">
                  KTS TimeAttendance v2.0 - [Hệ Thống Chấm Công Doanh Nghiệp]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> CSDL Cục Bộ Sẵn Sàng
                </span>
              </div>
            </div>

            {/* Window Content Mockup */}
            <div className="p-5 sm:p-7 bg-white text-left">
              {/* Top stats bar inside app */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-medium text-slate-500">Tổng Máy Chấm Công</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">03 Máy</p>
                  <span className="text-[10px] text-emerald-600 font-semibold">Đã đồng bộ LAN</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-medium text-slate-500">Tổng Nhân Sự</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">1.250</p>
                  <span className="text-[10px] text-blue-600 font-semibold">Đồng bộ vân tay</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-medium text-slate-500">Đã Điểm Danh Hôm Nay</p>
                  <p className="text-xl font-bold text-emerald-600 mt-1">1.218</p>
                  <span className="text-[10px] text-slate-500 font-medium">97.4% có mặt</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[11px] font-medium text-slate-500">Tăng Ca (OT)</p>
                  <p className="text-xl font-bold text-indigo-600 mt-1">42 người</p>
                  <span className="text-[10px] text-indigo-600 font-medium">Hệ số 1.5x - 2.0x</span>
                </div>
              </div>

              {/* Live LAN Device Scan Simulation inside app */}
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">Máy Chấm Công Trong Mạng LAN</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700">Tự động nhận diện</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Dải IP: 192.168.1.1 - 192.168.1.254</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/70 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-slate-900">ZKTeco SpeedFace-V5L</span>
                      <span className="text-slate-400 font-mono">192.168.1.103:4370</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 hidden sm:inline">877 Nhân viên</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[11px]">Đã kết nối</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/70 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-slate-900">Gigata T9 / Ronald Jack</span>
                      <span className="text-slate-400 font-mono">192.168.1.201:4370</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 hidden sm:inline">877 Nhân viên</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[11px]">Đã kết nối</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Credibility Logos / Compatibility Line */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
            Tương thích toàn diện với các dòng máy chấm công phổ biến
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500">
            <span className="hover:text-slate-800 transition-colors">Ronald Jack</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-800 transition-colors">Gigata T8 / T9 / FA-113</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-800 transition-colors">ZKTeco Biometric</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-800 transition-colors">Wise Eye</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-800 transition-colors">Giao thức ZK 4370 UDP/TCP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
