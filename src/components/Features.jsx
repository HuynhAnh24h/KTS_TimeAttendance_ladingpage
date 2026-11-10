import React from 'react';
import {
  Network,
  Clock,
  FileSpreadsheet,
  UsersRound,
  Shield,
  Layers,
  Sparkles,
  Wifi,
  Database,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function Features({ onOpenGuide }) {
  const features = [
    {
      icon: Network,
      color: 'from-blue-600 to-cyan-500',
      title: 'Tích hợp tất cả các dòng máy chấm công IP',
      desc: 'Hỗ trợ Ronald Jack, Gigata (T9, T8, FA-113), ZKTeco, Wise Eye qua cổng tiêu chuẩn 4370 UDP/TCP và mật mã kết nối CommKey.'
    },
    {
      icon: Clock,
      color: 'from-indigo-600 to-purple-500',
      title: 'Thuật toán Auto-Shift tự động tìm ca',
      desc: 'Hệ thống tự đối chiếu giờ quẹt thẻ thực tế với hàng loạt ca hành chính, ca kíp 2-3 ca liên tục, hỗ trợ chấm bù 1-Click khi nhân viên quên quẹt.'
    },
    {
      icon: FileSpreadsheet,
      color: 'from-emerald-600 to-teal-500',
      title: 'Xuất Excel ma trận 31 ngày chuẩn mực',
      desc: 'Báo cáo điểm danh hàng ngày, bảng tổng hợp công tháng hiển thị chi tiết: Công chuẩn, Đi muộn, Về sớm, Tăng ca OT (1.5x, 2.0x, 3.0x), Nghỉ phép.'
    },
    {
      icon: UsersRound,
      color: 'from-rose-600 to-pink-500',
      title: 'Quản lý hồ sơ nhân sự & Nhập Excel',
      desc: 'Lưu trữ thông tin nhân sự, phòng ban, phân quyền tài khoản (Admin, Nhân sự, Kế toán). Cho phép xóa nhân sự đơn lẻ hoặc hàng loạt an toàn.'
    },
    {
      icon: Layers,
      color: 'from-amber-500 to-orange-500',
      title: 'Chạy 1 App Native - Hoàn toàn không bật CMD',
      desc: 'Được đóng gói chuẩn thương mại, mở trực tiếp bằng cửa sổ phần mềm độc lập, không hiện terminal CMD phiền toái, đóng mở nhẹ nhàng chỉ 0.5s.'
    },
    {
      icon: Database,
      color: 'from-purple-600 to-indigo-500',
      title: 'Bảo mật CSDL & Sao lưu 1-Click',
      desc: 'Lưu trữ cục bộ bảo mật trên máy chủ doanh nghiệp. Hỗ trợ sao lưu file cơ sở dữ liệu định kỳ, an tâm không sợ mất lịch sử quẹt thẻ.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Tính Năng Vượt Trội</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Giải Pháp Chấm Công Toàn Diện Cho Nhà Máy & Văn Phòng
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Được xây dựng từ thực tiễn sản xuất với hơn 1.000+ nhân sự, đảm bảo tính chuẩn xác, tốc độ và độ ổn định cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${f.color} p-0.5 mb-5 shadow-sm group-hover:scale-105 transition-transform`}>
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Guide */}
        {onOpenGuide && (
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Bạn cần tài liệu hướng dẫn chi tiết từng bước?</h4>
                <p className="text-xs text-slate-600">Xem cẩm nang kết nối máy chấm công, tạo ca làm việc, tính công và xuất Excel.</p>
              </div>
            </div>
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-blue-700 hover:text-blue-800 font-bold text-xs shadow-sm hover:shadow transition-all shrink-0 cursor-pointer"
            >
              Xem Hướng Dẫn Sử Dụng <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
