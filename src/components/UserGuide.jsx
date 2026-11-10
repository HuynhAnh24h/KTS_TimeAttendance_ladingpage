import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  Cpu,
  Fingerprint,
  Users,
  Clock,
  FileSpreadsheet,
  KeyRound,
  Database,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Download,
  Wifi,
  Monitor,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function UserGuide({ onBackToHome, onOpenOrder, onOpenLookup }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const sections = [
    { id: 'getting-started', title: '1. Cài Đặt & Khởi Động', icon: Cpu },
    { id: 'device-connection', title: '2. Kết Nối Máy Chấm Công (IP LAN)', icon: Wifi },
    { id: 'hr-management', title: '3. Quản Lý Nhân Sự & Phòng Ban', icon: Users },
    { id: 'sync-data', title: '4. Đồng Bộ Vân Tay & Nhân Viên', icon: Fingerprint },
    { id: 'shifts-schedules', title: '5. Cấu Hình Ca & Giờ Làm Việc', icon: Clock },
    { id: 'attendance-logs', title: '6. Tải Log & Theo Dõi Chấm Công', icon: Calendar },
    { id: 'reports-excel', title: '7. Báo Cáo & Xuất File Excel', icon: FileSpreadsheet },
    { id: 'license-activation', title: '8. Kích Hoạt Bản Quyền License', icon: KeyRound },
    { id: 'backup-settings', title: '9. Sao Lưu CSDL & Cài Đặt', icon: Database },
    { id: 'troubleshooting', title: '10. Khắc Phục Sự Cố & FAQs', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 animate-fadeIn">
      {/* Top Banner Navigation */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Quay lại trang chủ"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Trang Chủ</span>
            </button>
            <div className="h-5 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  Tài Liệu Hướng Dẫn Sử Dụng
                </h1>
                <p className="text-[10px] text-slate-500 hidden sm:block">KTS TimeAttendance v2.0 Toàn Tập</p>
              </div>
            </div>
          </div>

          {/* Quick Search */}
          <div className="flex-1 max-w-xs relative hidden md:block">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm nhanh tính năng..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value.toLowerCase())}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenOrder}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mua Bản Quyền</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-1 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Mục Lục Hướng Dẫn
              </div>
              <nav className="space-y-1">
                {sections.map(sec => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span className="truncate">{sec.title}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 mt-4 border-t border-slate-100 px-3">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 text-[11px] space-y-1">
                  <p className="font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Cần hỗ trợ trực tiếp?
                  </p>
                  <p className="text-slate-600">Hotline & Zalo kỹ thuật UltraView:</p>
                  <a
                    href="https://zalo.me/0776980269"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-blue-700 hover:text-blue-800 hover:underline block text-xs"
                  >
                    0776.980.269
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* 1. GETTING STARTED */}
            <section id="getting-started" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">1. Cài Đặt & Khởi Động Phần Mềm</h2>
                  <p className="text-xs text-slate-500">Các bước khởi chạy KTS TimeAttendance trên Windows</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Yêu Cầu Hệ Thống
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                  <li>Hệ điều hành: Windows 10 hoặc Windows 11 (64-bit).</li>
                  <li>Bộ nhớ RAM: Tối thiểu 2GB (Khuyến nghị 4GB trở lên).</li>
                  <li>Dung lượng ổ cứng trống: Tối thiểu 200MB.</li>
                  <li>Mạng nội bộ (LAN): Cùng dải mạng Wi-Fi hoặc Router cắm dây mạng với máy chấm công.</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                      Cách 1: Bộ Cài Tự Động (Setup.exe)
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs">KTS_TimeAttendance_Setup.exe</h4>
                    <p className="text-slate-600 text-[11px]">
                      1. Nhấp đúp vào file tải về để mở bộ cài đặt.<br />
                      2. Chọn thư mục cài đặt (mặc định <code>C:\Program Files\KTS TimeAttendance</code>).<br />
                      3. Tích chọn "Tạo biểu tượng ngoài Desktop" và bấm <strong>Cài đặt</strong>.<br />
                      4. Mở app trực tiếp từ icon ngoài Desktop. Phần mềm khởi động êm ái, hoàn toàn <strong>không hiện cửa sổ đen (CMD)</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800">
                      Cách 2: Bản Di Động (Portable .zip)
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs">KTS_TimeAttendance_Portable.zip</h4>
                    <p className="text-slate-600 text-[11px]">
                      1. Tải file <code>.zip</code> về máy, nhấp chuột phải chọn <strong>Extract All... (Giải nén)</strong>.<br />
                      2. Lưu vào ổ đĩa bất kỳ (như <code>D:\KTS_TimeAttendance</code> hoặc USB di động).<br />
                      3. Nhấp đúp vào <code>CHAY_APP_KHONG_CMD.vbs</code> hoặc <code>KTS_TimeAttendance.exe</code> để dùng ngay mà không cần cài đặt.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                  <span>
                    <strong>Mẹo bảo mật Windows:</strong> Nếu Windows SmartScreen hiển thị cảnh báo "Windows protected your PC", hãy bấm vào <strong>More info</strong> và chọn <strong>Run anyway</strong> để tiếp tục.
                  </span>
                </div>
              </div>
            </section>

            {/* 2. DEVICE CONNECTION */}
            <section id="device-connection" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">2. Kết Nối Máy Chấm Công (IP LAN)</h2>
                  <p className="text-xs text-slate-500">Kết nối máy chấm công vân tay, khuôn mặt, thẻ từ qua mạng nội bộ</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <p className="text-slate-700">
                  Phần mềm KTS TimeAttendance v2.0 hỗ trợ 100% các dòng máy chấm công phổ biến tại Việt Nam: 
                  <strong> Ronald Jack</strong> (RJ 1000, RJ 3000, RJ 5000...), 
                  <strong> ZKTeco</strong> (K14, K40, F18, G1, G2, MB20...), 
                  <strong> Gigata</strong> (T8, T9...), <strong>Wise Eye</strong>, Granding, Mita... thông qua chuẩn giao tiếp IP Port 4370.
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                    Bước 1: Thiết lập địa chỉ IP trên máy chấm công
                  </h4>
                  <div className="pl-7 text-slate-600 space-y-1">
                    <p>• Nhấn giữ phím <strong>M/OK</strong> trên máy chấm công để vào Menu quản trị.</p>
                    <p>• Chọn mục <strong>Thiết lập liên kết (Comm.)</strong> -&gt; chọn <strong>Mạng (Ethernet / TCP/IP)</strong>.</p>
                    <p>• Đặt địa chỉ IP tĩnh cùng dải với mạng công ty. Ví dụ nếu modem là <code>192.168.1.1</code> thì đặt IP máy chấm công là <code>192.168.1.201</code>.</p>
                    <p>• Subnet Mask: <code>255.255.255.0</code>, Gateway: <code>192.168.1.1</code>.</p>
                    <p>• Cổng giao tiếp (Port): Giữ nguyên mặc định <code>4370</code>. ComKey: <code>0</code>.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">2</span>
                    Bước 2: Thêm thiết bị vào phần mềm KTS TimeAttendance
                  </h4>
                  <div className="pl-7 text-slate-600 space-y-1">
                    <p>• Trên phần mềm KTS, bấm vào menu <strong>Máy Chấm Công</strong> ở thanh bên trái.</p>
                    <p>• Bấm nút <strong>+ Thêm Máy Mới</strong>.</p>
                    <p>• Điền thông tin:
                      <ul className="list-disc list-inside pl-3 pt-1 space-y-0.5">
                        <li><strong>Tên máy:</strong> Ví dụ <em>Máy Cửa Chính</em> hoặc <em>Gigata T9 Xưởng 1</em>.</li>
                        <li><strong>Địa chỉ IP:</strong> Nhập đúng IP đã đặt (vd: <code>192.168.1.201</code>).</li>
                        <li><strong>Cổng Port:</strong> <code>4370</code> (mặc định).</li>
                        <li><strong>ComKey:</strong> <code>0</code> (hoặc theo mật mã bạn đã đặt trên máy).</li>
                      </ul>
                    </p>
                    <p>• Bấm nút <strong>Kiểm Tra Kết Nối (Ping Test)</strong>. Khi màn hình hiện thông báo xanh <em>"Kết nối thành công"</em>, bấm <strong>Lưu Thiết Bị</strong>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. HR MANAGEMENT */}
            <section id="hr-management" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">3. Quản Lý Nhân Sự & Phòng Ban</h2>
                  <p className="text-xs text-slate-500">Tổ chức hồ sơ nhân viên, mã số chấm công và xóa nhân sự nghỉ việc</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Thêm Mới Hồ Sơ Nhân Viên:</h4>
                  <p className="text-slate-600">
                    Vào mục <strong>Quản Lý Nhân Sự</strong> -&gt; Bấm nút <strong>+ Thêm Nhân Viên</strong>:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                    <li><strong>Mã Nhân Viên:</strong> Mã số nội bộ doanh nghiệp (ví dụ: <code>NV001</code>, <code>NV002</code>...).</li>
                    <li><strong>Mã Chấm Công (Enroll Number):</strong> Số thứ tự được gán trên máy chấm công (ví dụ: <code>1</code>, <code>2</code>, <code>101</code>...). Số này cực kỳ quan trọng để hệ thống khớp đúng người khi nhân viên quẹt vân tay.</li>
                    <li><strong>Họ và tên:</strong> Tên đầy đủ của nhân sự (ví dụ: Nguyễn Văn Hùng).</li>
                    <li><strong>Phòng ban & Chức vụ:</strong> Chọn bộ phận tương ứng (Phòng Kế toán, Kinh doanh, Xưởng sản xuất, Kho vận...).</li>
                    <li><strong>Ngày vào làm, SĐT, Email:</strong> Nhập thông tin liên hệ của nhân sự.</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs">Chỉnh Sửa & Xóa Nhân Sự:</h4>
                  <p className="text-slate-600">
                    • <strong>Chỉnh sửa:</strong> Bấm vào biểu tượng cây bút tại dòng nhân sự để cập nhật số điện thoại, đổi phòng ban hoặc sửa chức vụ.<br />
                    • <strong>Xóa nhân sự:</strong> Khi có nhân viên thôi việc, bấm vào nút thùng rác <strong>Xóa</strong> màu đỏ. Hệ thống sẽ hỏi xác nhận để tránh bấm nhầm và đảm bảo toàn vẹn dữ liệu.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. SYNC DATA */}
            <section id="sync-data" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Fingerprint className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">4. Đồng Bộ Vân Tay & Nhân Viên Hai Chiều</h2>
                  <p className="text-xs text-slate-500">Truyền nhận dữ liệu giữa máy vi tính và máy chấm công</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                    <h4 className="font-bold text-blue-900 text-xs flex items-center gap-1.5">
                      <Download className="w-4 h-4 text-blue-600" /> Tải từ Máy Chấm Công về Máy Tính
                    </h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Sử dụng khi bạn vừa đăng ký dấu vân tay hoặc quét khuôn mặt cho nhân viên mới ngay tại máy chấm công.<br />
                      👉 Vào <strong>Máy Chấm Công</strong> -&gt; Bấm nút <strong>Đồng Bộ</strong> -&gt; Chọn <strong>Tải nhân viên & vân tay về máy tính</strong>. Phần mềm sẽ tự động lấy danh sách và lưu vào cơ sở dữ liệu.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                    <h4 className="font-bold text-emerald-900 text-xs flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-emerald-600" /> Nạp từ Máy Tính lên Máy Chấm Công
                    </h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Sử dụng khi bạn tạo trước danh sách nhân viên trên phần mềm hoặc khi doanh nghiệp mua thêm máy chấm công mới thứ 2, thứ 3.<br />
                      👉 Bấm <strong>Tải nhân viên lên máy chấm công</strong>: Danh sách tên và ID sẽ được truyền thẳng lên máy chấm công mà không cần ra máy gõ tay từng chữ.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px] flex items-center justify-between">
                  <span>
                    ⏰ <strong>Đồng bộ giờ tự động:</strong> Bấm <strong>"Đồng bộ thời gian"</strong> để đồng hồ máy chấm công khớp 100% từng giây theo giờ đồng hồ máy tính của bạn.
                  </span>
                </div>
              </div>
            </section>

            {/* 5. SHIFTS & SCHEDULES */}
            <section id="shifts-schedules" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">5. Cấu Hình Ca & Giờ Làm Việc</h2>
                  <p className="text-xs text-slate-500">Thiết lập ca hành chính, ca xoay, ca đêm, luật đi trễ và tính tăng ca</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Các Loại Ca Làm Việc Hỗ Trợ:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                    <li><strong>Ca Hành Chính (8 giờ):</strong> Giờ vào: 08:00, Giờ ra: 17:30 (nghỉ trưa 12:00 - 13:30).</li>
                    <li><strong>Ca Theo Buổi:</strong> Ca sáng (07:30 - 11:30), Ca chiều (13:00 - 17:00), Ca tối (18:00 - 22:00).</li>
                    <li><strong>Ca 12 Tiếng Xưởng Sản Xuất:</strong> Ca ngày (06:00 - 18:00), Ca đêm (18:00 - 06:00 sáng hôm sau).</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs">Cài Đặt Quy Tắc Chấm Công:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Cho phép đi trễ</span>
                      <p className="text-slate-600 text-[11px]">Cho phép trễ 5 - 15 phút không bị trừ công hoặc tính lỗi vi phạm.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Khoảng cách 2 lần quẹt</span>
                      <p className="text-slate-600 text-[11px]">Tự động lọc bỏ các lần quẹt liên tục trong vòng 1-2 phút của cùng 1 người.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Tính giờ Tăng Ca (OT)</span>
                      <p className="text-slate-600 text-[11px]">Tự động cộng giờ làm thêm khi nhân viên quẹt thẻ về trễ sau giờ tan ca quy định.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. ATTENDANCE & LOGS */}
            <section id="attendance-logs" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">6. Tải Log & Theo Dõi Chấm Công Hằng Ngày</h2>
                  <p className="text-xs text-slate-500">Kéo dữ liệu quẹt thẻ thực tế và cập nhật chấm công thủ công</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Thao Tác Tải Dữ Liệu Chấm Công Mới Nhất:</h4>
                  <p className="text-slate-600">
                    1. Mở menu <strong>Dữ Liệu Chấm Công</strong>.<br />
                    2. Chọn máy chấm công cần lấy dữ liệu (hoặc chọn tất cả máy).<br />
                    3. Chọn khoảng ngày cần tải (ví dụ: từ ngày 01 đến ngày hiện tại).<br />
                    4. Bấm nút <strong>Tải Dữ Liệu Chấm Công</strong>: Toàn bộ hàng ngàn lượt quẹt vân tay sẽ được nạp về máy tính trong vòng <strong>2 đến 5 giây</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Xem Chi Tiết & Bổ Sung Công Thủ Công:</h4>
                  <p className="text-slate-600 text-[11px]">
                    • <strong>Xem bảng công theo ngày:</strong> Hiển thị rõ Giờ Vào đầu tiên (Check-In), Giờ Ra cuối cùng (Check-Out), tổng số giờ làm việc, trạng thái Đi đúng giờ, Đi trễ, Về sớm.<br />
                    • <strong>Bổ sung chấm công:</strong> Dành cho nhân sự đi gặp khách hàng, quên quẹt vân tay hoặc đi công tác ngoài: Bấm <strong>Thêm Chấm Công Thủ Công</strong>, chọn nhân viên và nhập giờ kèm lý do.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. REPORTS & EXCEL */}
            <section id="reports-excel" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">7. Báo Cáo Thống Kê & Xuất File Excel Chuẩn</h2>
                  <p className="text-xs text-slate-500">Tự động tổng hợp ngày công và xuất file Excel cho phòng kế toán</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <p className="text-slate-700">
                  Mục <strong>Báo Cáo Thống Kê</strong> giúp tự động hóa 100% công đoạn tính toán ngày công thủ công bằng sổ sách:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-xs">Bảng Tổng Hợp Công Tháng</h4>
                    <p className="text-slate-600 text-[11px]">
                      Thống kê theo từng nhân viên trong tháng: Tổng ngày công thực tế, tổng số phút đi trễ, tổng số phút về sớm, tổng số giờ tăng ca (OT).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-xs">Bảng Chấm Công Chi Tiết 31 Ngày</h4>
                    <p className="text-slate-600 text-[11px]">
                      Hiển thị trực quan ma trận từng ngày trong tháng của từng nhân viên (Ngày đi làm, ngày chủ nhật, ngày nghỉ phép, số giờ công cụ thể).
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] flex items-center justify-between">
                  <span>
                    📊 <strong>Xuất Excel 1-Click:</strong> Bấm <strong>"Xuất File Excel"</strong>. File tải về có định dạng chuẩn văn phòng, có sẵn màu sắc tiêu đề, công thức tính tổng rõ ràng, sẵn sàng in ấn hoặc lưu trữ.
                  </span>
                </div>
              </div>
            </section>

            {/* 8. LICENSE ACTIVATION */}
            <section id="license-activation" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">8. Kích Hoạt Bản Quyền License</h2>
                  <p className="text-xs text-slate-500">Các bước lấy Machine ID và kích hoạt bản quyền chính hãng</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Lấy Mã Máy Tính (Machine ID) trên phần mềm:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Mở phần mềm KTS TimeAttendance trên máy bạn muốn cài đặt. Nhấp vào nút <strong>Bản quyền</strong> ở góc trái dưới cùng màn hình. Bấm biểu tượng <strong>Sao chép</strong> để lấy chuỗi mã máy tính (ví dụ dạng: <code>KTS-A1B2-C3D4-E5F6</code>).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Đăng ký & Thanh toán VietQR trên Website:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Nhấp nút <strong>Mua Bản Quyền</strong> trên trang web này, chọn gói (Tháng / 1 Năm / Vĩnh Viễn), dán <em>Machine ID</em> đã chép ở Bước 1 và quét mã VietQR để thanh toán.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Tra cứu & Lấy mã License Key:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Sau khi hoàn tất chuyển khoản, bấm vào nút <strong>Tra Cứu Bản Quyền</strong> trên web, nhập số điện thoại hoặc Machine ID để nhận ngay chuỗi <strong>License Key</strong> đã được cấp.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-emerald-900 text-xs">Dán Key và kích hoạt thành công:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Quay lại phần mềm trên máy tính, dán chuỗi License Key vào ô và bấm <strong>Kích Hoạt Bản Quyền</strong>. Phần mềm sẽ mở khóa toàn bộ tính năng và không giới hạn số lượng nhân viên!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-[11px]">
                  💡 <strong>Kích hoạt Offline:</strong> Thuật toán mã hóa của KTS TimeAttendance cho phép kích hoạt hoàn toàn Offline. Ngay cả khi máy tính của bạn không có mạng Internet, bạn vẫn có thể dán mã License Key để kích hoạt bình thường!
                </div>
              </div>
            </section>

            {/* 9. BACKUP & SETTINGS */}
            <section id="backup-settings" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">9. Sao Lưu CSDL & Cài Đặt Hệ Thống</h2>
                  <p className="text-xs text-slate-500">Bảo vệ an toàn dữ liệu doanh nghiệp và quản trị tài khoản</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">Sao Lưu Cơ Sở Dữ Liệu (Backup):</h4>
                    <p className="text-slate-600 text-[11px]">
                      Vào <strong>Cài Đặt Hệ Thống</strong> -&gt; Chọn <strong>Sao Lưu Dữ Liệu</strong>. Hệ thống sẽ kết xuất toàn bộ cơ sở dữ liệu SQLite thành 1 file <code>.db</code> an toàn. Bạn có thể copy file này cất vào Google Drive, USB hoặc ổ D: để lưu trữ dự phòng.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">Phục Hồi Dữ Liệu (Restore):</h4>
                    <p className="text-slate-600 text-[11px]">
                      Khi đổi máy tính mới hoặc cài lại Windows, bạn chỉ cần bấm nút <strong>Phục Hồi Dữ Liệu</strong> và chọn file backup đã lưu trước đó. Toàn bộ nhân sự, ca làm việc và lịch sử chấm công sẽ được tái hiện nguyên vẹn 100%.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px]">
                  🔒 <strong>Đổi Mật Khẩu Quản Trị:</strong> Bạn có thể đổi mật khẩu tài khoản Admin để ngăn chặn nhân viên tự ý đăng nhập thay đổi giờ công hoặc sửa ca làm việc.
                </div>
              </div>
            </section>

            {/* 10. TROUBLESHOOTING & FAQS */}
            <section id="troubleshooting" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">10. Khắc Phục Sự Cố & Câu Hỏi Thường Gặp</h2>
                  <p className="text-xs text-slate-500">Cách xử lý nhanh các tình huống phát sinh thường gặp</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-900 block">
                      ❓ Lỗi 1: Phần mềm báo "Không thể kết nối đến máy chấm công" hoặc Ping thất bại?
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Cách xử lý:</strong><br />
                      1. Kiểm tra dây mạng LAN cắm vào máy chấm công đèn xanh có nháy sáng không.<br />
                      2. Mở cửa sổ CMD trên máy tính, gõ lệnh <code>ping 192.168.1.201</code> (thay bằng IP máy chấm công của bạn). Nếu báo <em>Request timed out</em> nghĩa là máy vi tính và máy chấm công đang khác dải mạng (ví dụ máy tính bắt wifi khác hoặc cắm modem phụ). Hãy đảm bảo cả hai cùng nối chung 1 modem.<br />
                      3. Kiểm tra Port <code>4370</code> và ComKey có đúng là <code>0</code> không.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-900 block">
                      ❓ Lỗi 2: Nhân viên chấm vân tay thành công nhưng trên phần mềm không hiện giờ quẹt?
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Cách xử lý:</strong><br />
                      1. Bạn cần vào mục <strong>Dữ Liệu Chấm Công</strong> và bấm nút <strong>Tải Dữ Liệu Chấm Công</strong> để phần mềm kéo log mới nhất từ máy về.<br />
                      2. Kiểm tra xem Mã Chấm Công (Enroll ID) của nhân viên đó trong danh mục Nhân sự đã khớp đúng với ID trên máy chấm công chưa.<br />
                      3. Kiểm tra đồng hồ trên máy chấm công có bị chạy sai năm/tháng/ngày không.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-900 block">
                      ❓ Lỗi 3: Cài lại Win hoặc đổi máy tính có bị mất bản quyền không?
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Trả lời:</strong> Nếu bạn cài lại Windows trên cùng một máy tính, Mã máy tính (Machine ID) không thay đổi nên License Key cũ vẫn kích hoạt thành công trọn đời. Nếu bạn mua máy vi tính mới hoàn toàn, vui lòng liên hệ Zalo kỹ thuật <strong>0776.980.269</strong> để được hỗ trợ chuyển đổi bản quyền sang máy mới nhanh chóng.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-slate-500 text-[11px] mb-3">Bạn vẫn còn câu hỏi chưa được giải đáp?</p>
                  <a
                    href="https://zalo.me/0776980269"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition-all"
                  >
                    <HelpCircle className="w-4 h-4" /> Nhắn Zalo Hỗ Trợ: 0776.980.269
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
