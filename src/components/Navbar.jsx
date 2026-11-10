import React from 'react';
import { Fingerprint, Shield, Download, Search, Sparkles, UserCheck } from 'lucide-react';

export default function Navbar({ onOpenLookup, onOpenOrder, onOpenAdmin, isAdminLoggedIn, onLogoutAdmin }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <img src="/app_icon.png" alt="KTS Logo" className="w-full h-full object-contain rounded-lg p-0.5 bg-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-white tracking-tight">KTS TimeAttendance</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">v2.0</span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Phần mềm Chấm Công & Quản Lý Nhân Sự IP</p>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-blue-400 transition-colors">Tính năng</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Bảng giá</a>
          <a href="#download" className="hover:text-blue-400 transition-colors">Tải phần mềm</a>
          <button
            onClick={onOpenLookup}
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
          >
            <Search className="w-4 h-4 text-emerald-400" /> Tra cứu bản quyền
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLookup}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            title="Tra cứu bản quyền"
          >
            <Search className="w-5 h-5 text-emerald-400" />
          </button>

          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5" /> Mua Bản Quyền
          </a>

          {isAdminLoggedIn ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAdmin}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30"
              >
                Trang Quản Trị
              </button>
              <button
                onClick={onLogoutAdmin}
                className="text-xs text-slate-400 hover:text-rose-400 px-1 py-1"
                title="Đăng xuất"
              >
                Thoát
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
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
