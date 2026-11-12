import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Globe,
  Wifi,
  Clock,
  Calculator,
  RefreshCw,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      num: '01',
      title: 'Chấm Công Đa Chi Nhánh Cloud ADMS',
      badge: 'Gói Pro Độc Quyền',
      icon: Globe,
      desc: 'Quản lý chuỗi chi nhánh toàn quốc tập trung thời gian thực. Máy ZKTeco tự động đẩy dữ liệu (Cloud Push) xuyên tường lửa, không cần mở port modem và không cần thuê IP tĩnh đắt đỏ.',
      previewWidget: (
        <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-200/80 text-[11px] font-mono text-indigo-900 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ADMS Push: Real-time</span>
          </span>
          <span className="text-[10px] font-bold bg-indigo-200/80 px-2 py-0.5 rounded text-indigo-900">Zero NAT</span>
        </div>
      )
    },
    {
      num: '02',
      title: 'Radar Quét & Nhận Diện Máy LAN 0.7s',
      badge: 'Siêu Tốc 64 Luồng',
      icon: Wifi,
      desc: 'Dò tìm máy Ronald Jack, Gigata T9, ZKTeco trên cổng tiêu chuẩn 4370 trong mạng nội bộ chỉ mất 0.7 giây với 64 workers, không cần khai báo hay cấu hình IP thủ công.',
      previewWidget: (
        <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-[11px] font-mono text-blue-900 flex items-center justify-between">
          <span>Dải 192.168.1.1/24</span>
          <span className="text-[10px] font-bold bg-blue-200/80 px-2 py-0.5 rounded text-blue-900">0.7 Giây</span>
        </div>
      )
    },
    {
      num: '03',
      title: 'Thuật Toán Auto-Shift & Ca Đêm Qua Ngày',
      badge: 'Thông Minh 24/7',
      icon: Clock,
      desc: 'Tự động phân tích giờ quẹt thẻ để xếp đúng ca hành chính, ca kíp xoay vòng 24/7. Hỗ trợ ca làm đêm qua ngày xuyên đêm với chế độ cộng 30% phụ cấp ca đêm theo Luật Lao Động.',
      previewWidget: (
        <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200/80 text-[11px] text-purple-900 flex items-center justify-between">
          <span>Ca Đêm 22:00 - 06:00</span>
          <span className="text-[10px] font-bold bg-purple-200/80 px-2 py-0.5 rounded text-purple-900">+30% Phụ Cấp</span>
        </div>
      )
    },
    {
      num: '04',
      title: 'Tính Lương Tự Động & Xuất Excel Chuẩn',
      badge: 'Chuẩn Kế Toán 2026',
      icon: Calculator,
      desc: 'Tự động tính ngày công thực tế, tăng ca ngày thường (1.5x), chủ nhật (2.0x), lễ tết (3.0x), khấu trừ bảo hiểm 10.5% và tạm ứng. Xuất bảng lương & bảng công ma trận 31 ngày chuẩn Excel.',
      previewWidget: (
        <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-[11px] text-emerald-900 flex items-center justify-between">
          <span>Hệ số OT: 1.5x • 2.0x • 3.0x</span>
          <span className="text-[10px] font-bold bg-emerald-200/80 px-2 py-0.5 rounded text-emerald-900">Trừ BHXH 10.5%</span>
        </div>
      )
    },
    {
      num: '05',
      title: 'Tự Động Báo Cáo & Cập Nhật 1-Click Local',
      badge: 'Tiện Lợi',
      icon: RefreshCw,
      desc: 'Khi có bản phát hành mới, hệ thống tự động thông báo và quản trị viên có thể bấm nâng cấp trực tiếp ngay trên máy trạm (1-Click Local Update) mà không cần cài đặt lại hay mất dữ liệu.',
      previewWidget: (
        <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 flex items-center justify-between">
          <span>Bản v2.0.2 Đã Sẵn Sàng</span>
          <span className="text-[10px] font-bold bg-amber-200/80 px-2 py-0.5 rounded text-amber-900">1-Click Upgrade</span>
        </div>
      )
    },
    {
      num: '06',
      title: 'Khóa Bản Quyền RSA & Tự Xóa Sau 30 Ngày',
      badge: 'Bảo Mật Cấp Cao',
      icon: ShieldCheck,
      desc: 'Mã hóa chữ ký số RSA ràng buộc chặt chẽ với từng công ty và phần cứng máy tính. Hoạt động offline 100%. Hết hạn tự động khóa tính năng và đếm ngược 30 ngày xóa CSDL bảo vệ tuyệt đối.',
      previewWidget: (
        <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 flex items-center justify-between">
          <span>Khóa Machine ID RSA</span>
          <span className="text-[10px] font-bold bg-slate-200 px-2 py-0.5 rounded text-slate-800">Offline 100%</span>
        </div>
      )
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
            Từ văn phòng 1 địa điểm đến chuỗi hàng chục chi nhánh. Tự động hóa hoàn toàn từ lượt quẹt thẻ đến bảng thanh toán tiền lương.
          </p>
        </div>

        {/* Clean, Elegant Grid with Numbers & Visual Preview Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-600 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {f.num}
                    </span>
                    {f.badge && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {f.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-blue-600 shrink-0" />
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {f.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {f.desc}
                  </p>
                </div>

                {/* Embedded Visual Preview Mini-Widget */}
                <div className="pt-2 border-t border-slate-200/60">
                  {f.previewWidget}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guide Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all hover:border-slate-300">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Cần cẩm nang hướng dẫn cài đặt Đa Chi Nhánh ADMS & Tính Lương?</h4>
            <p className="text-xs text-slate-500 mt-1">Xem tài liệu hướng dẫn kết nối máy, cấu hình ca kíp, bảng lương và xuất Excel chi tiết 12 chuyên đề.</p>
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
