import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenOrder }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/70 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/app_icon.png"
            alt="KTS Logo"
            className="w-10 h-10 rounded-xl object-contain shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform duration-200"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base text-slate-900 tracking-tight">KTS TimeAttendance</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">v2.0.2</span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">Đa Chi Nhánh Cloud ADMS & Tính Lương</p>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="/#features" className="hover:text-blue-600 transition-colors">Tính Năng</a>
          <a href="/#workflow" className="hover:text-blue-600 transition-colors">Quy Trình</a>
          <a href="/#products" className="hover:text-blue-600 transition-colors text-blue-700 font-bold">Máy & Thi Công</a>
          <a href="/#comparison" className="hover:text-blue-600 transition-colors">So Sánh</a>
          <a href="/#roi" className="hover:text-blue-600 transition-colors">Ước Tính Tiết Kiệm</a>
          <a href="/#pricing" className="hover:text-blue-600 transition-colors">Bảng Giá</a>
          <a href="/#download" className="hover:text-blue-600 transition-colors">Tải Về</a>
          <Link to="/huong-dan" className="hover:text-blue-600 transition-colors">Hướng Dẫn</Link>
          <Link to="/tra-cuu" className="hover:text-blue-600 transition-colors">Tra Cứu Key</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/tra-cuu"
            className="lg:hidden text-xs font-bold text-slate-600 hover:text-blue-600 px-2 py-1 rounded-lg hover:bg-slate-100"
          >
            Tra Cứu
          </Link>
          <Link
            to="/huong-dan"
            className="lg:hidden text-xs font-bold text-slate-600 hover:text-blue-600 px-2 py-1 rounded-lg hover:bg-slate-100"
          >
            Hướng Dẫn
          </Link>

          <button
            onClick={onOpenOrder}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Đăng Ký Bản Quyền</span>
          </button>

          <Link
            to="/admin"
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            title="Quản trị viên License Portal"
          >
            <Shield className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
