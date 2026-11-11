import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      num: '01',
      title: 'Tự động quét & kết nối máy IP trong mạng LAN',
      desc: 'Tự động dò tìm Ronald Jack, Gigata T9, ZKTeco trên cổng tiêu chuẩn 4370 trong mạng nội bộ chỉ mất 0.7 giây, không cần cấu hình IP thủ công.'
    },
    {
      num: '02',
      title: 'Thuật toán Auto-Shift tự động tìm ca thông minh',
      desc: 'Tự động đối chiếu giờ quẹt thẻ với các ca hành chính, ca kíp xoay vòng 24/7, tính toán chính xác đi muộn, về sớm và hỗ trợ chấm bù 1-click.'
    },
    {
      num: '03',
      title: 'Xuất Excel ma trận 31 ngày chuẩn Luật Lao Động',
      desc: 'Tổng hợp bảng công tháng chi tiết: công chuẩn, đi muộn, về sớm, nghỉ phép, tăng ca ngày thường (1.5x), chủ nhật (2.0x) và lễ tết (3.0x).'
    },
    {
      num: '04',
      title: 'Quản lý hồ sơ nhân sự & Nhập liệu từ Excel',
      desc: 'Quản lý danh sách nhân sự, phân phòng ban, chức vụ, phân quyền tài khoản (Admin, Nhân sự, Kế toán) và hỗ trợ xóa hàng loạt an toàn.'
    },
    {
      num: '05',
      title: 'Đóng gói chuẩn Native App - Không bật terminal',
      desc: 'Chạy độc lập mượt mà trên Windows 10/11, không hiện cửa sổ CMD đen phiền toái, mở phần mềm ngay trong 0.5 giây và chiếm cực ít RAM.'
    },
    {
      num: '06',
      title: 'Dữ liệu cục bộ an toàn & Sao lưu dự phòng 1-Click',
      desc: 'Cơ sở dữ liệu SQLite/SQL lưu trực tiếp trên máy chủ của bạn, không gửi dữ liệu ra ngoài internet, đảm bảo bảo mật nội bộ tuyệt đối 100%.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Tính Năng Cốt Lõi</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thiết Kế Tối Ưu Cho Mọi Quy Trình Chấm Công
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Loại bỏ hoàn toàn các thao tác thủ công, giải phóng thời gian cho bộ phận nhân sự và kế toán tiền lương.
          </p>
        </div>

        {/* Clean, Elegant Grid with Numbers instead of noisy rainbow icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-slate-50/60 border border-slate-200/70 hover:bg-white hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-blue-600 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {f.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Minimalist Guide Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all hover:border-slate-300">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Cần tài liệu hướng dẫn cấu hình máy chấm công & ca kíp?</h4>
            <p className="text-xs text-slate-500 mt-1">Xem cẩm nang hướng dẫn kết nối máy, cấu hình ca và xuất Excel chi tiết từng bước.</p>
          </div>
          <Link
            to="/huong-dan"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-blue-600 font-semibold text-xs shadow-xs hover:shadow transition-all shrink-0"
          >
            Xem Hướng Dẫn Sử Dụng <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
