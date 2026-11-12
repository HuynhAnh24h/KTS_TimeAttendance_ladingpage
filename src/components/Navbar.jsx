import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  Sparkles,
  PhoneCall,
  Menu,
  X,
  Search,
  Wrench,
  Download,
  BookOpen,
  Tag,
  Cpu
} from 'lucide-react';

export default function Navbar({ onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/tinh-nang', label: 'Tính Năng' },
    {
      path: '/thiet-bi',
      label: 'Máy & Thi Công',
      badge: 'Tận nơi',
      badgeColor: 'bg-emerald-600 text-white'
    },
    { path: '/bang-gia', label: 'Bảng Giá' },
    { path: '/tai-ve', label: 'Tải Về' },
    { path: '/huong-dan', label: 'Hướng Dẫn' },
    { path: '/tra-cuu', label: 'Tra Cứu Key' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/app_icon.png"
            alt="KTS Logo"
            className="w-9 h-9 rounded-xl object-contain shadow-sm shadow-blue-600/20 group-hover:scale-105 transition-transform duration-200"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                KTS TimeAttendance
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded-md bg-blue-50 text-blue-700 border border-blue-200/80">
                v2.0.2
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block leading-none mt-0.5">
              Phần Mềm Chấm Công & Thiết Bị Chính Hãng
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  active
                    ? 'text-blue-700 bg-blue-50/80 font-bold shadow-2xs'
                    : 'hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase ${link.badgeColor}`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Group */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Hotline Quick Call (Desktop) */}
          <a
            href="https://zalo.me/0776980269"
            target="_blank"
            rel="noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            title="Tư vấn lắp đặt & báo giá"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
            <span>0776.980.269</span>
          </a>

          {/* Primary CTA: Đăng Ký Bản Quyền */}
          <button
            onClick={onOpenOrder}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mua Bản Quyền</span>
          </button>

          {/* Admin link */}
          <Link
            to="/admin"
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors hidden sm:block"
            title="Quản trị viên License Portal"
          >
            <Shield className="w-4 h-4" />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Mở menu di động"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-3 animate-fadeIn shadow-xl">
          <nav className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl border flex items-center justify-between ${
                    active
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                      : 'border-slate-100 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-emerald-600 text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://zalo.me/0776980269"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-100 text-slate-800 text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Hotline / Zalo: 0776.980.269</span>
            </a>

            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs text-slate-400 py-1"
            >
              Cổng Quản Trị Hệ Thống (Admin Portal)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
