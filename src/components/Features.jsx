import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      num: '01',
      title: 'Chấm công Đa Chi Nhánh Cloud ADMS (Zero NAT)',
      badge: 'Gói Pro Độc Quyền',
      desc: 'Quản lý chuỗi chi nhánh toàn quốc tập trung thời gian thực. Máy ZKTeco tự động đẩy dữ liệu (Cloud Push) xuyên tường lửa, không cần mở port modem và không cần thuê IP tĩnh.'
    },
    {
      num: '02',
      title: 'Tự động quét & nhận diện máy IP trong mạng LAN',
      desc: 'Dò tìm máy Ronald Jack, Gigata T9, ZKTeco trên cổng tiêu chuẩn 4370 trong mạng nội bộ chỉ mất 0.7 giây với 64 workers, không cần cấu hình IP thủ công phức tạp.'
    },
    {
      num: '03',
      title: 'Thuật toán Auto-Shift & Ca đêm qua ngày (+30%)',
      desc: 'Tự động phân tích giờ quẹt để đối chiếu đúng ca hành chính, ca kíp xoay vòng 24/7. Hỗ trợ ca làm đêm qua ngày với chế độ cộng 30% phụ cấp ca đêm theo Luật Lao Động.'
    },
    {
      num: '04',
      title: 'Tính lương tự động & Xuất Excel chuẩn Kế toán',
      badge: 'Chuẩn 2026',
      desc: 'Tự động tính ngày công, tăng ca ngày thường (1.5x), chủ nhật (2.0x), lễ tết (3.0x), khấu trừ bảo hiểm 10.5% và tạm ứng. Xuất bảng lương & bảng công ma trận 31 ngày chuẩn Excel.'
    },
    {
      num: '05',
      title: 'Tự động báo cáo & Cập nhật 1-Click Local',
      desc: 'Khi có bản phát hành mới, hệ thống tự động thông báo và quản trị viên có thể bấm nâng cấp trực tiếp ngay trên máy trạm (1-Click Local Update) mà không cần cài đặt lại.'
    },
    {
      num: '06',
      title: 'Khóa bản quyền Machine ID & Tự xóa sau 30 ngày',
      desc: 'Mã hóa chữ ký số RSA ràng buộc chặt chẽ với từng công ty và phần cứng máy tính. Hoạt động offline 100%. Hết hạn tự động khóa tính năng và đếm ngược 30 ngày xóa CSDL bảo vệ tuyệt đối.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Tính Năng Đột Phá</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thiết Kế Tối Ưu Cho Mọi Quy Trình Chấm Công & Tiền Lương
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Từ văn phòng 1 địa điểm đến tập đoàn chuỗi đa chi nhánh. Tự động hóa hoàn toàn từ lượt quẹt thẻ đến bảng thanh toán tiền lương.
          </p>
        </div>

        {/* Clean, Elegant Grid with Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-slate-50/60 border border-slate-200/70 hover:bg-white hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-blue-600 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {f.num}
                  </span>
                  {f.badge ? (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
                      {f.badge}
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Guide Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all hover:border-slate-300">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Cần cẩm nang hướng dẫn cài đặt Đa Chi Nhánh ADMS & Tính Lương?</h4>
            <p className="text-xs text-slate-500 mt-1">Xem tài liệu hướng dẫn kết nối máy, cấu hình ca kíp, bảng lương và xuất Excel chi tiết từng bước.</p>
          </div>
          <Link
            to="/huong-dan"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-blue-600 font-semibold text-xs shadow-xs hover:shadow transition-all shrink-0 cursor-pointer"
          >
            Xem Hướng Dẫn Sử Dụng <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
