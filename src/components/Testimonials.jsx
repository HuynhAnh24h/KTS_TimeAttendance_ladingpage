import React from 'react';
import { Star, Building2, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Chị Nguyễn Thu Trang',
      role: 'Trưởng Phòng Nhân Sự',
      company: 'Chuỗi Thời Trang Bella Boutique (12 Chi Nhánh)',
      avatar: 'TT',
      avatarBg: 'bg-rose-500',
      rating: 5,
      content:
        'Trước đây mỗi kỳ chốt lương là ác mộng của phòng HR, mất 3 ngày tải file từ từng chi nhánh về gộp lại. Dùng gói Pro Cloud ADMS của KTS, nhân viên ở Hà Nội, Đà Nẵng hay Sài Gòn quẹt vân tay là dữ liệu nạp về trung tâm ngay lập tức. Bảng lương 350 nhân sự xong trong 15 phút!',
      highlight: 'Tiết kiệm 3 ngày chốt lương mỗi tháng'
    },
    {
      name: 'Anh Trần Đình Khoa',
      role: 'Giám Đốc Vận Hành',
      company: 'Nhà Máy Cơ Khí Chính Xác An Phát (650 Công Nhân)',
      avatar: 'ĐK',
      avatarBg: 'bg-blue-600',
      rating: 5,
      content:
        'Đặc thù nhà máy chạy 3 ca liên tục 24/7 và có ca đêm từ 22:00 đến 06:00 sáng. Các phần mềm cũ toàn bị tách đôi ngày hoặc nhầm ca. KTS bắt đúng ca đêm, tự động cộng 30% phụ cấp đêm và hệ số OT 1.5x, 2.0x chuẩn xác 100%, công nhân hoàn toàn tin tưởng.',
      highlight: 'Xử lý chuẩn xác 100% ca đêm & tăng ca OT'
    },
    {
      name: 'Anh Lê Minh Tuấn',
      role: 'Trưởng Nhóm Kỹ Thuật IT',
      company: 'Công Ty CP Dịch Vụ Hậu Cần KTS Logistics',
      avatar: 'MT',
      avatarBg: 'bg-indigo-600',
      rating: 5,
      content:
        'Ấn tượng nhất là Radar quét mạng LAN chỉ mất chưa đầy 1 giây là nhận diện được toàn bộ máy Ronald Jack và Gigata. Triển khai cực nhanh, không cần mở port modem phức tạp, máy chủ chạy offline bảo mật RSA rất an tâm.',
      highlight: 'Radar quét 0.7s & bảo mật tuyệt đối'
    }
  ];

  return (
    <section className="py-24 bg-slate-50/80 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Đánh Giá Từ Khách Hàng</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Được Tin Dùng Bởi Hơn 500+ Doanh Nghiệp
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Lắng nghe chia sẻ thực tế từ các Trưởng phòng Nhân sự, Kế toán trưởng và Giám đốc điều hành đã chuyển đổi sang KTS TimeAttendance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Highlight Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{r.highlight}</span>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{r.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                  {r.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{r.name}</h4>
                  <p className="text-[11px] text-blue-600 font-semibold">{r.role}</p>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hỗ trợ kỹ thuật 24/7 qua Zalo & UltraView
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bản quyền trọn đời không phát sinh phí duy trì
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Đảm bảo chuẩn Luật Lao Động 2026
          </span>
        </div>
      </div>
    </section>
  );
}
