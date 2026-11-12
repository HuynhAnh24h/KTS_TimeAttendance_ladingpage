import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  Sparkles,
  PhoneCall,
  Menu,
  X,
  ChevronDown,
  Cpu,
  Tag,
  Download,
  BookOpen,
  Search,
  Wrench,
  HelpCircle,
  ExternalLink,
  Laptop
} from 'lucide-react';

export default function Navbar({ onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'software' | 'support' | null
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    // Close dropdowns on route change
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isSoftwareActive = ['/tinh-nang', '/tai-ve'].some(p => location.pathname.startsWith(p));
  const isSupportActive = ['/huong-dan', '/tra-cuu'].some(p => location.pathname.startsWith(p));
  const isProductsActive = location.pathname.startsWith('/thiet-bi');
  const isPricingActive = location.pathname.startsWith('/bang-gia');

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
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

        {/* Synthesized Desktop Navigation: Only 4 Core Items */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700">
          {/* 1. Trang Chủ */}
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg transition-all ${
              location.pathname === '/'
                ? 'text-blue-700 bg-blue-50/80 font-bold'
                : 'hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Trang Chủ
          </Link>

          {/* 2. Dropdown: Phần Mềm */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('software')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'software' ? null : 'software')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                isSoftwareActive || activeDropdown === 'software'
                  ? 'text-blue-700 bg-blue-50/80 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>Phần Mềm</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'software' ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Card */}
            {activeDropdown === 'software' && (
              <div className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2 animate-fadeIn space-y-1 z-50">
                <Link
                  to="/tinh-nang"
                  className="p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Tính Năng & Giải Pháp</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Radar LAN 0.7s, Cloud ADMS, Bảng lương</p>
                  </div>
                </Link>

                <Link
                  to="/tai-ve"
                  className="p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 group-hover:scale-105 transition-transform">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Tải Bản Cài Đặt (v2.0.2)</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Bản Setup (.exe) & Bản Portable (.zip)</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 3. Direct Link: Máy & Thi Công (Có Badge) */}
          <Link
            to="/thiet-bi"
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              isProductsActive
                ? 'text-blue-700 bg-blue-50/80 font-bold'
                : 'hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <span>Máy & Thi Công</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase bg-emerald-600 text-white shadow-2xs">
              Tận nơi
            </span>
          </Link>

          {/* 4. Direct Link: Bảng Giá */}
          <Link
            to="/bang-gia"
            className={`px-3 py-1.5 rounded-lg transition-all ${
              isPricingActive
                ? 'text-blue-700 bg-blue-50/80 font-bold'
                : 'hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Bảng Giá
          </Link>

          {/* 5. Dropdown: Hỗ Trợ & Tra Cứu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('support')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                isSupportActive || activeDropdown === 'support'
                  ? 'text-blue-700 bg-blue-50/80 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span>Hỗ Trợ</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'support' ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Card */}
            {activeDropdown === 'support' && (
              <div className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2 animate-fadeIn space-y-1 z-50">
                <Link
                  to="/huong-dan"
                  className="p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Hướng Dẫn Sử Dụng</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Cẩm nang 12 chuyên đề chi tiết từ A-Z</p>
                  </div>
                </Link>

                <Link
                  to="/tra-cuu"
                  className="p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 group-hover:scale-105 transition-transform">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Tra Cứu Bản Quyền</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Kiểm tra mã License Key & hạn dùng</p>
                  </div>
                </Link>

                <a
                  href="https://zalo.me/0776980269"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 group border-t border-slate-100"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Hỗ Trợ Kỹ Thuật UltraView</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Zalo kỹ sư KTS: 0776.980.269 (24/7)</p>
                  </div>
                </a>
              </div>
            )}
          </div>
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

          {/* Primary CTA */}
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

      {/* Mobile Drawer Menu (Synthesized & Clean) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-3 animate-fadeIn shadow-xl">
          <nav className="space-y-1 text-xs font-semibold">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 font-bold"
            >
              Trang Chủ
            </Link>

            {/* Group: Phần mềm */}
            <div className="pt-2 pb-1 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider px-2.5">
              Phần Mềm Chấm Công
            </div>
            <Link
              to="/tinh-nang"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 pl-4"
            >
              • Tính Năng & Giải Pháp Đa Chi Nhánh
            </Link>
            <Link
              to="/tai-ve"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 pl-4"
            >
              • Tải Bản Cài Đặt (.exe / .zip)
            </Link>

            {/* Direct links */}
            <div className="pt-2 pb-1 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider px-2.5">
              Thiết Bị & Bảng Giá
            </div>
            <Link
              to="/thiet-bi"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 font-bold pl-4"
            >
              <span>Máy Chấm Công & Thi Công</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-emerald-600 text-white">
                Tận nơi
              </span>
            </Link>
            <Link
              to="/bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 font-bold pl-4"
            >
              Bảng Giá Bản Quyền
            </Link>

            {/* Group: Hỗ trợ */}
            <div className="pt-2 pb-1 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider px-2.5">
              Hỗ Trợ & Cẩm Nang
            </div>
            <Link
              to="/huong-dan"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 pl-4"
            >
              • Cẩm Nang Hướng Dẫn Sử Dụng
            </Link>
            <Link
              to="/tra-cuu"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 pl-4"
            >
              • Tra Cứu License Key Online
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
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
