import React from 'react';
import { Fingerprint, Shield, Download, Search, Sparkles, UserCheck, BookOpen } from 'lucide-react';

export default function Navbar({ onOpenLookup, onOpenOrder, onOpenAdmin, onOpenGuide, isAdminLoggedIn, onLogoutAdmin }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <img src="/app_icon.png" alt="KTS Logo" className="w-full h-full object-contain rounded-lg p-0.5 bg-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">KTS TimeAttendance</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200">v2.0</span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">Phần mềm Chấm Công & Quản Lý Nhân Sự IP</p>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Tính năng</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Bảng giá</a>
          <a href="#download" className="hover:text-blue-600 transition-colors">Tải phần mềm</a>
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors text-slate-600 font-semibold cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-blue-600" /> Hướng dẫn sử dụng
          </button>
          <button
            onClick={onOpenLookup}
            className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors text-slate-600 font-semibold cursor-pointer"
          >
            <Search className="w-4 h-4 text-emerald-600" /> Tra cứu bản quyền
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenGuide}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100"
            title="Hướng dẫn sử dụng"
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
          </button>

          <button
            onClick={onOpenLookup}
            className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 rounded-lg hover:bg-slate-100"
            title="Tra cứu bản quyền"
          >
            <Search className="w-5 h-5 text-emerald-600" />
          </button>

          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5" /> Mua Bản Quyền
          </a>

          {isAdminLoggedIn ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAdmin}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 cursor-pointer"
              >
                Trang Quản Trị
              </button>
              <button
                onClick={onLogoutAdmin}
                className="text-xs text-slate-500 hover:text-rose-600 px-1 py-1 font-medium cursor-pointer"
                title="Đăng xuất"
              >
                Thoát
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title="Đăng nhập Admin"
            >
              <Shield className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
