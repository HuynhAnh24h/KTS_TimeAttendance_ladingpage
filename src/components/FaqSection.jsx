import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Phần mềm KTS TimeAttendance có bắt buộc kết nối Internet liên tục không?',
      a: 'Hoàn toàn không. Với mô hình văn phòng hoặc nhà máy 1 địa điểm, phần mềm hoạt động 100% CỤC BỘ (Offline) trong mạng LAN nội bộ, bảo mật dữ liệu tuyệt đối. Đối với Gói Pro Đa Chi Nhánh, máy chấm công tại chi nhánh chỉ cần có mạng Internet (WiFi/4G bất kỳ) là có thể tự động đẩy log về máy chủ trung tâm mà không cần mở port modem hay thuê IP tĩnh.'
    },
    {
      q: 'Hệ thống hỗ trợ những dòng máy chấm công và đầu đọc nào?',
      a: 'KTS TimeAttendance tương thích với hơn 99% các dòng máy chấm công phổ biến tại Việt Nam: Ronald Jack (RJ 2000, 8000T, X628, K14...), Gigata (T8, T9, FA-113...), ZKTeco (SpeedFace V5L, MB20, uFace, SenseFace...), Wise Eye, Granding sử dụng cổng kết nối tiêu chuẩn UDP/TCP 4370 hoặc ZKTeco ADMS Cloud Push.'
    },
    {
      q: 'Khi đổi máy vi tính mới hoặc cài lại Windows thì bản quyền có bị mất không?',
      a: 'Không bị mất. Nếu cài lại Windows trên cùng một máy vi tính, Mã máy tính (Machine ID) không đổi nên License Key cũ vẫn kích hoạt thành công trọn đời. Nếu công ty mua máy tính mới hoàn toàn, khách hàng đăng ký Gói Vĩnh Viễn hoặc Gói Pro được hỗ trợ chuyển đổi bản quyền sang máy mới tối đa 3 lần hoàn toàn miễn phí qua Zalo kỹ thuật 0776.980.269.'
    },
    {
      q: 'Phần mềm tính ca đêm qua ngày (22:00 - 06:00) như thế nào?',
      a: 'KTS tích hợp thuật toán xử lý ca đêm thông minh (Overnight Shift Engine). Khi nhân viên quẹt vào lúc 22:00 hôm nay và quẹt ra lúc 06:00 sáng hôm sau, hệ thống sẽ gom đúng vào 1 ngày công duy nhất, tự động nhận diện ca đêm và tự động cộng thêm 30% tiền lương phụ cấp ca đêm theo đúng quy định của Bộ Luật Lao Động 2026.'
    },
    {
      q: 'Doanh nghiệp có thể xuất những mẫu báo cáo Excel nào?',
      a: 'Hệ thống hỗ trợ xuất đầy đủ các mẫu báo cáo chuẩn phòng Kế toán & Nhân sự: Bảng chấm công ma trận 31 ngày (hiển thị trực quan từng ngày trong tháng), Bảng tổng hợp công tháng (công chuẩn, đi trễ, về sớm, nghỉ phép), Bảng chi tiết giờ quẹt thẻ và Bảng thanh toán tiền lương (Payroll) tích hợp sẵn công thức tính tổng, thuế TNCN và trích bảo hiểm 10.5%.'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Giải Đáp Thắc Mắc</span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp (FAQs)
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Những câu hỏi phổ biến nhất của các doanh nghiệp trước khi triển khai phần mềm KTS TimeAttendance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/20 shadow-md shadow-blue-500/5'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still need help callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Doanh nghiệp bạn có quy chế ca kíp đặc thù?</h4>
            <p className="text-xs text-slate-500 mt-1">Đội ngũ kỹ sư KTS sẵn sàng khảo sát và hỗ trợ cài đặt cấu hình từ xa qua UltraView.</p>
          </div>
          <a
            href="https://zalo.me/0776980269"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition-all shrink-0 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" /> Chat Zalo Tư Vấn Miễn Phí
          </a>
        </div>
      </div>
    </section>
  );
}
