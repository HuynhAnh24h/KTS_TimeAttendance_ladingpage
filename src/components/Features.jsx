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
  CheckCircle2,
  Zap,
  Server,
  FileSpreadsheet
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Kiến Trúc Đột Phá 2026</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tính Năng Toàn Diện Trong Thiết Kế Tinh Gọn
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Giải phóng hoàn toàn thời gian của bộ phận nhân sự và kế toán tiền lương bằng hệ thống thông minh, tin cậy và chuẩn xác tuyệt đối.
          </p>
        </div>

        {/* Modern SaaS Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BENTO CARD 1 (Span 2 cols): ZKTeco Cloud Push ADMS */}
          <div className="md:col-span-2 rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl shadow-slate-900/10 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider">
                  Độc Quyền Gói Pro Multi-Branch
                </span>
                <Globe className="w-5 h-5 text-blue-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">
                Chấm Công Đa Chi Nhánh Cloud ADMS (Zero-NAT)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mb-6">
                Quản lý tập trung hàng chục chi nhánh toàn quốc (Hà Nội, TP.HCM, Đà Nẵng, Bình Dương...). Máy chấm công tự động đẩy dữ liệu thời gian thực (Push Stream) xuyên qua mọi modem/tường lửa mà không cần mở port modem và không cần thuê IP tĩnh tốn kém.
              </p>
            </div>

            {/* Visual Micro Telemetry Widget */}
            <div className="relative z-10 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase">Hà Nội</div>
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  180 NV
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase">TP. Hồ Chí Minh</div>
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  350 NV
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase">Đà Nẵng</div>
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  95 NV
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase">Bình Dương</div>
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  620 NV
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: Radar LAN 0.7s */}
          <div className="rounded-3xl p-7 bg-slate-50/80 border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-mono">
                  64 WORKERS
                </span>
                <Wifi className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                Radar Quét LAN 0.7s
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Tự động nhận diện thiết bị Ronald Jack, Gigata T9, ZKTeco trên cổng UDP 4370 trong toàn bộ dải mạng mà không cần gõ IP thủ công.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-[11px] font-mono flex items-center justify-between">
              <span className="text-slate-600">Dải: 192.168.1.1/24</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                0.7s Tự Động
              </span>
            </div>
          </div>

          {/* BENTO CARD 3: Auto-Shift & Ca Đêm */}
          <div className="rounded-3xl p-7 bg-slate-50/80 border border-slate-200/90 shadow-sm hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-purple-100 text-purple-800">
                  AUTO-SHIFT 24/7
                </span>
                <Clock className="w-5 h-5 text-purple-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                Thuật Toán Auto-Shift & Ca Đêm Qua Ngày
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Tự động bắt ca hành chính, ca kíp xoay vòng 24/7. Hỗ trợ ca làm đêm từ 22:00 đến 06:00 sáng hôm sau với chế độ cộng 30% phụ cấp ca đêm.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-[11px] flex items-center justify-between">
              <span className="font-semibold text-slate-800">Ca Đêm (22h - 06h)</span>
              <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-bold text-[10px]">
                +30% Phụ Cấp
              </span>
            </div>
          </div>

          {/* BENTO CARD 4 (Span 2 cols): Tự Động Tính Lương Kế Toán */}
          <div className="md:col-span-2 rounded-3xl p-7 sm:p-8 bg-slate-50/80 border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                  PAYROLL ENGINE 2026
                </span>
                <Calculator className="w-5 h-5 text-emerald-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                Bộ Máy Tính Lương Tự Động Chuẩn Kế Toán
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mb-6">
                Tự động tổng hợp ngày công, tăng ca ngày thường (1.5x), chủ nhật (2.0x), lễ tết (3.0x), trích trừ bảo hiểm 10.5% (BHXH 8%, BHYT 1.5%, BHTN 1%) và tạm ứng. Kết xuất phiếu lương và bảng thanh toán tiền lương chuẩn phòng Kế toán.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-3 border-t border-slate-200">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Tăng Ca (OT)</span>
                <span className="font-bold text-slate-900 text-xs">1.5x • 2.0x • 3.0x</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Khấu Trừ BHXH</span>
                <span className="font-bold text-slate-900 text-xs">10.5% Tự Động</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Xuất Báo Cáo</span>
                <span className="font-bold text-emerald-600 text-xs flex items-center gap-1">
                  <FileSpreadsheet className="w-3.5 h-3.5" /> 1-Click Excel .xlsx
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Guide Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all hover:border-slate-300">
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
