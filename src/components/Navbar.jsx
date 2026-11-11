import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Navbar({ onOpenOrder }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-slate-900 p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
            <img src="/app_icon.png" alt="KTS Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-slate-900 tracking-tight">KTS TimeAttendance</span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">v2.0</span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">Chấm Công & Quản Lý Nhân Sự IP</p>
          </div>
        </Link>

        {/* Links - Clean without noisy icons */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#features" className="hover:text-blue-600 transition-colors">Tính năng</a>
          <a href="/#pricing" className="hover:text-blue-600 transition-colors">Bảng giá</a>
          <a href="/#download" className="hover:text-blue-600 transition-colors">Tải phần mềm</a>
          <Link to="/huong-dan" className="hover:text-blue-600 transition-colors">Hướng dẫn</Link>
          <Link to="/tra-cuu" className="hover:text-blue-600 transition-colors">Tra cứu Key</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/tra-cuu"
            className="lg:hidden text-xs font-medium text-slate-600 hover:text-blue-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100"
          >
            Tra cứu
          </Link>
          <Link
            to="/huong-dan"
            className="lg:hidden text-xs font-medium text-slate-600 hover:text-blue-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100"
          >
            Hướng dẫn
          </Link>

          <button
            onClick={onOpenOrder}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-all hover:shadow hover:shadow-blue-500/20 active:scale-95 cursor-pointer"
          >
            Đăng Ký Bản Quyền
          </button>

          <Link
            to="/admin"
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            title="Quản trị viên"
          >
            <Shield className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
