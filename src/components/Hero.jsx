import React from 'react';
import { Download, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Zap, Fingerprint } from 'lucide-react';

export default function Hero({ onOpenOrder, onOpenLookup }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Phiên bản Thương mại v2.0 - Tích hợp Gigata T9 & ZKTeco</span>
          <span className="text-slate-600">|</span>
          <span className="text-blue-400 font-semibold">Chạy 1 App Native</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Phần Mềm Quản Lý Chấm Công <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            Thông Minh & Toàn Diện
          </span>{' '}
          Cho Doanh Nghiệp
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Đồng bộ máy chấm công IP nội bộ không cần mở port mạng. Tự động nhận diện ca kíp, tổng hợp công
          và xuất báo cáo Excel ma trận 31 ngày chuẩn mực Bộ Luật Lao Động.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" /> Tải Bộ Cài Đặt (.exe)
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> Bảng Giá Bản Quyền
          </a>

          <button
            onClick={onOpenLookup}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white transition-colors"
          >
            Tra Cứu Key Bản Quyền <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Feature Badges Grid */}
        <div className="mt-14 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Fingerprint className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Tương thích mọi máy</p>
              <p className="text-[11px] text-slate-400">Ronald Jack, Gigata T9, ZK</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Tự động nhận diện</p>
              <p className="text-[11px] text-slate-400">Ca đêm, xoay ca, tăng ca OT</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Offline an toàn 100%</p>
              <p className="text-[11px] text-slate-400">Không lo rò rỉ dữ liệu máy chủ</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Bản quyền phần cứng</p>
              <p className="text-[11px] text-slate-400">Khóa Machine ID duy nhất</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
