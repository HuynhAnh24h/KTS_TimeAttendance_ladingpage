import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ShieldCheck, Heart, BookOpen, Search } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <img src="/app_icon.png" alt="KTS Logo" className="w-8 h-8 rounded-lg shadow-xs" />
              <span className="font-bold text-slate-900 text-base">KTS TimeAttendance</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Hệ thống phần mềm quản lý chấm công & nhân sự cho doanh nghiệp và xưởng sản xuất.
              Tự động hóa toàn diện quy trình tính công, kết nối máy chấm công IP nội bộ chuẩn xác 100%.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li><a href="/#features" className="hover:text-blue-600 transition-colors">Tính năng vượt trội</a></li>
              <li><a href="/#pricing" className="hover:text-blue-600 transition-colors">Bảng giá bản quyền</a></li>
              <li><a href="/#download" className="hover:text-blue-600 transition-colors">Tải bộ cài đặt (.exe)</a></li>
              <li>
                <Link to="/huong-dan" className="hover:text-blue-600 font-semibold transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" /> Hướng dẫn sử dụng toàn diện
                </Link>
              </li>
              <li>
                <Link to="/tra-cuu" className="hover:text-emerald-600 font-semibold transition-colors flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-emerald-600" /> Tra cứu mã bản quyền
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-purple-600 font-semibold transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" /> Cổng Quản Trị Viên (Admin)
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Hỗ Trợ Kỹ Thuật</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <a
                  href="https://zalo.me/0776980269"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Hotline / Zalo: 0776.980.269
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Email: support@ktstime.vn</span>
              </li>
              <li className="text-[11px] text-slate-500 pt-1">
                Hỗ trợ UltraView & AnyDesk cài đặt từ xa 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} KTS TimeAttendance. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Thiết kế & phát triển cho doanh nghiệp Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
