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
  ShieldCheck,
  Globe,
  RefreshCw,
  Calculator,
  Zap,
  Building2
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
    { id: 'device-connection', title: '2. Kết Nối Máy Mạng LAN (Radar 0.7s)', icon: Wifi },
    { id: 'multi-branch-cloud', title: '3. Chấm Công Đa Chi Nhánh Cloud ADMS', icon: Globe, badge: 'Gói Pro' },
    { id: 'hr-management', title: '4. Quản Lý Nhân Sự & Phòng Ban', icon: Users },
    { id: 'sync-data', title: '5. Đồng Bộ Vân Tay & Nhân Viên', icon: Fingerprint },
    { id: 'shifts-schedules', title: '6. Cấu Hình Ca & Làm Đêm Qua Ngày', icon: Clock },
    { id: 'attendance-logs', title: '7. Tải Log & Theo Dõi Thời Gian Thực', icon: Calendar },
    { id: 'payroll-system', title: '8. Tính Lương Tự Động & Bảng Lương', icon: Calculator, badge: 'Mới' },
    { id: 'reports-excel', title: '9. Báo Cáo & Xuất File Excel 31 Ngày', icon: FileSpreadsheet },
    { id: 'license-activation', title: '10. Kích Hoạt Bản Quyền License', icon: KeyRound },
    { id: 'inapp-updates', title: '11. Cập Nhật Tự Động 1-Click Local', icon: RefreshCw },
    { id: 'troubleshooting', title: '12. Sao Lưu CSDL & Khắc Phục Sự Cố', icon: HelpCircle },
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
                  Tài Liệu Hướng Dẫn Sử Dụng Toàn Tập
                </h1>
                <p className="text-[10px] text-slate-500 hidden sm:block">KTS TimeAttendance v2.0 Enterprise & Pro Multi-Branch</p>
              </div>
            </div>
          </div>

          {/* Quick Search */}
          <div className="flex-1 max-w-xs relative hidden md:block">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm tính năng (ADMS, lương, ca đêm...)"
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
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/60 shadow-xs'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span className="truncate">{sec.title}</span>
                      </div>
                      {sec.badge && (
                        <span className="ml-1.5 px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-blue-600 text-white shrink-0">
                          {sec.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Hỗ Trợ Kỹ Thuật 24/7
                  </div>
                  <p className="text-[10px] leading-relaxed text-slate-500">
                    Cần kỹ sư KTS hỗ trợ cài đặt hoặc cấu hình máy từ xa qua UltraView / AnyDesk?
                  </p>
                  <a
                    href="https://zalo.me/0776980269"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-1.5 text-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] transition-colors"
                  >
                    Nhắn Zalo: 0776.980.269
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* 1. GETTING STARTED */}
            <section id="getting-started" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">1. Cài Đặt & Khởi Động Ứng Dụng</h2>
                  <p className="text-xs text-slate-500">Chuẩn bị môi trường máy tính Windows 10 & 11 (64-bit)</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <p className="text-slate-700 font-medium">
                  KTS TimeAttendance hỗ trợ 2 hình thức cài đặt tối ưu cho doanh nghiệp:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                      <Download className="w-4 h-4 text-blue-600" />
                      <span>Bản Cài Đặt Tự Động (Setup .exe)</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      1. Tải file <code>KTS_TimeAttendance_Commercial_Setup_v2.0.exe</code>.<br />
                      2. Nhấp đúp chuột để trình cài đặt tự động hoàn tất trong 5 giây.<br />
                      3. Biểu tượng phần mềm xuất hiện ngoài màn hình Desktop sẵn sàng mở.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                      <Monitor className="w-4 h-4 text-slate-700" />
                      <span>Bản Di Động Không Cần Cài (Portable .zip)</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      1. Tải file nén <code>KTS_TimeAttendance_Portable_v2.0.zip</code>.<br />
                      2. Giải nén vào thư mục bất kỳ (ví dụ: <code>D:\KTS_TimeAttendance</code>) hoặc USB.<br />
                      3. Chạy trực tiếp file <code>KTS_TimeAttendance.exe</code>.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-[11px] flex items-center justify-between">
                  <span>
                    🔑 <strong>Tài khoản mặc định:</strong> Tên đăng nhập: <code>admin</code> | Mật khẩu: <code>admin123</code>
                  </span>
                  <button
                    onClick={() => copyToClipboard('admin\nadmin123', 'acc')}
                    className="p-1 hover:bg-blue-100 rounded text-blue-700 transition-colors flex items-center gap-1 text-[10px] font-bold"
                  >
                    {copiedText === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Sao chép</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 2. DEVICE CONNECTION LAN */}
            <section id="device-connection" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">2. Kết Nối Máy Chấm Công Mạng LAN (Radar Siêu Tốc 0.7s)</h2>
                  <p className="text-xs text-slate-500">Tự động nhận diện thiết bị nội bộ mà không cần khai báo IP thủ công</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Cắm dây mạng LAN vào máy chấm công:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Đảm bảo đèn mạng RJ45 phía sau máy chấm công sáng nháy xanh. Máy chấm công và máy tính cài phần mềm KTS cần kết nối vào cùng 1 Router/Modem mạng nội bộ.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Quét Radar LAN tự động chỉ mất 0.7 giây:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Tại menu <strong>Máy Chấm Công</strong>, nhấn nút <strong>"Tự Động Nhận Diện Máy (LAN)"</strong>. KTS Scanner sử dụng thuật toán quét đa luồng 64 workers, quét toàn bộ dải IP (192.168.1.1 - 254) trên cổng <code>4370</code> và phát hiện ngay lập tức máy Ronald Jack, Gigata T9, ZKTeco có trong mạng.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Lưu cấu hình và kiểm tra kết nối (Ping Test):</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Sau khi tìm thấy máy, bấm <strong>Thêm Vào Danh Sách</strong>. Nhấn <strong>Kiểm Tra Kết Nối</strong>: Nếu hiện <em>"Kết Nối Thành Công"</em> màu xanh lá là thiết bị đã sẵn sàng giao tiếp!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px]">
                  💡 <strong>Thông số mặc định tiêu chuẩn:</strong> Cổng kết nối (Port): <code>4370</code> (UDP/TCP) | Mật mã kết nối (ComKey): <code>0</code>.
                </div>
              </div>
            </section>

            {/* 3. MULTI-BRANCH & CLOUD ADMS (PRO FEATURE) */}
            <section id="multi-branch-cloud" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900">3. Chấm Công Đa Chi Nhánh & Cloud Push ADMS</h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
                      Gói Pro
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Chấm công chuỗi cửa hàng toàn quốc xuyên tường lửa / NAT không cần IP tĩnh</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5 text-xs leading-relaxed">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-900 space-y-2">
                  <div className="font-bold text-xs flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" /> Giải Pháp Đa Chi Nhánh Đột Phá Của KTS
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-800">
                    Trước đây, muốn chấm công nhiều chi nhánh ở các tỉnh thành khác nhau (Hà Nội, TP.HCM, Đà Nẵng...), doanh nghiệp bắt buộc phải <strong>thuê IP tĩnh đắt đỏ</strong> và <strong>mở port modem (NAT) phức tạp</strong> dễ bị hacker tấn công. Với KTS TimeAttendance Pro, máy chấm công tự động gọi về máy chủ KTS qua giao thức đám mây <strong>ZKTeco Native ADMS Cloud Push</strong> ngay khi nhân viên quẹt vân tay!
                  </p>
                </div>

                {/* Phương án 1: ADMS */}
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[11px]">Cách 1</span>
                    Cấu Hình Trực Tiếp ZKTeco Cloud Server (ADMS) Trên Máy Chấm Công
                  </h3>
                  <p className="text-slate-600 text-[11px]">
                    Áp dụng cho mọi dòng máy ZKTeco / Ronald Jack có hỗ trợ tính năng Web Server / Cloud Server / ADMS:
                  </p>

                  <div className="space-y-2 pl-2">
                    <div className="flex items-start gap-2 text-slate-700 text-[11px]">
                      <span className="font-bold text-blue-600">Bước 1:</span>
                      <span>Trên bàn phím máy chấm công, nhấn giữ phím <strong>M/OK</strong> để vào Menu Quản Trị.</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700 text-[11px]">
                      <span className="font-bold text-blue-600">Bước 2:</span>
                      <span>Chọn mục <strong>Thiết Lập Liên Lạc (Comm Settings)</strong> &gt; Chọn <strong>Thiết Lập Máy Chủ Đám Mây (Cloud Server / Webserver Settings / ADMS)</strong>.</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700 text-[11px]">
                      <span className="font-bold text-blue-600">Bước 3:</span>
                      <span>
                        Điền các thông số máy chủ KTS:<br />
                        • <strong>Địa Chỉ Máy Chủ (Server Address):</strong> Nhập IP Công cộng hoặc Tên miền máy chủ KTS của bạn (VD: <code>server.kts.vn</code> hoặc IP WAN của trụ sở chính).<br />
                        • <strong>Cổng Máy Chủ (Server Port):</strong> Nhập cổng web <code>80</code> hoặc cổng ứng dụng <code>8000</code>.<br />
                        • <strong>Bật Máy Chủ Đám Mây (Enable Cloud Server):</strong> Chọn <strong>BẬT (Enabled / Yes)</strong>.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700 text-[11px]">
                      <span className="font-bold text-blue-600">Bước 4:</span>
                      <span>Lưu lại. Góc màn hình máy chấm công sẽ xuất hiện <strong>biểu tượng quả cầu trái đất hoặc đám mây màu xanh</strong>. Từ lúc này, mỗi lượt quẹt vân tay tại chi nhánh sẽ bắn dữ liệu Real-time về máy chủ KTS trong 0.5 giây!</span>
                    </div>
                  </div>
                </div>

                {/* Phương án 2: Edge Agent */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[11px]">Cách 2</span>
                    Dùng KTS Edge Sync Agent Cho Các Dòng Máy Chấm Công Đời Cũ
                  </h3>
                  <p className="text-slate-600 text-[11px]">
                    Dành cho các cơ sở sử dụng dòng máy đời cũ chỉ hỗ trợ cổng mạng UDP 4370 truyền thống:
                  </p>
                  <p className="text-slate-700 text-[11px]">
                    • Tại chi nhánh, chỉ cần để 1 máy tính thu ngân hoặc laptop chạy file <code>kts_edge_sync.exe</code> (dung lượng siêu nhẹ ~8MB, chạy ngầm không tốn RAM).<br />
                    • Agent tự động đọc dữ liệu máy chấm công trong mạng nội bộ chi nhánh và đồng bộ mã hóa HTTPS về trung tâm.
                  </p>
                </div>

                {/* Quản lý danh mục Chi nhánh */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Quản Lý Danh Mục Chi Nhánh Trong Phần Mềm:</h4>
                  <p className="text-slate-600 text-[11px]">
                    1. Vào menu <strong>Quản Lý Chi Nhánh</strong>: Bấm <strong>Thêm Chi Nhánh</strong> (ví dụ: <em>Chi nhánh Q1 TP.HCM, Chi nhánh Cầu Giấy HN, Kho Bình Dương</em>).<br />
                    2. Gán máy chấm công vào chi nhánh tương ứng.<br />
                    3. Phân bổ nhân sự trực thuộc chi nhánh.<br />
                    4. Khi xuất báo cáo hoặc bảng lương, bạn có thể lọc xem riêng từng chi nhánh hoặc xem toàn bộ công ty trên 1 trang duy nhất!
                  </p>
                </div>
              </div>
            </section>

            {/* 4. HR MANAGEMENT */}
            <section id="hr-management" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">4. Quản Lý Hồ Sơ Nhân Sự & Phòng Ban</h2>
                  <p className="text-xs text-slate-500">Tổ chức cây cơ cấu phòng ban và nhập danh sách từ file Excel</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">1. Nhập Nhân Sự Hàng Loạt Từ Excel:</h4>
                    <p className="text-slate-600 text-[11px]">
                      • Bấm nút <strong>"Tải File Mẫu Excel"</strong> trong mục Nhân sự.<br />
                      • Điền danh sách nhân viên: Mã NV, Họ tên, Mã chấm công (Enroll ID), Phòng ban, Chức vụ, Mức lương cơ bản, Ngày vào làm.<br />
                      • Bấm <strong>"Nhập Từ File Excel"</strong> để nạp hàng trăm nhân viên vào hệ thống trong 1 giây.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">2. Phân Quyền & Chi Nhánh:</h4>
                    <p className="text-slate-600 text-[11px]">
                      • Gắn mỗi nhân viên vào 1 Chi Nhánh và 1 Phòng Ban xác định.<br />
                      • Định cấu hình tài khoản phân quyền: Quản trị viên (Admin), Nhân sự (HR), Kế toán (Accountant).
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px]">
                  ⚠️ <strong>Lưu ý quan trọng:</strong> <em>Mã Chấm Công (Enroll ID)</em> trong phần mềm phải trùng khớp 100% với số ID đăng ký ngón tay trên máy chấm công để hệ thống ghép đúng công của từng người.
                </div>
              </div>
            </section>

            {/* 5. SYNC FINGERPRINT DATA */}
            <section id="sync-data" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Fingerprint className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">5. Đồng Bộ Vân Tay & Nhân Viên Với Thiết Bị</h2>
                  <p className="text-xs text-slate-500">Tải dữ liệu 2 chiều giữa máy tính và máy chấm công</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      📥 Tải Dữ Liệu Từ Máy Chấm Công Về Máy Tính (Download Users):
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      Khi nhân viên mới đã lấy dấu vân tay trực tiếp trên máy chấm công: Bạn vào menu <strong>Máy Chấm Công</strong> &gt; Chọn máy &gt; Bấm nút <strong>"Tải Nhân Viên & Vân Tay Về Máy Tính"</strong>. Toàn bộ ID, tên và mẫu vân tay sẽ được sao lưu an toàn vào cơ sở dữ liệu KTS.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      📤 Tải Dữ Liệu Từ Máy Tính Lên Máy Chấm Công (Upload Users):
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      Khi doanh nghiệp lắp thêm máy chấm công mới ở cửa ra vào khác hoặc chi nhánh mới: Bạn không cần bắt nhân viên lấy lại vân tay từ đầu! Chỉ cần bấm <strong>"Tải Lên Máy Chấm Công"</strong>, hệ thống tự động đẩy toàn bộ dấu vân tay có sẵn lên máy mới chỉ trong vài giây.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      🗑️ Xóa Nhân Viên Nghỉ Việc Khỏi Máy Chấm Công Từ Xa:
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      Khi nhân sự thôi việc, bấm nút <strong>Xóa Khỏi Thiết Bị</strong>. Phần mềm tự động gửi lệnh xóa quyền truy cập trên máy chấm công ngay lập tức để đảm bảo an ninh nội bộ.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. SHIFTS & SCHEDULES */}
            <section id="shifts-schedules" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">6. Cấu Hình Ca Làm Việc & Ca Đêm Qua Ngày</h2>
                  <p className="text-xs text-slate-500">Hỗ trợ ca hành chính, ca gãy, ca kíp xoay vòng và làm ca đêm 24/7</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-xs">Thiết Lập Các Loại Ca Linh Hoạt:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <div className="font-bold text-slate-900 text-xs">1. Ca Hành Chính</div>
                      <p className="text-[11px] text-slate-600">
                        Vào làm: 08:00 - Nghỉ trưa: 12:00-13:30 - Tan làm: 17:30. Cho phép đi trễ/về sớm tối đa 15 phút.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <div className="font-bold text-slate-900 text-xs">2. Ca Kíp Sản Xuất</div>
                      <p className="text-[11px] text-slate-600">
                        Ca 1 (06:00-14:00), Ca 2 (14:00-22:00). Phù hợp xưởng may, bao bì, cơ khí luân chuyển nhân sự.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <div className="font-bold text-slate-900 text-xs">3. Ca Đêm Qua Ngày (Overnight)</div>
                      <p className="text-[11px] text-slate-600">
                        Vào: 22:00 đêm - Ra: 06:00 sáng hôm sau. Tự động tính đúng ngày công mà không bị tách đôi ngày.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">⭐ Thuật Toán Auto-Shift Tự Động Tìm Ca Thông Minh:</h4>
                  <p className="text-slate-600 text-[11px]">
                    Nếu doanh nghiệp có nhiều ca kíp xoay vòng, bạn không cần phải xếp lịch trước cho từng nhân viên mỗi tuần. Thuật toán độc quyền của KTS sẽ tự động so sánh giờ quẹt thẻ thực tế của nhân viên với danh sách các ca trong công ty để tự nhận diện chính xác ca làm việc đó!
                  </p>
                </div>
              </div>
            </section>

            {/* 7. ATTENDANCE LOGS */}
            <section id="attendance-logs" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">7. Tải Log & Giám Sát Chấm Công Thời Gian Thực</h2>
                  <p className="text-xs text-slate-500">Giám sát quẹt thẻ trực tiếp và xử lý bổ sung công thủ công</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Thao Tác Tải Dữ Liệu Chấm Công Mới Nhất:</h4>
                  <p className="text-slate-600 text-[11px]">
                    1. Mở menu <strong>Dữ Liệu Chấm Công</strong>.<br />
                    2. Chọn máy chấm công hoặc chi nhánh cần lấy dữ liệu (hoặc chọn tất cả máy).<br />
                    3. Chọn khoảng ngày cần tải (ví dụ: từ ngày 01 đến ngày hiện tại).<br />
                    4. Bấm nút <strong>Tải Dữ Liệu Chấm Công</strong>: Hàng ngàn lượt quẹt vân tay sẽ được nạp về máy tính trong vòng <strong>2 đến 5 giây</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Cơ Chế Khử Trùng Thẻ (Anti-Passback Debounce):</h4>
                  <p className="text-slate-600 text-[11px]">
                    Nhân viên lo sợ máy chưa nhận nên thường quẹt liên tiếp 2-3 lần trong vòng 1-2 phút. KTS tự động áp dụng bộ lọc 5 phút: Giữ lại lượt quẹt đầu tiên và tự động loại bỏ các lượt quẹt trùng lặp, giúp dữ liệu luôn trong sạch và chính xác.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px]">
                  ✍️ <strong>Thêm Chấm Công Bổ Sung:</strong> Dành cho nhân sự đi gặp khách hàng, quên quẹt vân tay hoặc đi công tác: Bấm nút <strong>"Bổ Sung Chấm Công"</strong>, chọn nhân viên, ngày giờ và nhập lý do phê duyệt.
                </div>
              </div>
            </section>

            {/* 8. AUTOMATIC PAYROLL SYSTEM (NEW FEATURE) */}
            <section id="payroll-system" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900">8. Tính Lương Tự Động & Bảng Lương Kế Toán</h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-600 text-white shadow-xs">
                      Chuẩn Kế Toán 2026
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Tự động tính tiền lương, hệ số tăng ca OT, phụ cấp ca đêm và khấu trừ bảo hiểm</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <p className="text-slate-700 font-medium">
                  Tính năng <strong>Tính Lương Tự Động (Payroll Engine)</strong> tích hợp sẵn trong KTS TimeAttendance loại bỏ hoàn toàn việc nhân viên kế toán phải cộng trừ thủ công bằng file Excel rời rạc:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">Hệ Số Tăng Ca (OT) Tự Động:</h4>
                    <ul className="text-slate-600 text-[11px] space-y-1">
                      <li>• <strong>Ngày thường:</strong> Nhân hệ số <strong>1.5x</strong> tiền lương giờ.</li>
                      <li>• <strong>Ngày nghỉ cuối tuần (Chủ nhật):</strong> Nhân hệ số <strong>2.0x</strong>.</li>
                      <li>• <strong>Ngày nghỉ Lễ, Tết:</strong> Nhân hệ số <strong>3.0x</strong>.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">Phụ Cấp Ca Đêm & Khấu Trừ:</h4>
                    <ul className="text-slate-600 text-[11px] space-y-1">
                      <li>• <strong>Phụ cấp ca đêm:</strong> Tự động cộng <strong>+30%</strong> tiền lương giờ khi làm việc từ 22:00 đến 06:00 sáng theo Luật Lao Động.</li>
                      <li>• <strong>Bảo hiểm bắt buộc:</strong> Tự động trích trừ <strong>10.5%</strong> (BHXH 8%, BHYT 1.5%, BHTN 1%).</li>
                      <li>• <strong>Tạm ứng & Phạt đi trễ:</strong> Tự động đối trừ vào Lương Thực Nhận (Net).</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1.5">
                  <div className="font-bold text-xs">Thao Tác Tính Lương & Xuất File:</div>
                  <p className="text-[11px] leading-relaxed">
                    1. Mở menu <strong>Bảng Lương (Payroll)</strong> &gt; Chọn Tháng & Năm cần chốt lương.<br />
                    2. Bấm nút <strong>"Tính Toán Lương Tự Động"</strong>: Hệ thống tổng hợp hàng trăm nhân viên chỉ trong 1.2 giây.<br />
                    3. Bấm <strong>"Xuất Bảng Lương Excel"</strong> để tải về file bảng lương đã định dạng sẵn tiêu đề, công thức tính và ô ký tên sẵn sàng in ấn gửi ban giám đốc!
                  </p>
                </div>
              </div>
            </section>

            {/* 9. REPORTS & EXCEL */}
            <section id="reports-excel" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">9. Báo Cáo Thống Kê & Bảng Công Ma Trận 31 Ngày</h2>
                  <p className="text-xs text-slate-500">Mẫu báo cáo Excel chuyên nghiệp chuẩn văn phòng doanh nghiệp Việt Nam</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-xs">Bảng Chấm Công Ma Trận 31 Ngày:</h4>
                    <p className="text-slate-600 text-[11px]">
                      Hiển thị trực quan từng ngày trong tháng từ ngày 1 đến ngày 31 của từng nhân viên (Ngày đi làm, ngày chủ nhật, ngày nghỉ phép, số giờ công cụ thể).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-xs">Bảng Tổng Hợp Công Tháng:</h4>
                    <p className="text-slate-600 text-[11px]">
                      Thống kê tổng hợp: Tổng ngày công thực tế, tổng phút đi trễ, tổng phút về sớm, tổng số giờ tăng ca (OT).
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-[11px]">
                  📊 <strong>Xuất Excel 1-Click:</strong> File tải về có định dạng chuẩn <code>.xlsx</code> văn phòng, có sẵn màu sắc tiêu đề, đường viền rõ ràng, công thức tính tổng tự động, không bị lỗi font Tiếng Việt.
                </div>
              </div>
            </section>

            {/* 10. LICENSE ACTIVATION */}
            <section id="license-activation" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">10. Kích Hoạt Bản Quyền License & Đổi Gói</h2>
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
                        Mở phần mềm KTS TimeAttendance trên máy bạn muốn cài đặt. Nhấp vào nút <strong>Bản quyền</strong> ở góc trái dưới cùng màn hình. Bấm biểu tượng <strong>Sao chép</strong> để lấy chuỗi mã máy tính (ví dụ: <code>KTS-A1B2-C3D4-E5F6</code>).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Đăng ký & Quét mã VietQR trên Website:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Nhấp nút <strong>Mua Bản Quyền</strong> trên trang web này, chọn gói (Tiêu Chuẩn hoặc Pro Đa Chi Nhánh), dán <em>Machine ID</em> đã chép ở Bước 1 và quét mã VietQR trên ứng dụng ngân hàng.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">Tra cứu & Nhận mã License Key tức thì:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Sau khi hoàn tất thanh toán, hệ thống VietQR tự động duyệt đơn trong 1-5 phút. Bấm vào nút <strong>Tra Cứu Bản Quyền</strong> trên web, nhập số điện thoại hoặc Machine ID để nhận chuỗi <strong>License Key</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-emerald-900 text-xs">Dán Key và kích hoạt thành công:</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Quay lại phần mềm trên máy tính, dán License Key vào ô và bấm <strong>Kích Hoạt Bản Quyền</strong>. Phần mềm mở khóa 100% tính năng vĩnh viễn hoặc theo hạn gói!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-[11px]">
                  💡 <strong>Kích hoạt Offline 100%:</strong> Thuật toán mã hóa RSA của KTS cho phép kích hoạt hoàn toàn Offline. Ngay cả khi máy tính của bạn đặt trong phòng máy bảo mật không có mạng Internet, bạn vẫn có thể dán mã License Key để kích hoạt bình thường!
                </div>
              </div>
            </section>

            {/* 11. IN-APP 1-CLICK UPDATES */}
            <section id="inapp-updates" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">11. Cập Nhật Phần Mềm Tự Động 1-Click Local</h2>
                  <p className="text-xs text-slate-500">Quản trị viên nâng cấp phiên bản mới trực tiếp ngay trong app không cần cài lại</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <p className="text-slate-700">
                  KTS TimeAttendance trang bị hệ thống kiểm tra và nâng cấp thông minh:
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      🔔 1. Tự Động Phát Hiện Phiên Bản Mới:
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      Mỗi khi KTS phát hành phiên bản cập nhật vá lỗi hoặc bổ sung tính năng mới (ví dụ từ v2.0.1 lên v2.0.2), trên đầu giao diện phần mềm của bạn sẽ tự động hiển thị <strong>Banner Thông Báo Cập Nhật Mới</strong> kèm danh sách các tính năng được cải tiến.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      ⚡ 2. Nâng Cấp 1-Click An Toàn:
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      Quản trị viên chỉ cần bấm vào nút <strong>"Cập Nhật Ngay"</strong>. Phần mềm sẽ tự động:<br />
                      • Tự động sao lưu an toàn toàn bộ dữ liệu chấm công và danh sách nhân sự hiện có.<br />
                      • Tải gói cập nhật nhị phân an toàn từ máy chủ chính thức của KTS.<br />
                      • Khởi động lại với phiên bản mới mà người dùng không cần can thiệp bất kỳ thao tác kỹ thuật nào.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. BACKUP & TROUBLESHOOTING */}
            <section id="troubleshooting" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">12. Sao Lưu CSDL & Khắc Phục Sự Cố FAQs</h2>
                  <p className="text-xs text-slate-500">Bảo vệ an toàn dữ liệu doanh nghiệp và xử lý nhanh các tình huống phát sinh</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-xs leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">Sao Lưu Dữ Liệu (Backup):</h4>
                    <p className="text-slate-600 text-[11px]">
                      Vào <strong>Cài Đặt Hệ Thống</strong> &gt; Chọn <strong>Sao Lưu Dữ Liệu</strong>. Hệ thống xuất toàn bộ CSDL SQLite thành 1 file <code>.db</code>. Bạn có thể copy file này cất vào Google Drive, USB hoặc ổ D: để dự phòng.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">Phục Hồi Dữ Liệu (Restore):</h4>
                    <p className="text-slate-600 text-[11px]">
                      Khi đổi máy tính mới hoặc cài lại Windows, bạn chỉ cần bấm nút <strong>Phục Hồi Dữ Liệu</strong> và chọn file backup đã lưu trước đó. Toàn bộ dữ liệu nhân sự, ca làm việc và lịch sử chấm công sẽ được tái hiện nguyên vẹn 100%.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3">
                  <h4 className="font-bold text-slate-900 text-xs">Các Câu Hỏi Thường Gặp (FAQs):</h4>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-900 block">
                      ❓ Câu 1: Phần mềm báo "Không thể kết nối đến máy chấm công" hoặc Ping thất bại?
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Cách xử lý:</strong><br />
                      1. Kiểm tra đèn mạng LAN cắm sau máy chấm công có sáng xanh không.<br />
                      2. Đảm bảo máy tính và máy chấm công cắm chung 1 modem mạng nội bộ.<br />
                      3. Kiểm tra Port <code>4370</code> và ComKey là <code>0</code>.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-900 block">
                      ❓ Câu 2: Nhân viên chấm vân tay thành công nhưng trên app không hiện giờ quẹt?
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Cách xử lý:</strong><br />
                      1. Vào mục <strong>Dữ Liệu Chấm Công</strong> và bấm <strong>Tải Dữ Liệu Chấm Công</strong> để kéo log từ máy về máy tính.<br />
                      2. Kiểm tra Mã Chấm Công (Enroll ID) của nhân viên trong danh mục có khớp chính xác với ID trên máy chấm công không.<br />
                      3. Kiểm tra đồng hồ hiển thị trên máy chấm công có bị chạy sai ngày giờ không.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="font-bold text-slate-900 block">
                      ❓ Câu 3: Khi đổi máy vi tính mới có bị mất bản quyền không?
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Trả lời:</strong> Với khách hàng đăng ký Gói Vĩnh Viễn hoặc Pro, KTS hỗ trợ chuyển đổi bản quyền sang máy tính mới tối đa 3 lần hoàn toàn miễn phí. Vui lòng nhắn tin Zalo kỹ thuật <strong>0776.980.269</strong> để được kỹ sư kích hoạt lại ngay trong 5 phút.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-slate-500 text-[11px] mb-3">Bạn vẫn cần chuyên viên kỹ thuật hỗ trợ trực tiếp?</p>
                  <a
                    href="https://zalo.me/0776980269"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition-all"
                  >
                    <HelpCircle className="w-4 h-4" /> Kỹ Sư KTS Hỗ Trợ Zalo: 0776.980.269
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
