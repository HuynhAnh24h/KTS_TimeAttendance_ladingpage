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
  Database
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Network,
      color: 'from-blue-500 to-cyan-400',
      title: 'Tích hợp tất cả các dòng máy chấm công IP',
      desc: 'Hỗ trợ Ronald Jack, Gigata (T9, T8, FA-113), ZKTeco, Hikvision qua cổng tiêu chuẩn 4370 UDP/TCP và mật mã kết nối CommKey.'
    },
    {
      icon: Clock,
      color: 'from-indigo-500 to-purple-400',
      title: 'Thuật toán Auto-Shift tự động tìm ca',
      desc: 'Hệ thống tự đối chiếu giờ quẹt thẻ thực tế với hàng loạt ca hành chính, ca kíp 2-3 ca liên tục, hỗ trợ chấm bù 1-Click khi nhân viên quên quẹt.'
    },
    {
      icon: FileSpreadsheet,
      color: 'from-emerald-500 to-teal-400',
      title: 'Xuất Excel ma trận 31 ngày chuẩn mực',
      desc: 'Báo cáo điểm danh hàng ngày, bảng tổng hợp công tháng hiển thị chi tiết: Công chuẩn, Đi muộn, Về sớm, Tăng ca OT (1.5x, 2.0x, 3.0x), Nghỉ phép (P, Ro, L).'
    },
    {
      icon: UsersRound,
      color: 'from-rose-500 to-pink-400',
      title: 'Quản lý hồ sơ nhân sự & Nhập Excel',
      desc: 'Lưu trữ thông tin nhân sự, phòng ban, phân quyền tài khoản (Admin, Nhân sự, Kế toán). Cho phép xóa nhân sự đơn lẻ hoặc hàng loạt an toàn.'
    },
    {
      icon: Layers,
      color: 'from-amber-500 to-orange-400',
      title: 'Chạy 1 App Native - Hoàn toàn không bật CMD',
      desc: 'Được đóng gói chuẩn thương mại, mở trực tiếp bằng cửa sổ phần mềm độc lập, không hiện terminal CMD phiền toái, đóng mở nhẹ nhàng chỉ 0.5s.'
    },
    {
      icon: Database,
      color: 'from-purple-500 to-indigo-400',
      title: 'Bảo mật CSDL & Sao lưu 1-Click',
      desc: 'Lưu trữ cục bộ bảo mật trên máy chủ doanh nghiệp. Hỗ trợ sao lưu file cơ sở dữ liệu định kỳ, an tâm không sợ mất lịch sử quẹt thẻ.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Tính Năng Vượt Trội</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Giải Pháp Chấm Công Toàn Diện Cho Nhà Máy & Văn Phòng
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Được xây dựng từ thực tiễn sản xuất với hơn 1.000+ nhân sự, đảm bảo tính chuẩn xác, tốc độ và độ ổn định cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${f.color} p-0.5 mb-5`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
