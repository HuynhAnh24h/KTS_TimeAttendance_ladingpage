import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/60 py-14 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img src="/app_icon.png" alt="KTS Logo" className="w-9 h-9 rounded-xl shadow-xs object-contain" />
              <div>
                <span className="font-extrabold text-slate-900 text-sm tracking-tight block">KTS TimeAttendance</span>
                <span className="text-[10px] text-slate-400 font-medium">Bản Quyền Chính Hãng & Thiết Bị Chấm Công v2.0.2</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-xs">
              Chuyên cung cấp phần mềm chấm công & tính lương tự động, phân phối máy chấm công Ronald Jack, Gigata, ZKTeco Face ID chính hãng và dịch vụ thi công kéo dây mạng, lắp đặt tận nơi toàn quốc.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Điều Hướng</h4>
            <ul className="space-y-2">
              <li><a href="/#features" className="hover:text-blue-600 transition-colors">Tính năng phần mềm</a></li>
              <li><a href="/#products" className="hover:text-blue-600 transition-colors font-semibold text-blue-600">Máy & Thi công tận nơi</a></li>
              <li><a href="/#pricing" className="hover:text-blue-600 transition-colors">Bảng giá bản quyền</a></li>
              <li><a href="/#download" className="hover:text-blue-600 transition-colors">Tải phần mềm</a></li>
              <li>
                <Link to="/huong-dan" className="hover:text-blue-600 transition-colors">
                  Hướng dẫn sử dụng
                </Link>
              </li>
              <li>
                <Link to="/tra-cuu" className="hover:text-blue-600 transition-colors">
                  Tra cứu bản quyền
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-blue-600 transition-colors">
                  Cổng Quản Trị (Admin)
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Hỗ Trợ Kỹ Thuật</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://zalo.me/0776980269"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Zalo / Hotline: 0776.980.269
                </a>
              </li>
              <li className="text-slate-500">
                Email: support@ktstime.vn
              </li>
              <li className="text-[11px] text-slate-400">
                Hỗ trợ UltraView & AnyDesk cài đặt từ xa miễn phí
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} KTS TimeAttendance Enterprise. Bản quyền đã được bảo hộ.</p>
          <p>
            Phần mềm chấm công thông minh cho doanh nghiệp Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
