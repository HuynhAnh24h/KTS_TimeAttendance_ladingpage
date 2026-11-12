import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenOrder }) {
  const [employeeCount, setEmployeeCount] = useState(80);
  const [branchCount, setBranchCount] = useState(3);

  // Dynamic calculations
  // Average manual time per employee: ~15 mins per month for attendance checking, OT calculation, dispute resolution
  const manualHoursMonth = Math.round((employeeCount * 15) / 60);
  // With KTS: ~0.25 hours (15 mins total)
  const savedHoursMonth = Math.max(1, manualHoursMonth - 0.25);

  // Static IP savings: Each branch normally requires a business static IP (~250k - 500k/month = 3.000.000đ/year)
  const staticIpSavedYear = (branchCount - 1) * 3600000;

  // HR Labor cost savings (average HR wage: 60.000đ/hour)
  const hrLaborSavedYear = Math.round(savedHoursMonth * 12 * 60000);

  // Total estimated annual savings
  const totalSavedYear = staticIpSavedYear + hrLaborSavedYear;

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Công Cụ Ước Tính Hiệu Quả</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Doanh Nghiệp Bạn Tiết Kiệm Bao Nhiêu?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Kéo thanh trượt theo quy mô thực tế của doanh nghiệp để thấy ngay lượng thời gian và ngân sách KTS TimeAttendance giúp bạn tối ưu.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Area (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Employee Count */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Quy mô nhân sự công ty:</label>
                <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-extrabold text-sm shadow-xs">
                  {employeeCount} nhân viên
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>10 người</span>
                <span>250 người</span>
                <span>500 người</span>
                <span>1.000 người</span>
              </div>
            </div>

            {/* Slider 2: Branch Count */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Số lượng chi nhánh / Cửa hàng:</label>
                <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-extrabold text-sm shadow-xs">
                  {branchCount} chi nhánh
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={branchCount}
                onChange={(e) => setBranchCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1 chi nhánh (LAN)</span>
                <span>5 chi nhánh</span>
                <span>10 chi nhánh</span>
                <span>20 chi nhánh (ADMS)</span>
              </div>
            </div>

            {/* Quick Summary Note */}
            <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-[11px] text-blue-900 leading-relaxed">
              💡 <strong>Với công nghệ ZKTeco Cloud ADMS:</strong> Doanh nghiệp {branchCount} chi nhánh không cần thuê {branchCount - 1} đường truyền IP tĩnh và không cần IT mở port modem định kỳ.
            </div>
          </div>

          {/* Results Area (Right 5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" /> Kết Quả Ước Tính Hàng Năm
              </div>

              {/* Stat 1: Time saved */}
              <div className="pb-4 border-b border-slate-800 space-y-1">
                <div className="text-slate-400 text-xs flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Thời gian làm lương tiết kiệm:
                </div>
                <div className="text-2xl font-extrabold text-emerald-400">
                  {savedHoursMonth * 12} giờ / năm
                </div>
                <div className="text-[10px] text-slate-400">
                  Từ {manualHoursMonth} giờ/tháng xuống còn 15 phút
                </div>
              </div>

              {/* Stat 2: Total budget saved */}
              <div className="pt-4 space-y-1">
                <div className="text-slate-400 text-xs flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" /> Ngân sách ước tính tiết kiệm:
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  ~{totalSavedYear.toLocaleString('vi-VN')}đ <span className="text-xs font-normal text-slate-400">/năm</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  Gồm chi phí nhân công đối soát công & tiền thuê IP tĩnh
                </div>
              </div>
            </div>

            <button
              onClick={onOpenOrder}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Đăng Ký Nhận Bản Quyền Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
