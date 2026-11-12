import React, { useState, useEffect } from 'react';
import {
  Users,
  CheckCircle2,
  Clock,
  Coins,
  ShieldCheck,
  Search,
  Plus,
  RefreshCw,
  Copy,
  Check,
  Trash2,
  RotateCcw,
  Ban,
  ArrowLeft,
  KeyRound,
  ExternalLink,
  Sparkles,
  Download,
  Send,
  AlertCircle,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { adminApi, updatesApi } from '../api/client';

export default function AdminDashboard({ onBackToHome, onLogout }) {
  const [activeTab, setActiveTab] = useState('licenses'); // 'licenses' | 'releases'
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    pending: 0,
    lifetime: 0,
    totalRevenue: 0
  });
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [paymentFilter, setPaymentFilter] = useState('ALL');
  const [copiedKey, setCopiedKey] = useState('');

  // Release Management State
  const [releaseInfo, setReleaseInfo] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [releaseForm, setReleaseForm] = useState({
    version: '2.0.2',
    title: 'KTS TimeAttendance v2.0.2 - Nâng cấp tính năng & bảo mật',
    notes: 'Tự động quét mạng LAN 0.7s nhận diện máy chấm công\nKhóa F12 DevTools và bảo vệ bản quyền phần cứng\nTính năng 1-Click Local Update trực tiếp trong ứng dụng\nXuất báo cáo ma trận 31 ngày chuẩn Luật Lao Động 2026',
    download_url_setup: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage/releases/download/v2.0/KTS_TimeAttendance_Commercial_Setup_v2.0.exe',
    download_url_portable: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage/releases/download/v2.0/KTS_TimeAttendance_Portable_v2.0.zip',
    is_critical: false
  });

  const loadReleaseData = async () => {
    try {
      const [res, hist] = await Promise.all([
        updatesApi.check().catch(() => null),
        updatesApi.getHistory().catch(() => null)
      ]);
      if (res) {
        setReleaseInfo({ ...res, history: hist?.history || [] });
        if (res.latest_version) {
          const parts = res.latest_version.split('.');
          const nextPatch = parts.length === 3 ? `${parts[0]}.${parts[1]}.${parseInt(parts[2], 10) + 1}` : '2.0.2';
          setReleaseForm(prev => ({
            ...prev,
            version: nextPatch,
            title: `KTS TimeAttendance v${nextPatch} - Bản Cập Nhật Mới`
          }));
        }
      }
    } catch (e) {
      console.error('Lỗi tải release info:', e);
    }
  };

  // Create Modal
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newLicenseData, setNewLicenseData] = useState({
    customerName: '',
    phone: '',
    email: '',
    company: '',
    machineId: '',
    packageType: 'YEARLY',
    amount: 899000,
    edition: 'Enterprise Edition',
    notes: ''
  });
  const [creating, setCreating] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [statsRes, listRes] = await Promise.all([
        adminApi.getStats(),
        adminApi.getLicenses({
          search,
          status: statusFilter,
          paymentStatus: paymentFilter
        })
      ]);

      if (statsRes.success) setStats(statsRes.stats);
      if (listRes.success) setLicenses(listRes.licenses);
    } catch (err) {
      console.error('Lỗi tải dữ liệu admin:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [statusFilter, paymentFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadData();
  };

  const handleApprove = async (id, name) => {
    if (!window.confirm(`Xác nhận duyệt thanh toán và cấp License Key cho khách hàng "${name}"?`)) return;
    try {
      const res = await adminApi.approveLicense(id);
      if (res.success) {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
        alert(`Đã cấp mã bản quyền thành công cho ${name}!`);
        loadData();
      }
    } catch (err) {
      alert('Lỗi: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleRevoke = async (id, name) => {
    if (!window.confirm(`Bạn có chắc muốn THU HỒI bản quyền của "${name}"?`)) return;
    try {
      await adminApi.revokeLicense(id);
      loadData();
    } catch (err) {
      alert('Lỗi: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleRenew = async (id, name) => {
    const choice = window.prompt(`Chọn thời gian gia hạn cho "${name}":\n1: Thêm 1 năm\n2: Nâng cấp Vĩnh Viễn\nNhập 1 hoặc 2:`, '1');
    if (!choice) return;

    try {
      if (choice === '1') {
        await adminApi.renewLicense(id, { months: 12, newPackageType: 'YEARLY' });
      } else if (choice === '2') {
        await adminApi.renewLicense(id, { newPackageType: 'LIFETIME' });
      }
      alert('Gia hạn bản quyền thành công!');
      loadData();
    } catch (err) {
      alert('Lỗi: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Xóa vĩnh viễn bản ghi "${name}" khỏi cơ sở dữ liệu?`)) return;
    try {
      await adminApi.deleteLicense(id);
      loadData();
    } catch (err) {
      alert('Lỗi: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await adminApi.createLicense(newLicenseData);
      if (res.success) {
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
        setCreateModalOpen(false);
        setNewLicenseData({
          customerName: '',
          phone: '',
          email: '',
          company: '',
          machineId: '',
          packageType: 'YEARLY',
          amount: 899000,
          edition: 'Enterprise Edition',
          notes: ''
        });
        loadData();
      }
    } catch (err) {
      alert('Lỗi tạo key: ' + (err.response?.data?.message || err.message));
    } finally {
      setCreating(false);
    }
  };

  const copyKey = (key) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
            title="Quay lại trang chủ"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-purple-600" /> Bảng Điều Khiển Quản Trị License
            </h1>
            <p className="text-xs text-slate-500">Hệ thống tạo & quản lý bản quyền KTS TimeAttendance</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            disabled={loading}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Làm mới
          </button>

          <button
            onClick={() => setCreateModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white shadow-md shadow-purple-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Tạo Key Bản Quyền
          </button>

          <button
            onClick={onLogout}
            className="px-3.5 py-2 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer"
          >
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 block mb-1">Tổng số đơn</span>
            <span className="text-2xl font-black text-slate-900">{stats.total}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs text-emerald-600 font-medium block mb-1">Đang kích hoạt</span>
            <span className="text-2xl font-black text-emerald-600">{stats.active}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs text-amber-600 font-medium block mb-1">Chờ duyệt thanh toán</span>
            <span className="text-2xl font-black text-amber-600">{stats.pending}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs text-blue-600 font-medium block mb-1">Gói Vĩnh Viễn</span>
            <span className="text-2xl font-black text-blue-600">{stats.lifetime}</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
            <span className="text-xs text-purple-600 font-medium block mb-1">Doanh thu đã thu</span>
            <span className="text-xl font-black text-purple-700">
              {Number(stats.totalRevenue).toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('licenses')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'licenses'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>Quản Lý Bản Quyền ({licenses.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('releases');
              loadReleaseData();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'releases'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Phát Hành Cập Nhật (Release Center)</span>
            {releaseInfo?.latest_version && (
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-100 text-purple-800 font-mono font-bold">
                v{releaseInfo.latest_version}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'licenses' ? (
          <>
            {/* Filters and search bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <form onSubmit={handleSearchSubmit} className="flex-1 min-w-[240px] flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Tìm theo tên, SĐT, mã đơn, Machine ID..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-xs font-semibold text-white cursor-pointer shadow-sm"
                >
                  Tìm
                </button>
              </form>

              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:bg-white"
                >
                  <option value="ALL">Tất cả trạng thái</option>
                  <option value="ACTIVE">Đang hoạt động</option>
                  <option value="PENDING">Chờ xử lý</option>
                  <option value="EXPIRED">Hết hạn</option>
                  <option value="REVOKED">Đã thu hồi</option>
                </select>

                <select
                  value={paymentFilter}
                  onChange={e => setPaymentFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:bg-white"
                >
                  <option value="ALL">Tất cả thanh toán</option>
                  <option value="PAID">Đã thanh toán (PAID)</option>
                  <option value="UNPAID">Chưa thanh toán (UNPAID)</option>
                </select>
              </div>
            </div>

            {/* License Table */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Khách hàng & SĐT</th>
                      <th className="py-3 px-4 font-semibold">Mã máy tính (HWID)</th>
                      <th className="py-3 px-4 font-semibold">Gói & Số tiền</th>
                      <th className="py-3 px-4 font-semibold">Thanh toán</th>
                      <th className="py-3 px-4 font-semibold">Trạng thái & Hạn</th>
                      <th className="py-3 px-4 font-semibold">Mã License Key</th>
                      <th className="py-3 px-4 font-semibold text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {licenses.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="py-8 text-center text-slate-400">
                          Không có bản ghi nào.
                        </td>
                      </tr>
                    ) : (
                      licenses.map(lic => (
                        <tr key={lic._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4">
                            <strong className="text-slate-900 block">{lic.customerName}</strong>
                            <span className="text-[11px] text-slate-500 font-mono">{lic.phone}</span>
                            {lic.company && <span className="block text-[10px] text-slate-400">{lic.company}</span>}
                          </td>
                          <td className="py-3 px-4 font-mono text-[11px] text-slate-700">
                            {lic.machineId}
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-blue-600 block">{lic.packageType}</span>
                            <span className="text-[11px] text-slate-500">
                              {Number(lic.amount).toLocaleString('vi-VN')}đ
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {lic.paymentStatus === 'PAID' ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                ĐÃ TRẢ
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                CHƯA TRẢ
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              {lic.status === 'ACTIVE' && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                  ACTIVE
                                </span>
                              )}
                              {lic.status === 'PENDING' && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                  CHỜ DUYỆT
                                </span>
                              )}
                              {lic.status === 'EXPIRED' && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                                  HẾT HẠN
                                </span>
                              )}
                              {lic.status === 'REVOKED' && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                                  THU HỒI
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-slate-500">
                              {lic.expireDate === 'PERPETUAL' ? 'Vĩnh viễn' : lic.expireDate}
                            </span>
                          </td>
                          <td className="py-3 px-4 max-w-[200px]">
                            {lic.licenseKey ? (
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-[10px] text-amber-900 truncate max-w-[130px] block bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                                  {lic.licenseKey}
                                </span>
                                <button
                                  onClick={() => copyKey(lic.licenseKey)}
                                  className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                                  title="Sao chép Key"
                                >
                                  {copiedKey === lic.licenseKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                              </div>
                            ) : (
                              <span className="text-[11px] text-slate-400 italic">Chưa cấp Key</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {lic.status === 'PENDING' && (
                                <button
                                  onClick={() => handleApprove(lic._id, lic.customerName)}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition-colors cursor-pointer shadow-sm"
                                  title="Duyệt đơn và sinh mã Key"
                                >
                                  Duyệt & Cấp Key
                                </button>
                              )}
                              <button
                                onClick={() => handleRenew(lic._id, lic.customerName)}
                                className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
                                title="Gia hạn"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                              {lic.status === 'ACTIVE' && (
                                <button
                                  onClick={() => handleRevoke(lic._id, lic.customerName)}
                                  className="p-1.5 rounded-lg text-slate-500 hover:text-amber-600 hover:bg-amber-50 cursor-pointer"
                                  title="Thu hồi"
                                >
                                  <Ban className="w-3.5 h-3.5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDelete(lic._id, lic.customerName)}
                                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                                title="Xóa"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          /* RELEASE MANAGEMENT TAB */
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Form to publish new release */}
              <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Phát Hành Bản Cập Nhật Phần Mềm Mới</h3>
                    <p className="text-[11px] text-slate-500">Tất cả máy Desktop của khách hàng sẽ nhận được thông báo nâng cấp tự động</p>
                  </div>
                </div>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!releaseForm.version || !releaseForm.title) {
                      alert('Vui lòng nhập đầy đủ phiên bản và tiêu đề bản phát hành');
                      return;
                    }
                    setPublishing(true);
                    try {
                      const res = await updatesApi.publishRelease(releaseForm);
                      if (res.success) {
                        confetti({ particleCount: 80, spread: 90, origin: { y: 0.5 } });
                        alert(res.message || 'Đã phát hành phiên bản mới thành công!');
                        loadReleaseData();
                      }
                    } catch (err) {
                      alert('Lỗi phát hành bản cập nhật: ' + (err.response?.data?.message || err.message));
                    } finally {
                      setPublishing(false);
                    }
                  }}
                  className="space-y-4 text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Số Phiên Bản Mới (SemVer)</label>
                      <input
                        type="text"
                        placeholder="Ví dụ: 2.0.2 hoặc 2.1.0"
                        value={releaseForm.version}
                        onChange={e => setReleaseForm({ ...releaseForm, version: e.target.value })}
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono font-bold focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Loại cập nhật</label>
                      <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={releaseForm.is_critical}
                          onChange={e => setReleaseForm({ ...releaseForm, is_critical: e.target.checked })}
                          className="w-4 h-4 rounded text-purple-600"
                        />
                        <span className="text-slate-700 font-medium">Bản cập nhật khẩn cấp (Critical)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Tiêu Đề Bản Phát Hành</label>
                    <input
                      type="text"
                      placeholder="Ví dụ: KTS TimeAttendance v2.0.2 - Nâng cấp tính năng & bảo mật"
                      value={releaseForm.title}
                      onChange={e => setReleaseForm({ ...releaseForm, title: e.target.value })}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:bg-white focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Các Cải Tiến & Tính Năng Mới (Mỗi dòng là một tính năng)
                    </label>
                    <textarea
                      rows={5}
                      value={releaseForm.notes}
                      onChange={e => setReleaseForm({ ...releaseForm, notes: e.target.value })}
                      placeholder="- Tự động quét mạng LAN 0.7s&#10;- Hỗ trợ nâng cấp 1-Click phía local&#10;- Báo cáo ma trận 31 ngày..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 leading-relaxed focus:bg-white focus:border-purple-500 font-sans"
                    />
                  </div>

                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Link Tải Bộ Cài Đặt Setup (.exe)</label>
                      <input
                        type="url"
                        value={releaseForm.download_url_setup}
                        onChange={e => setReleaseForm({ ...releaseForm, download_url_setup: e.target.value })}
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-mono text-[11px] focus:bg-white focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Link Tải Bản Portable (.zip)</label>
                      <input
                        type="url"
                        value={releaseForm.download_url_portable}
                        onChange={e => setReleaseForm({ ...releaseForm, download_url_portable: e.target.value })}
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-mono text-[11px] focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={publishing}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{publishing ? 'Đang phát hành...' : 'Phát Hành Bản Cập Nhật Mới (Gửi Tới Máy Trạm Desktop)'}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Status & Past Releases */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Current Active Release Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Phiên Bản Đang Hoạt Động
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                      LIVE v{releaseInfo?.latest_version || '2.0.1'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <p className="font-bold text-slate-900">{releaseInfo?.release_title}</p>
                    <p className="text-[11px] text-slate-500">Ngày phát hành: {releaseInfo?.release_date}</p>
                    <div className="pt-1.5 border-t border-slate-200 space-y-1">
                      <p className="font-semibold text-slate-700 text-[11px]">Nội dung cập nhật:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
                        {releaseInfo?.release_notes?.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                    <span>Cổng API: <code>/api/updates/check</code></span>
                    <span className="text-emerald-600 font-semibold">● Đang phát sóng</span>
                  </div>
                </div>

                {/* History Log */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-slate-600" /> Lịch Sử Các Bản Phát Hành
                  </h4>

                  <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                    {releaseInfo?.history?.length > 0 ? (
                      releaseInfo.history.map((h, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-purple-700 font-mono">v{h.version}</span>
                            <span className="text-[10px] text-slate-400">{h.release_date}</span>
                          </div>
                          <p className="font-medium text-slate-800 text-[11px] mb-1">{h.title}</p>
                          <ul className="list-disc pl-4 text-[10px] text-slate-500 space-y-0.5">
                            {h.notes?.slice(0, 3).map((note, i) => (
                              <li key={i}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-400 text-center py-4">Chưa có lịch sử phát hành bổ sung.</p>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}
      </div>

      {/* Modal: Tạo Key Mới */}
      {createModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-purple-600" /> Tạo Key Bản Quyền Mới
            </h3>
            <form onSubmit={handleCreateSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Tên khách hàng *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={newLicenseData.customerName}
                    onChange={e => setNewLicenseData({ ...newLicenseData, customerName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="0912345678"
                    value={newLicenseData.phone}
                    onChange={e => setNewLicenseData({ ...newLicenseData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Mã Máy Tính (Machine ID) *</label>
                <input
                  type="text"
                  required
                  placeholder="KTS-XXXX-XXXX-XXXX-XXXX (hoặc * cho Master Key)"
                  value={newLicenseData.machineId}
                  onChange={e => setNewLicenseData({ ...newLicenseData, machineId: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 uppercase focus:bg-white focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Gói bản quyền</label>
                  <select
                    value={newLicenseData.packageType}
                    onChange={e => {
                      const val = e.target.value;
                      let amt = 899000;
                      if (val === 'MONTHLY') amt = 99000;
                      if (val === 'LIFETIME') amt = 2490000;
                      setNewLicenseData({ ...newLicenseData, packageType: val, amount: amt });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500"
                  >
                    <option value="MONTHLY">Gói 1 Tháng (99k)</option>
                    <option value="YEARLY">Gói 1 Năm (899k)</option>
                    <option value="LIFETIME">Gói Vĩnh Viễn (2.490k)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Số tiền (VNĐ)</label>
                  <input
                    type="number"
                    value={newLicenseData.amount}
                    onChange={e => setNewLicenseData({ ...newLicenseData, amount: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 font-semibold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs text-white font-bold disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {creating ? 'Đang tạo...' : 'Tạo & Cấp Key Ngay'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
