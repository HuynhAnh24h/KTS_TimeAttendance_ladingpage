import React from 'react';
import { Wifi, Cpu, FileSpreadsheet, ArrowRight, Zap, Globe, ShieldCheck, Check } from 'lucide-react';

export default function WorkflowVisual() {
  const steps = [
    {
      step: '01',
      badge: 'Thu Thập Đa Kênh',
      title: 'Quét Mạng LAN & Cloud Push ADMS',
      icon: Wifi,
      accent: 'blue',
      desc: 'Dữ liệu quẹt vân tay, khuôn mặt Face ID và quẹt thẻ được nạp về hệ thống tức thì trong 0.5s.',
      points: [
        'Radar quét mạng nội bộ LAN trong 0.7 giây',
        'ZKTeco Native ADMS: Đẩy dữ liệu qua Internet không cần IP tĩnh',
        'KTS Edge Sync Agent hỗ trợ máy đời cũ',
        'Lọc quẹt trùng (Anti-passback 5 phút)'
      ]
    },
    {
      step: '02',
      badge: 'Bộ Xử Lý Thông Minh',
      title: 'Thuật Toán Auto-Shift & Ca Đêm',
      icon: Cpu,
      accent: 'indigo',
      desc: 'Tự động đối chiếu lượt quẹt với biểu đồ ca kíp, tính toán ngày công và giờ làm ngoài giờ.',
      points: [
        'Tự động tìm ca phù hợp không cần xếp lịch tay',
        'Hỗ trợ ca làm đêm qua ngày (22:00 - 06:00)',
        'Tự động cộng phụ cấp ca đêm +30%',
        'Hệ số OT: Ngày thường 1.5x, Chủ nhật 2.0x, Lễ 3.0x'
      ]
    },
    {
      step: '03',
      badge: 'Đầu Ra Chuẩn Kế Toán',
      title: 'Ma Trận 31 Ngày & Bảng Lương',
      icon: FileSpreadsheet,
      accent: 'emerald',
      desc: 'Tự động tính lương thực nhận (Net), khấu trừ bảo hiểm 10.5% và xuất file Excel 1-Click.',
      points: [
        'Bảng công ma trận 31 ngày trực quan từng nhân sự',
        'Bảng lương tự động khấu trừ BHXH 10.5% & tạm ứng',
        'Xuất file Excel .xlsx chuẩn in ấn, có sẵn công thức',
        'Lọc xem riêng từng chi nhánh hoặc toàn bộ chuỗi'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Quy Trình Tự Động Hóa 100%</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Từ Lượt Quẹt Thẻ Đến Bảng Lương Kế Toán
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Toàn bộ chu trình được tự động hóa liền mạch, không còn việc nhân sự phải dò sổ chấm công hay kế toán phải cộng trừ tay trên Excel.
          </p>
        </div>

        {/* 3 Step Interactive Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl p-6 sm:p-7 bg-slate-50/80 border border-slate-200/90 shadow-xs hover:bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      Bước {st.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {st.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm mb-4 group-hover:scale-105 group-hover:border-blue-300 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {st.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    {st.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Hoàn tất trong 0.5s</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
