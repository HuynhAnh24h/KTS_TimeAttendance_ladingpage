import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Wifi,
  Globe,
  FileSpreadsheet,
  Calculator,
  Play,
  RotateCw,
  CheckCircle2,
  Sparkles,
  Zap,
  Building2,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ onOpenOrder }) {
  const [activeTab, setActiveTab] = useState('radar'); // 'radar' | 'adms' | 'matrix' | 'payroll'
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [discoveredCount, setDiscoveredCount] = useState(3);

  // Trigger simulated radar scan
  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setDiscoveredCount(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setDiscoveredCount(3);
          return 100;
        }
        return prev + 20;
      });
    }, 140);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-grid-subtle">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200/90 text-xs font-medium text-slate-700 shadow-sm mb-6 hover:border-slate-300 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-900 font-bold">Phiên Bản v2.0.2 Mới</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-blue-700 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-blue-600" /> Đa Chi Nhánh Cloud ADMS & Tính Lương Tự Động
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Phần Mềm Chấm Công & Tính Lương <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Đa Chi Nhánh Trực Quan 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Quét Radar LAN 0.7s tự động. Kết nối chuỗi chi nhánh toàn quốc qua <strong>ZKTeco Cloud ADMS (Zero-NAT)</strong> không cần IP tĩnh. Thuật toán Auto-Shift phát hiện ca và tính bảng lương chuẩn kế toán 1-Click.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:from-blue-700 hover:to-indigo-700 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4" /> Tải Bộ Cài Đặt (Miễn Phí 30 Ngày)
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wide bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs cursor-pointer"
          >
            Xem Bảng Giá Bản Quyền
          </a>
        </div>

        {/* Secondary link */}
        <div className="mt-3.5">
          <Link
            to="/tra-cuu"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            Đã có máy tính cài đặt? Tra cứu mã kích hoạt ngay <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE LIVE APP SHOWCASE (TRỰC QUAN HÓA TRUNG TÂM) */}
        {/* ========================================================= */}
        <div className="mt-12 relative max-w-5xl mx-auto text-left">
          {/* Decorative Floating Badges */}
          <div className="hidden lg:flex absolute -top-5 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-float">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-[11px] font-bold text-slate-900">Radar Quét LAN 0.7s</p>
              <p className="text-[10px] text-slate-500">64 luồng tự động nhận diện</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-float-reverse">
            <Globe className="w-4 h-4 text-blue-600 animate-pulse" />
            <div>
              <p className="text-[11px] font-bold text-slate-900">Cloud Push ADMS (Zero-NAT)</p>
              <p className="text-[10px] text-slate-500">Không cần IP tĩnh & Mở port</p>
            </div>
          </div>

          {/* Main App Frame */}
          <div className="rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
            {/* Window Header */}
            <div className="px-4 py-3 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-bold text-slate-700 hidden sm:inline">
                  KTS TimeAttendance v2.0.2 Pro Multi-Branch Edition
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Máy Chủ SQLite Cục Bộ Sẵn Sàng
                </span>
              </div>
            </div>

            {/* Interactive Module Navigation Tabs */}
            <div className="bg-slate-50/90 border-b border-slate-200 p-2 sm:px-4 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'radar', label: '1. Radar Quét LAN (0.7s)', icon: Wifi },
                { id: 'adms', label: '2. Đa Chi Nhánh Cloud ADMS', icon: Globe, badge: 'Hot' },
                { id: 'matrix', label: '3. Ma Trận Chấm Công 31 Ngày', icon: FileSpreadsheet },
                { id: 'payroll', label: '4. Bảng Lương Chuẩn Kế Toán', icon: Calculator, badge: 'Mới' }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80 ring-1 ring-blue-500/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Interactive Tab Body */}
            <div className="p-4 sm:p-6 bg-white min-h-[380px] flex flex-col justify-between">
              {/* TAB 1: RADAR SCAN SIMULATION */}
              {activeTab === 'radar' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">Quét Siêu Tốc 64 Luồng Toàn Mạng LAN</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Cổng 4370 UDP</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 font-mono">Dải mạng: 192.168.1.1 - 192.168.1.254</p>
                    </div>

                    <button
                      onClick={handleTriggerScan}
                      disabled={isScanning}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all cursor-pointer disabled:opacity-50"
                    >
                      <RotateCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                      <span>{isScanning ? 'Đang dò quét...' : 'Bấm Quét Thử Ngay (0.7s)'}</span>
                    </button>
                  </div>

                  {/* Progress Bar when scanning */}
                  {isScanning && (
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs">
                      <div className="flex justify-between font-bold text-blue-900 mb-1.5 text-[11px]">
                        <span>Radar đang quét 254 địa chỉ IP cùng lúc...</span>
                        <span>{scanProgress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-blue-200 overflow-hidden">
                        <div
                          className="h-full bg-blue-600 transition-all duration-150"
                          style={{ width: `${scanProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Discovered Devices Table */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
                      <span>Thiết bị phát hiện ({discoveredCount} máy)</span>
                      <span>Trạng thái kết nối</span>
                    </div>

                    {[
                      {
                        name: 'ZKTeco SpeedFace-V5L [Face ID & Vân Tay]',
                        ip: '192.168.1.103:4370',
                        users: '877 Nhân viên',
                        ping: '0.6ms',
                        status: 'Đã Kết Nối'
                      },
                      {
                        name: 'Gigata T9 / Ronald Jack 8000T',
                        ip: '192.168.1.201:4370',
                        users: '1.250 Nhân viên',
                        ping: '0.8ms',
                        status: 'Đã Kết Nối'
                      },
                      {
                        name: 'ZKTeco MB20 [Cửa Ra Vào Kho]',
                        ip: '192.168.1.205:4370',
                        users: '450 Nhân viên',
                        ping: '1.1ms',
                        status: 'Sẵn Sàng Đồng Bộ'
                      }
                    ].map((dev, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all gap-2 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-900">{dev.name}</div>
                            <div className="text-[11px] text-slate-500 font-mono">{dev.ip} • Phản hồi: {dev.ping}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-center">
                          <span className="text-[11px] text-slate-600">{dev.users}</span>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {dev.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: MULTI-BRANCH CLOUD ADMS */}
              {activeTab === 'adms' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-xs text-indigo-900 flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-indigo-600" /> Hệ Thống Chi Nhánh Toàn Quốc (Cloud Push ADMS)
                      </div>
                      <p className="text-[11px] text-indigo-700 mt-0.5">
                        Máy chấm công tự động bắn log Real-time về máy chủ trung tâm qua Internet, không cần IP tĩnh!
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-600 text-white self-start sm:self-center">
                      4 Chi Nhánh Trực Tuyến
                    </span>
                  </div>

                  {/* Branch Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {[
                      { city: 'Hà Nội', addr: 'Cầu Giấy, HN', staff: 180, dev: '1 Máy ZK', status: 'Đang đẩy log' },
                      { city: 'TP. Hồ Chí Minh', addr: 'Quận 1, HCM', staff: 350, dev: '2 Máy Ronald Jack', status: 'Trực tuyến' },
                      { city: 'Đà Nẵng', addr: 'Hải Châu, ĐN', staff: 95, dev: '1 Máy ZK ADMS', status: 'Trực tuyến' },
                      { city: 'Bình Dương', addr: 'KCN VSIP 1', staff: 620, dev: '3 Máy Face ID', status: 'Đang đẩy log' }
                    ].map((b, bi) => (
                      <div key={bi} className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900">{b.city}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div className="text-[10px] text-slate-500">{b.addr}</div>
                        <div className="text-[11px] font-semibold text-blue-600 pt-1 border-t border-slate-200/60 flex justify-between">
                          <span>{b.staff} nhân sự</span>
                          <span className="text-slate-500 font-normal">{b.dev}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Real-time Push Stream Feed */}
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-900 text-white font-mono text-[11px] space-y-1.5">
                    <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center justify-between pb-1 border-b border-slate-800">
                      <span>Luồng dữ liệu quẹt thẻ Real-time (ADMS Push Stream)</span>
                      <span className="text-emerald-400">● LIVE</span>
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">14:02:15</span> [Chi nhánh Bình Dương] NV-1049 (Nguyễn Văn Hùng) quẹt vân tay - Vào ca 2
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">14:02:38</span> [Chi nhánh Hà Nội] NV-0284 (Trần Thị Mai) nhận diện Face ID - Đi đúng giờ
                    </div>
                    <div className="text-emerald-400">
                      <span className="text-slate-500">14:03:02</span> [Chi nhánh TP.HCM] NV-0012 (Lê Hoàng Nam) quẹt thẻ - Auto-Shift nhận diện Ca Hành Chính
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MATRIX 31 DAYS */}
              {activeTab === 'matrix' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div>
                      <span className="font-bold text-slate-900">Bảng Chấm Công Ma Trận Chi Tiết 31 Ngày</span>
                      <p className="text-[11px] text-slate-500">Tháng 11/2026 • Chuẩn Luật Lao Động</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 font-bold text-[11px] border border-teal-200">
                      Xuất Excel 1-Click
                    </span>
                  </div>

                  {/* Matrix Preview Table */}
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                          <th className="p-2 border-r border-slate-200">Mã NV</th>
                          <th className="p-2 border-r border-slate-200">Họ và Tên</th>
                          <th className="p-1 text-center border-r border-slate-200 w-7">01</th>
                          <th className="p-1 text-center border-r border-slate-200 w-7">02</th>
                          <th className="p-1 text-center border-r border-slate-200 w-7 bg-amber-50">03 (CN)</th>
                          <th className="p-1 text-center border-r border-slate-200 w-7">04</th>
                          <th className="p-1 text-center border-r border-slate-200 w-7">05</th>
                          <th className="p-1 text-center border-r border-slate-200 w-7">06</th>
                          <th className="p-2 text-center border-r border-slate-200">Tổng Công</th>
                          <th className="p-2 text-center">Tăng Ca (OT)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-2 font-mono font-bold border-r border-slate-100">NV001</td>
                          <td className="p-2 font-semibold border-r border-slate-100">Nguyễn Văn An</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-1 text-center font-bold text-slate-400 border-r border-slate-100 bg-amber-50/70">CN</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-1 text-center font-bold text-indigo-600 border-r border-slate-100 bg-indigo-50/50">1.0+OT</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-2 text-center font-bold text-blue-700 border-r border-slate-100">26.0</td>
                          <td className="p-2 text-center font-bold text-indigo-600">8.5 giờ</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-2 font-mono font-bold border-r border-slate-100">NV002</td>
                          <td className="p-2 font-semibold border-r border-slate-100">Trần Thị Bích</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-1 text-center font-bold text-amber-600 border-r border-slate-100 bg-amber-50/50">Trễ 10p</td>
                          <td className="p-1 text-center font-bold text-slate-400 border-r border-slate-100 bg-amber-50/70">CN</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-1 text-center font-bold text-emerald-600 border-r border-slate-100 bg-emerald-50/50">1.0</td>
                          <td className="p-1 text-center font-bold text-blue-600 border-r border-slate-100 bg-blue-50/50">Phép P</td>
                          <td className="p-2 text-center font-bold text-blue-700 border-r border-slate-100">25.0</td>
                          <td className="p-2 text-center font-bold text-indigo-600">4.0 giờ</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-2 font-mono font-bold border-r border-slate-100">NV003</td>
                          <td className="p-2 font-semibold border-r border-slate-100">Phạm Hoàng Nam</td>
                          <td className="p-1 text-center font-bold text-purple-600 border-r border-slate-100 bg-purple-50/50">Đêm 1.0</td>
                          <td className="p-1 text-center font-bold text-purple-600 border-r border-slate-100 bg-purple-50/50">Đêm 1.0</td>
                          <td className="p-1 text-center font-bold text-slate-400 border-r border-slate-100 bg-amber-50/70">CN</td>
                          <td className="p-1 text-center font-bold text-purple-600 border-r border-slate-100 bg-purple-50/50">Đêm 1.0</td>
                          <td className="p-1 text-center font-bold text-purple-600 border-r border-slate-100 bg-purple-50/50">Đêm 1.0</td>
                          <td className="p-1 text-center font-bold text-purple-600 border-r border-slate-100 bg-purple-50/50">Đêm 1.0</td>
                          <td className="p-2 text-center font-bold text-blue-700 border-r border-slate-100">26.0</td>
                          <td className="p-2 text-center font-bold text-purple-700">Đêm (+30%)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500" /> Đúng giờ (1.0)</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-500" /> Đi trễ / Về sớm</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-indigo-500" /> Tăng ca OT</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-purple-500" /> Ca Đêm (+30%)</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-500" /> Nghỉ phép có lương</span>
                  </div>
                </div>
              )}

              {/* TAB 4: AUTOMATIC PAYROLL */}
              {activeTab === 'payroll' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
                    <div>
                      <span className="font-bold text-emerald-950">Mẫu Phiếu Lương Cá Nhân Kế Toán (Payslip Preview)</span>
                      <p className="text-[11px] text-emerald-700">Tự động tính từ số ngày công, giờ OT, phụ cấp ca đêm và bảo hiểm</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[11px]">
                      Chuẩn Thuế & BHXH
                    </span>
                  </div>

                  {/* Payslip Card Visual */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* Left: Earnings */}
                    <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <div className="font-bold text-slate-900 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                        <span>CÁC KHOẢN THU NHẬP</span>
                        <span className="text-emerald-600 font-bold">+ 14.586.000đ</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-600">
                        <div className="flex justify-between">
                          <span>Lương cơ bản (26 công chuẩn):</span>
                          <span className="font-semibold text-slate-900">12.000.000đ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tăng ca ngày thường (8.5h x 1.5):</span>
                          <span className="font-semibold text-slate-900">920.000đ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tăng ca Chủ nhật (4.0h x 2.0):</span>
                          <span className="font-semibold text-slate-900">576.000đ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phụ cấp làm ca đêm (+30%):</span>
                          <span className="font-semibold text-purple-700">490.000đ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phụ cấp cơm trưa & chuyên cần:</span>
                          <span className="font-semibold text-slate-900">600.000đ</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Deductions & Net */}
                    <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="font-bold text-slate-900 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                          <span>CÁC KHOẢN KHẤU TRỪ</span>
                          <span className="text-rose-600 font-bold">- 1.760.000đ</span>
                        </div>
                        <div className="space-y-1.5 text-[11px] text-slate-600 mt-2">
                          <div className="flex justify-between">
                            <span>BHXH, BHYT, BHTN (10.5%):</span>
                            <span className="font-semibold text-slate-900">1.260.000đ</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tạm ứng giữa tháng:</span>
                            <span className="font-semibold text-slate-900">500.000đ</span>
                          </div>
                        </div>
                      </div>

                      {/* Net Salary Highlight */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-emerald-100">LƯƠNG THỰC LĨNH (NET)</p>
                          <p className="text-lg font-extrabold tracking-tight">12.826.000đ</p>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Compatibility Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Tương thích toàn diện với tất cả dòng máy chấm công trên thị trường
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-500">
            <span className="hover:text-slate-900 transition-colors">Ronald Jack (Tất cả model)</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-900 transition-colors">Gigata T8 / T9 / FA-113</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-900 transition-colors">ZKTeco Cloud ADMS & Face ID</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-900 transition-colors">Wise Eye</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="hover:text-slate-900 transition-colors">Giao thức ZK UDP/TCP 4370</span>
          </div>
        </div>
      </div>
    </section>
  );
}
