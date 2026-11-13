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
  Building2,
  Wrench,
  Layers,
  Activity,
  AlertTriangle,
  Info,
  Terminal,
  ScanFace,
  CreditCard,
  Radio,
  Lock,
  Power,
  RotateCcw,
  Printer
} from 'lucide-react';

export default function UserGuide({ onBackToHome, onOpenOrder, onOpenLookup }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [guideCategory, setGuideCategory] = useState('hardware'); // 'hardware' or 'software'
  const [activeSection, setActiveSection] = useState('hw-specs');
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(''), 2500);
  };

  // Sections categorized
  const hardwareSections = [
    { id: 'hw-specs', title: '1. Thông Số Phần Cứng & Dòng Máy', icon: Cpu },
    { id: 'hw-wiring', title: '2. Sơ Đồ Đấu Nối Chân Tín Hiệu (Wiring & Pinout)', icon: Wrench, badge: 'Kỹ Thuật' },
    { id: 'hw-mounting', title: '3. Tiêu Chuẩn Khảo Sát & Lắp Đặt Vật Lý', icon: Layers },
    { id: 'hw-menu-tree', title: '4. Sơ Đồ Cây Menu Bàn Phím Máy ZKTeco', icon: SlidersIcon },
    { id: 'hw-enrollment', title: '5. Quy Chuẩn Đăng Ký Vân Tay / Khuôn Mặt AI', icon: Fingerprint },
    { id: 'hw-errors', title: '6. Bảng Tra Cứu Mã Lỗi Phần Cứng & Tiếng Bíp', icon: AlertTriangle, badge: 'Sự Cố' },
  ];

  const softwareSections = [
    { id: 'sw-getting-started', title: '7. Cài Đặt Desktop App 1-Click', icon: Monitor },
    { id: 'sw-lan-radar', title: '8. Quét Mạng LAN (Radar 0.7s Tìm Máy IP)', icon: Wifi },
    { id: 'sw-cloud-adms', title: '9. Chấm Công Đa Chi Nhánh Cloud ADMS', icon: Globe, badge: 'Gói Pro' },
    { id: 'sw-remote-commands', title: '10. Hàng Đợi Lệnh Hai Chiều (Command Queue)', icon: Radio },
    { id: 'sw-shifts-payroll', title: '11. Ca Đêm (+30%) & Tính Lương Tự Động', icon: Calculator, badge: 'Mới' },
    { id: 'sw-rbac-security', title: '12. Phân Quyền RBAC 4 Cấp & Bản Quyền RSA', icon: ShieldCheck },
    { id: 'sw-backup-disaster', title: '13. Sao Lưu CSDL & Khôi Phục Sự Cố', icon: Database },
  ];

  function SlidersIcon(props) {
    return <Terminal {...props} />;
  }

  const currentSections = guideCategory === 'hardware' ? hardwareSections : softwareSections;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 animate-fadeIn font-sans">
      {/* Top Banner Navigation */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              title="Quay lại trang chủ"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Trang Chủ</span>
            </button>
            <div className="h-5 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                  Tài Liệu Kỹ Thuật & Cẩm Nang Vận Hành Toàn Diện
                </h1>
                <p className="text-[10px] text-slate-500 hidden sm:block">Hardware Engineering Manual & KTS Cloud Software Guide</p>
              </div>
            </div>
          </div>

          {/* Quick Search */}
          <div className="flex-1 max-w-xs relative hidden md:block">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm: Sơ đồ chân, ADMS, ca đêm..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value.toLowerCase())}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer border border-slate-200"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">In Tài Liệu</span>
            </button>
            <button
              onClick={onOpenOrder}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mua Bản Quyền / Thiết Bị</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Toggle Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => {
                setGuideCategory('hardware');
                setActiveSection('hw-specs');
              }}
              className={`py-3.5 text-xs sm:text-sm font-black border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                guideCategory === 'hardware'
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>📘 Sổ Tay Thiết Bị Phần Cứng & Thi Công (Hardware Docs)</span>
            </button>

            <button
              onClick={() => {
                setGuideCategory('software');
                setActiveSection('sw-getting-started');
              }}
              className={`py-3.5 text-xs sm:text-sm font-black border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                guideCategory === 'software'
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>💻 Hướng Dẫn Phần Mềm & Cloud ADMS (Software Docs)</span>
            </button>
          </div>

          <div className="text-[11px] font-bold text-slate-500 hidden lg:block">
            Phiên bản tài liệu: <span className="text-blue-600 font-mono">v2.5.0 Enterprise</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-1 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
              <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>{guideCategory === 'hardware' ? 'Mục Lục Phần Cứng' : 'Mục Lục Phần Mềm'}</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 text-[9px] font-mono">
                  {currentSections.length} mục
                </span>
              </div>
              <nav className="space-y-1">
                {currentSections.map(sec => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span className="truncate">{sec.title}</span>
                      </div>
                      {sec.badge && (
                        <span className="ml-1.5 px-1.5 py-0.2 rounded text-[9px] font-black bg-blue-600 text-white shrink-0">
                          {sec.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Hỗ Trợ Kỹ Thuật VIP 24/7
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Cần kỹ sư hỗ trợ đấu nối dây, thông mạch mạng hoặc cấu hình ADMS qua UltraView / AnyDesk?
                  </p>
                  <a
                    href="https://zalo.me/0776980269"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-2 text-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
                  >
                    Hotline Kỹ Thuật: 0776.980.269
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            {/* ======================================================== */}
            {/* TAB 1: HARDWARE ENGINEERING & DEVICE SPECIFICATIONS      */}
            {/* ======================================================== */}
            {guideCategory === 'hardware' && (
              <>
                {/* 1.1 HARDWARE SPECS */}
                <section id="hw-specs" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">1. Bảng Thông Số Kỹ Thuật Thiết Bị Phổ Biến</h2>
                      <p className="text-xs text-slate-500">Chuẩn hóa cho các dòng máy ZKTeco, Ronald Jack, Gigata tương thích KTS Cloud ADMS</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                            <th className="py-2.5 px-3">Dòng Máy</th>
                            <th className="py-2.5 px-3">Phương Thức Xác Thực</th>
                            <th className="py-2.5 px-3">Dung Lượng Bộ Nhớ</th>
                            <th className="py-2.5 px-3">Cổng Kết Nối</th>
                            <th className="py-2.5 px-3">Giao Thức ADMS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">ZKTeco K14 / K20</td>
                            <td className="py-2.5 px-3">Vân tay quang học (SilkID) + Thẻ từ</td>
                            <td className="py-2.5 px-3 font-mono">3.000 vân tay / 100.000 log</td>
                            <td className="py-2.5 px-3">RJ45 (TCP/IP), USB Host</td>
                            <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Tương thích 100%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">Ronald Jack F18 / F21</td>
                            <td className="py-2.5 px-3">Vân tay + Thẻ + Kiểm soát cửa (Access Control)</td>
                            <td className="py-2.5 px-3 font-mono">3.000 vân tay / 100.000 log</td>
                            <td className="py-2.5 px-3">TCP/IP, RS485, Relay Lock, Wiegand</td>
                            <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Tương thích 100%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">FaceDepot 7BL / MB20</td>
                            <td className="py-2.5 px-3">Khuôn mặt AI Visible Light + Vân tay</td>
                            <td className="py-2.5 px-3 font-mono">10.000 khuôn mặt / 200.000 log</td>
                            <td className="py-2.5 px-3">TCP/IP, Wi-Fi 2.4GHz, Relay</td>
                            <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Tương thích 100%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-slate-900">Gigata 879C / Granding</td>
                            <td className="py-2.5 px-3">Vân tay + Mật mã</td>
                            <td className="py-2.5 px-3 font-mono">3.000 vân tay / 100.000 log</td>
                            <td className="py-2.5 px-3">TCP/IP, USB</td>
                            <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Tương thích 100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs">
                      <strong>💡 Lưu ý quan trọng cho Kỹ sư:</strong> Toàn bộ các dòng máy trên đều chạy firmware hỗ trợ giao thức <strong>ZKTeco IClock Push 2.4.1 / 2.0.2</strong>. Chỉ cần máy có cổng LAN hoặc Wi-Fi kết nối Internet là có thể tự động đẩy log về máy chủ KTS Cloud.
                    </div>
                  </div>
                </section>

                {/* 1.2 WIRING & PINOUT */}
                <section id="hw-wiring" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">2. Sơ Đồ Đấu Nối Chân Tín Hiệu (Terminal Block & Pinout)</h2>
                      <p className="text-xs text-slate-500">Đặc tả sơ đồ chân cắm Relay khóa từ, Cảm biến cửa và Nguồn điện 12V DC</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 text-xs">
                    {/* Visual 2D Terminal Representation */}
                    <div className="p-5 rounded-2xl bg-slate-900 text-white font-mono space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-cyan-400">MẶT SAU THIẾT BỊ: TERMINAL BLOCK ACCESS CONTROL</span>
                        <span className="text-[10px] text-slate-400">Chuẩn cắm Phoenix 10-Pin</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 1</span>
                          <strong className="text-rose-400">+12V DC</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 2</span>
                          <strong className="text-slate-200">GND (Mass)</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 3</span>
                          <strong className="text-emerald-400">NO (Thường mở)</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 4</span>
                          <strong className="text-amber-400">COM (Chân chung)</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 5</span>
                          <strong className="text-blue-400">NC (Thường đóng)</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 6</span>
                          <strong className="text-cyan-400">EXIT / BUT</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 7</span>
                          <strong className="text-purple-400">SENSOR (Cửa)</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 8</span>
                          <strong className="text-yellow-400">BELL+ / ALARM</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 9</span>
                          <strong className="text-teal-400">WD0 (Wiegand)</strong>
                        </div>
                        <div className="p-2 rounded bg-slate-800 border border-slate-700">
                          <span className="text-[10px] text-slate-400 block">Pin 10</span>
                          <strong className="text-teal-400">WD1 (Wiegand)</strong>
                        </div>
                      </div>
                    </div>

                    {/* Step-by-Step Wiring instructions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-black text-slate-900 text-xs flex items-center gap-1.5">
                          <Lock className="w-4 h-4 text-blue-600" />
                          Đấu Khóa Nam Châm Điện Từ (Magnetic Lock)
                        </h4>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          - Dây <strong>+12V</strong> nguồn &rarr; Đấu vào chân <strong>+</strong> của Khóa từ.<br />
                          - Chân <strong>-</strong> của Khóa từ &rarr; Đấu vào chân <strong>NC (Pin 5)</strong> trên máy.<br />
                          - Chân <strong>COM (Pin 4)</strong> trên máy &rarr; Đấu về chân <strong>GND</strong> nguồn.<br />
                          <em>* Cơ chế: Khi nhận diện đúng, Relay ngắt chân NC trong 3-5s để mở cửa.</em>
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-black text-slate-900 text-xs flex items-center gap-1.5">
                          <Power className="w-4 h-4 text-amber-600" />
                          Đấu Nút Bấm Mở Cửa (Exit Button)
                        </h4>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          - 1 chân của Nút Exit &rarr; Đấu vào chân <strong>EXIT / BUT (Pin 6)</strong>.<br />
                          - 1 chân còn lại của Nút Exit &rarr; Đấu vào chân <strong>GND (Pin 2)</strong>.<br />
                          <em>* Cơ chế: Nút Exit là tiếp điểm thường mở (NO), khi nhấn nút sẽ chạm Mass (GND) kích hoạt nhả khóa mở cửa.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 1.3 MOUNTING & STANDARDS */}
                <section id="hw-mounting" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">3. Tiêu Chuẩn Khảo Sát & Lắp Đặt Vật Lý</h2>
                      <p className="text-xs text-slate-500">Quy chuẩn độ cao, chống chói sáng và khoảng cách kéo dây cáp mạng tín hiệu</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs">📏 Độ Cao Lắp Đặt Chuẩn</h4>
                        <p className="text-slate-600 text-[11px]">
                          - <strong>Máy vân tay / thẻ:</strong> 1.40m tính từ mặt sàn đến tâm bàn phím.<br />
                          - <strong>Máy nhận diện khuôn mặt:</strong> 1.45m - 1.50m (góc quét camera tối ưu cho người cao từ 1m45 đến 1m85).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs">☀️ Vị Trí Tránh Chói Sáng</h4>
                        <p className="text-slate-600 text-[11px]">
                          - <strong>TUYỆT ĐỐI KHÔNG</strong> lắp đối diện trực tiếp cửa kính có nắng chiếu vào.<br />
                          - Tránh đèn pha halogen rọi thẳng vào mắt đọc cảm biến quang học gây lóa hình ảnh nhận diện.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs">🔌 Quy Chuẩn Cáp Mạng</h4>
                        <p className="text-slate-600 text-[11px]">
                          - Sử dụng cáp <strong>CAT5E hoặc CAT6</strong> chuẩn đồng nguyên chất (24AWG).<br />
                          - Khoảng cách kéo dây mạng từ Switch đến máy chấm công <strong>&lt; 90 mét</strong> để đảm bảo tín hiệu thông mạch.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 1.4 PHYSICAL MENU TREE */}
                <section id="hw-menu-tree" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">4. Sơ Đồ Cây Menu Bàn Phím Máy ZKTeco (Menu Tree)</h2>
                      <p className="text-xs text-slate-500">Bản đồ cấu trúc phím bấm trực tiếp trên máy chấm công</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs font-mono">
                    <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 overflow-x-auto text-[11.5px] leading-relaxed">
{`BẤM PHÍM [M/OK] ĐỂ VÀO MENU QUẢN TRỊ
│
├── [1] NGƯỜI DÙNG (Users Mgt.)
│   ├── Thêm mới (New User): Đặt Mã PIN, Tên, Đăng ký Vân tay (1-10 ngón), Khuôn mặt, Thẻ từ
│   ├── Quản lý người dùng: Tìm kiếm nhân viên, Sửa thông tin, Xóa nhân viên
│   └── Phân quyền quản trị: Đặt Quản trị viên cấp cao (Super Admin) chống nhân viên tự ý vào menu
│
├── [2] THIẾT LẬP LIÊN KẾT (Comm. Setting)
│   ├── Ethernet: Địa chỉ IP máy (192.168.1.201), Subnet Mask (255.255.255.0), Gateway, DNS (8.8.8.8)
│   ├── Cài đặt máy chủ Cloud (ADMS / Cloud Server):
│   │   ├── Địa chỉ máy chủ (Server Address): Tên miền Cloudflare hoặc IP máy Admin KTS
│   │   ├── Cổng máy chủ (Server Port): 7788 (hoặc 80/443)
│   │   ├── Bật máy chủ Cloud: BẬT (ON)
│   │   └── Sử dụng tên miền (Enable Domain): BẬT nếu dùng Domain, TẮT nếu dùng IP số
│   └── PC Connect: Cổng kết nối LAN (4370), Mật mã kết nối (CommKey = 0)
│
├── [3] HỆ THỐNG (System Settings)
│   ├── Ngày giờ: Chỉnh ngày giờ thủ công (hoặc để KTS Cloud tự đồng bộ NTP)
│   ├── Chuông báo giờ: Cài đặt chuông báo giờ vào ca, tan ca
│   └── Cài đặt âm thanh: Tăng giảm âm lượng tiếng "Xin cảm ơn"
│
└── [4] QUẢN LÝ DỮ LIỆU (Data Mgt.)
    ├── Tải dữ liệu về USB: Xuất file log hoặc backup danh sách vân tay ra ổ USB
    ├── Xóa dữ liệu chấm công: Dọn dẹp bộ nhớ đệm sau khi server KTS đã sao lưu an toàn
    └── Khôi phục cài đặt gốc (Factory Reset): Xóa trắng máy về trạng thái xuất xưởng`}
                    </pre>
                  </div>
                </section>

                {/* 1.5 BIOMETRIC ENROLLMENT SOP */}
                <section id="hw-enrollment" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Fingerprint className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">5. Quy Chuẩn Lấy Mẫu Sinh Trắc Học (Enrollment SOP)</h2>
                      <p className="text-xs text-slate-500">Kỹ thuật lấy mẫu vân tay 3 lần và nhận diện khuôn mặt AI góc chuẩn</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                          <Fingerprint className="w-4 h-4 text-blue-600" />
                          Quy Chuẩn Lấy Mẫu Vân Tay (SilkID Sensor)
                        </h4>
                        <p className="text-slate-600 text-[11px]">
                          - Đặt tâm ngón tay vuông góc 90° vào chính giữa mắt kính cảm biến.<br />
                          - Giữ lực ấn vừa phải, không trượt ngón tay.<br />
                          - Nhấc ngón tay lên và đặt lại <strong>đủ 3 lần</strong> theo tiếng bíp thông báo của máy.<br />
                          - Khuyên dùng ngón trỏ hoặc ngón giữa của cả 2 bàn tay (đăng ký 2 ngón dự phòng khi bị xước).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                          <ScanFace className="w-4 h-4 text-emerald-600" />
                          Quy Chuẩn Nhận Diện Khuôn Mặt (Visible Light AI)
                        </h4>
                        <p className="text-slate-600 text-[11px]">
                          - Đứng cách camera thiết bị từ <strong>0.6m đến 1.0m</strong>.<br />
                          - Tháo khẩu trang, kính râm và vén tóc mái che trán trong lúc lấy mẫu gốc.<br />
                          - Nhìn thẳng vào tâm camera, giữ biểu cảm tự nhiên cho đến khi thanh tiến trình nhận diện đạt 100%.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 1.6 HARDWARE ERRORS */}
                <section id="hw-errors" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">6. Bảng Tra Cứu Mã Lỗi Phần Cứng & Khắc Phục Nhanh</h2>
                      <p className="text-xs text-slate-500">Xử lý ngay tại chỗ các hiện tượng máy mất mạng, đầy bộ nhớ, treo cảm ứng</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                            <th className="py-2.5 px-3">Hiện Tượng / Báo Lỗi</th>
                            <th className="py-2.5 px-3">Nguyên Nhân Kỹ Thuật</th>
                            <th className="py-2.5 px-3">Cách Khắc Phục Tức Thì</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-rose-600">🌐 Biểu tượng mạng có gạch chéo đỏ</td>
                            <td className="py-2.5 px-3">Mất kết nối Internet hoặc sai DNS tại chi nhánh</td>
                            <td className="py-2.5 px-3 text-slate-800">
                              Vào <code>Menu &rarr; Comm. &rarr; Ethernet</code>: Đặt lại DNS thành <code>8.8.8.8</code>. Rút cắm lại dây mạng LAN.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-amber-600">⚠️ Báo lỗi "Bộ nhớ đã đầy" (Flash Full)</td>
                            <td className="py-2.5 px-3">Bộ nhớ quẹt thẻ vượt quá 100.000 lượt</td>
                            <td className="py-2.5 px-3 text-slate-800">
                              Mở KTS Cloud bấm <strong>"Ép đồng bộ"</strong>, sau đó phát lệnh <strong>"Xóa log máy"</strong> từ xa.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-blue-600">🔊 Máy kêu tiếng bíp dài không nhận vân tay</td>
                            <td className="py-2.5 px-3">Vân tay bị mờ, ướt nước, hoặc đặt lệch góc cảm biến</td>
                            <td className="py-2.5 px-3 text-slate-800">
                              Lau khô ngón tay và mắt kính quang học; vào Menu đăng ký thêm ngón tay dự phòng.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-3 font-bold text-purple-600">❄️ Máy bị đơ màn hình cảm ứng</td>
                            <td className="py-2.5 px-3">Xung đột tiến trình xử lý mạng hoặc sụt áp nguồn 12V</td>
                            <td className="py-2.5 px-3 text-slate-800">
                              Rút jack nguồn 12V sau máy ra chờ 5 giây rồi cắm lại. Hoặc bấm lệnh <strong>Reboot từ xa</strong> trên web Admin.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* ======================================================== */}
            {/* TAB 2: SOFTWARE SUITE & CLOUD ADMS DOCUMENTATION         */}
            {/* ======================================================== */}
            {guideCategory === 'software' && (
              <>
                {/* 2.1 GETTING STARTED SOFTWARE */}
                <section id="sw-getting-started" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">7. Cài Đặt Desktop App 1-Click</h2>
                      <p className="text-xs text-slate-500">Chạy trên hệ điều hành Windows 10 & 11 (64-bit)</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                          <Download className="w-4 h-4 text-blue-600" />
                          Bản Cài Đặt Tự Động (Setup .exe)
                        </h4>
                        <p className="text-slate-600 text-[11px]">
                          1. Tải file <code>KTS_TimeAttendance_Commercial_Setup.exe</code>.<br />
                          2. Nhấp đúp chuột để trình cài đặt chạy trong 5 giây.<br />
                          3. Biểu tượng xuất hiện ngoài Desktop sẵn sàng sử dụng.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          Tài Khoản Quản Trị Mặc Định
                        </h4>
                        <p className="text-slate-600 text-[11px]">
                          - Tên đăng nhập: <code>admin</code><br />
                          - Mật khẩu: <code>admin123</code> (hoặc <code>password</code>)<br />
                          - Có thể đổi mật khẩu bất kỳ lúc nào tại menu Hệ Thống.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2.2 LAN RADAR SCANNER */}
                <section id="sw-lan-radar" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <Wifi className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">8. Quét Mạng LAN (Radar 0.7s Tìm Máy IP)</h2>
                      <p className="text-xs text-slate-500">Tự động quét 254 địa chỉ IP trong mạng nội bộ để tìm máy chấm công</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3 text-xs leading-relaxed">
                    <p className="text-slate-700">
                      Tính năng độc quyền của KTS TimeAttendance: Không bắt người dùng phải gõ từng địa chỉ IP thủ công.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 text-[11px]">
                      <li>Vào tab <strong>"Máy Chấm Công"</strong> trên phần mềm.</li>
                      <li>Bấm nút <strong>"Quét Radar Mạng LAN"</strong>.</li>
                      <li>Thuật toán socket đa luồng quét toàn bộ dải mạng (VD: <code>192.168.1.1 &rarr; 192.168.1.254</code>) chỉ trong <strong>0.7 giây</strong>.</li>
                      <li>Phần mềm tự động nhận diện Serial Number, Hãng máy và hiển thị nút <strong>"Thêm Ngay"</strong>.</li>
                    </ol>
                  </div>
                </section>

                {/* 2.3 CLOUD ADMS MULTI-BRANCH */}
                <section id="sw-cloud-adms" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">9. Chấm Công Đa Chi Nhánh Cloud ADMS (Gói Pro)</h2>
                      <p className="text-xs text-slate-500">Mô hình Outbound Push: Hàng chục chi nhánh đẩy dữ liệu về máy chủ Admin không cần mở port modem</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <div className="p-4 rounded-xl bg-slate-900 text-white font-mono space-y-2">
                      <p className="text-cyan-400 font-bold">QUY TRÌNH 1-CLICK TẠO ĐƯỜNG TRUYỀN TOÀN QUỐC (CLOUDFLARE TUNNEL):</p>
                      <p className="text-slate-300 text-[11px]">
                        Nhấp đúp chuột vào file: <code>cloud/BAT_KET_NOI_INTERNET_CLOUDFLARE.bat</code>.<br />
                        Màn hình sẽ cấp ngay 1 tên miền miễn phí trỏ về máy Admin: <code>https://ha-noi-store.trycloudflare.com</code>.<br />
                        Điền tên miền này vào máy ZKTeco chi nhánh là kết nối thông suốt!
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">⚡ Luồng Realtime WebSockets</h4>
                        <p className="text-slate-600 text-[11px]">
                          Khi nhân viên ở chi nhánh cách 1.000km quẹt thẻ, máy đẩy về cổng <code>/iclock/cdata</code>, Server phát tin qua WebSocket &rarr; Màn hình Admin hiện popup tên nhân viên dưới <strong>100ms</strong>.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">🛡️ CSDL SQLite WAL Chịu Tải Cao</h4>
                        <p className="text-slate-600 text-[11px]">
                          Cơ chế Write-Ahead Logging cho phép ghi hàng nghìn lượt quẹt mỗi giây mà không bị lỗi khóa database (database locked).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2.4 REMOTE COMMAND QUEUE */}
                <section id="sw-remote-commands" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">10. Hàng Đợi Lệnh Hai Chiều (Remote Command Queue)</h2>
                      <p className="text-xs text-slate-500">Điều khiển máy chấm công chi nhánh từ xa trực tiếp qua giao diện web</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs">
                    <p className="text-slate-700 leading-relaxed">
                      Admin hoặc Nhân sự không cần đến tận nơi mà vẫn có thể điều khiển máy chấm công chi nhánh:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                        <strong className="text-blue-700 block">👤 Đẩy Nhân Viên Mới</strong>
                        <p className="text-[11px] text-slate-600 font-mono">DATA UPDATE USERINFO PIN=101\tName=Lan...</p>
                        <p className="text-[10px] text-slate-500">Máy chi nhánh tự nạp nhân viên vào bộ nhớ</p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                        <strong className="text-emerald-700 block">🕒 Đồng Bộ Giờ NTP</strong>
                        <p className="text-[11px] text-slate-600 font-mono">SET OPTION DateTime=2026-11-13...</p>
                        <p className="text-[10px] text-slate-500">Ép máy chi nhánh nhảy về đúng giờ máy chủ</p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                        <strong className="text-rose-700 block">🔄 Khởi Động Lại Từ Xa</strong>
                        <p className="text-[11px] text-slate-600 font-mono">REBOOT</p>
                        <p className="text-[10px] text-slate-500">Reset máy khi bị treo mà không cần rút nguồn</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2.5 SHIFTS & PAYROLL */}
                <section id="sw-shifts-payroll" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">11. Ca Đêm (+30%) & Tính Lương Tự Động (Payroll)</h2>
                      <p className="text-xs text-slate-500">Tự động nhận diện ca làm việc qua ngày, bóc tách giờ tăng ca OT và xuất Excel kế toán</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-900 text-xs">Quy chế tính lương chuẩn Bộ luật Lao động Việt Nam:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 text-[11px]">
                        <li><strong>Ca đêm qua ngày (22:00 - 06:00):</strong> Tự động tính đủ 1.0 công và cộng thêm <strong>+30% lương cơ bản</strong> phụ cấp ca đêm.</li>
                        <li><strong>Làm thêm giờ ngày thường (OT 150%):</strong> Nhân hệ số 1.5.</li>
                        <li><strong>Làm thêm giờ ngày nghỉ hàng tuần (OT 200%):</strong> Nhân hệ số 2.0.</li>
                        <li><strong>Đi làm ngày Lễ / Tết (OT 300%):</strong> Hưởng nguyên lương 1.0 công ngày lễ + 300% tiền lương làm thêm giờ.</li>
                        <li><strong>Trích nộp bảo hiểm bắt buộc:</strong> Tự động tính 10.5% (BHXH 8%, BHYT 1.5%, BHTN 1%).</li>
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900 block">Xuất File Excel Chuẩn Mẫu Kế Toán:</span>
                        <span className="text-[11px] text-slate-500">Hỗ trợ xuất bảng lương tổng hợp toàn công ty hoặc lọc theo phòng ban / xưởng</span>
                      </div>
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                        Xuất Excel 1-Click
                      </span>
                    </div>
                  </div>
                </section>

                {/* 2.6 RBAC & RSA LICENSING */}
                <section id="sw-rbac-security" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">12. Phân Quyền RBAC 4 Cấp & Bản Quyền RSA</h2>
                      <p className="text-xs text-slate-500">Bảo mật đa tầng: Khóa Hardware ID máy tính và phân quyền vai trò người dùng</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                        <strong className="text-blue-700 block">🔑 Bản Quyền Mã Hóa Chữ Ký Số RSA</strong>
                        <p className="text-[11px] text-slate-600">
                          Mỗi máy tính tạo ra 1 mã Hardware Fingerprint duy nhất. Mã bản quyền mã hóa RSA 2048-bit chống sao chép và bẻ khóa.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                        <strong className="text-emerald-700 block">👥 Ma Trận 4 Vai Trò RBAC</strong>
                        <p className="text-[11px] text-slate-600">
                          SuperAdmin, Admin, Nhân sự (HR), Kế toán. Mỗi vai trò chỉ nhìn thấy các chức năng thuộc thẩm quyền của mình.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2.7 BACKUP & DISASTER RECOVERY */}
                <section id="sw-backup-disaster" className="scroll-mt-36 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">13. Sao Lưu CSDL & Khôi Phục Sự Cố (Disaster Recovery)</h2>
                      <p className="text-xs text-slate-500">Đảm bảo an toàn dữ liệu chấm công vĩnh viễn cho doanh nghiệp</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs leading-relaxed">
                    <p className="text-slate-700">
                      Toàn bộ dữ liệu của doanh nghiệp được lưu trữ trong 1 file duy nhất: <code>cloud_attendance.db</code>.
                    </p>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 text-[11px]">
                      <p className="font-bold">Quy trình sao lưu định kỳ khuyến nghị:</p>
                      <p>
                        1. Mỗi cuối tháng, copy file <code>cloud/backend/data/cloud_attendance.db</code> sang USB hoặc Google Drive.<br />
                        2. Khi máy tính bị hỏng hoặc đổi máy mới: Chỉ cần cài lại và dán đè file <code>cloud_attendance.db</code> vào thư mục data là phục hồi 100% dữ liệu ngay lập tức!
                      </p>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
