import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Zap, Fingerprint, BookOpen } from 'lucide-react';

export default function Hero({ onOpenOrder }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Phiên bản Thương mại v2.0 - Tích hợp Gigata T9 & ZKTeco</span>
          <span className="text-slate-300">|</span>
          <span className="text-blue-600 font-bold">Chạy 1 App Native</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Phần Mềm Quản Lý Chấm Công <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
            Thông Minh & Toàn Diện
          </span>{' '}
          Cho Doanh Nghiệp
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Đồng bộ máy chấm công IP nội bộ không cần mở port mạng. Tự động nhận diện ca kíp, tổng hợp công
          và xuất báo cáo Excel ma trận 31 ngày chuẩn mực Bộ Luật Lao Động.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" /> Tải Bộ Cài Đặt (.exe)
          </a>

          <Link
            to="/huong-dan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-blue-600" /> Hướng Dẫn Sử Dụng
          </Link>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-500" /> Bảng Giá Bản Quyền
          </a>

          <Link
            to="/tra-cuu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Tra Cứu Key <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature Badges Grid */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
              <Fingerprint className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Tương thích mọi máy</p>
              <p className="text-[11px] text-slate-500">Ronald Jack, Gigata T9, ZK</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Tự động nhận diện</p>
              <p className="text-[11px] text-slate-500">Ca đêm, xoay ca, tăng ca OT</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Offline an toàn 100%</p>
              <p className="text-[11px] text-slate-500">Không lo rò rỉ dữ liệu máy chủ</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Bản quyền phần cứng</p>
              <p className="text-[11px] text-slate-500">Khóa Machine ID duy nhất</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
