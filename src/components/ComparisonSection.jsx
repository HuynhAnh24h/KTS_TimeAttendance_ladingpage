import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: 'Nhận diện máy trong mạng LAN',
      legacy: 'Phải gõ IP thủ công từng máy, dễ trùng lặp',
      kts: 'Radar quét 64 luồng siêu tốc 0.7s tự động nhận diện',
      ktsHighlight: true
    },
    {
      feature: 'Chấm công đa chi nhánh toàn quốc',
      legacy: 'Bắt buộc thuê IP tĩnh đắt đỏ & mở Port modem phức tạp',
      kts: 'ZKTeco Cloud Push ADMS: Tự động xuyên NAT không cần IP tĩnh',
      ktsHighlight: true
    },
    {
      feature: 'Hỗ trợ máy chấm công đời cũ',
      legacy: 'Không thể kết nối qua Internet',
      kts: 'KTS Edge Sync Agent siêu nhẹ (~8MB) đồng bộ HTTPS an toàn',
      ktsHighlight: false
    },
    {
      feature: 'Xử lý ca làm việc phức tạp',
      legacy: 'Hay nhầm ca kíp, không tính được ca đêm qua ngày',
      kts: 'Auto-Shift tự tìm ca & tính chuẩn ca đêm (+30% phụ cấp)',
      ktsHighlight: true
    },
    {
      feature: 'Tính lương & Hệ số tăng ca OT',
      legacy: 'Không có, kế toán phải xuất Excel cộng trừ thủ công',
      kts: 'Tính lương tự động: OT 1.5x/2.0x/3.0x, trừ BHXH 10.5%, phiếu lương Net',
      ktsHighlight: true
    },
    {
      feature: 'Báo cáo ma trận 31 ngày',
      legacy: 'Bảng công thô, hay lỗi font chữ Tiếng Việt',
      kts: 'Ma trận 31 ngày trực quan chuẩn in ấn, có sẵn công thức Excel',
      ktsHighlight: false
    },
    {
      feature: 'Cập nhật phần mềm mới',
      legacy: 'Phải gỡ ra cài lại từ đầu, dễ mất dữ liệu',
      kts: 'Cập nhật 1-Click trực tiếp Local không mất dữ liệu',
      ktsHighlight: false
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Bảng So Sánh Công Nghệ</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sự Khác Biệt Giữa KTS và Phần Mềm Truyền Thống
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Trải nghiệm công nghệ thế hệ mới loại bỏ toàn bộ nhược điểm của các phần mềm chấm công đời cũ.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-900/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 sm:p-5 text-slate-700 font-bold w-1/3">Tiêu Chí Đánh Giá</th>
                  <th className="p-4 sm:p-5 text-slate-500 font-semibold w-1/3 bg-slate-100/50">
                    Phần Mềm Đời Cũ (Mita, Wise Eye...)
                  </th>
                  <th className="p-4 sm:p-5 text-blue-700 font-extrabold w-1/3 bg-blue-50/70 border-l border-blue-200 relative">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>KTS TimeAttendance v2.0</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {row.feature}
                    </td>

                    {/* Legacy Column */}
                    <td className="p-4 sm:p-5 text-slate-500 bg-slate-50/30">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>

                    {/* KTS Column */}
                    <td className="p-4 sm:p-5 text-slate-900 bg-blue-50/30 border-l border-blue-100 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 font-bold shrink-0 mt-0.5" />
                        <span className={row.ktsHighlight ? 'font-bold text-blue-900' : ''}>
                          {row.kts}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
