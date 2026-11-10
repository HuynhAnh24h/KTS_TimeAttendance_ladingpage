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
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { adminApi } from '../api/client';

export default function AdminDashboard({ onBackToHome, onLogout }) {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Quay lại trang chủ"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-purple-400" /> Bảng Điều Khiển Quản Trị License
            </h1>
            <p className="text-xs text-slate-400">Hệ thống tạo & quản lý bản quyền KTS TimeAttendance</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            disabled={loading}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Làm mới
          </button>

          <button
            onClick={() => setCreateModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-lg shadow-purple-600/30 flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4" /> Tạo Key Bản Quyền
          </button>

          <button
            onClick={onLogout}
            className="px-3.5 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400 hover:bg-rose-500/20 transition-colors"
          >
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Tổng số đơn</span>
            <span className="text-2xl font-black text-white">{stats.total}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-emerald-400 block mb-1">Đang kích hoạt</span>
            <span className="text-2xl font-black text-emerald-400">{stats.active}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-amber-400 block mb-1">Chờ duyệt thanh toán</span>
            <span className="text-2xl font-black text-amber-400">{stats.pending}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-blue-400 block mb-1">Gói Vĩnh Viễn</span>
            <span className="text-2xl font-black text-blue-400">{stats.lifetime}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
            <span className="text-xs text-purple-400 block mb-1">Doanh thu đã thu</span>
            <span className="text-xl font-black text-purple-300">
              {Number(stats.totalRevenue).toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* Filters and search bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <form onSubmit={handleSearchSubmit} className="flex-1 min-w-[240px] flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm theo tên, SĐT, mã đơn, Machine ID..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
            >
              Tìm
            </button>
          </form>

          <div className="flex items-center gap-2">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none"
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
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none"
            >
              <option value="ALL">Tất cả thanh toán</option>
              <option value="PAID">Đã thanh toán (PAID)</option>
              <option value="UNPAID">Chưa thanh toán (UNPAID)</option>
            </select>
          </div>
        </div>

        {/* License Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
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
              <tbody className="divide-y divide-slate-800/80">
                {licenses.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-500">
                      Không có bản ghi nào.
                    </td>
                  </tr>
                ) : (
                  licenses.map(lic => (
                    <tr key={lic._id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4">
                        <strong className="text-white block">{lic.customerName}</strong>
                        <span className="text-[11px] text-slate-400 font-mono">{lic.phone}</span>
                        {lic.company && <span className="block text-[10px] text-slate-500">{lic.company}</span>}
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-300">
                        {lic.machineId}
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-blue-400 block">{lic.packageType}</span>
                        <span className="text-[11px] text-slate-400">
                          {Number(lic.amount).toLocaleString('vi-VN')}đ
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {lic.paymentStatus === 'PAID' ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            ĐÃ TRẢ
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            CHƯA TRẢ
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          {lic.status === 'ACTIVE' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              ACTIVE
                            </span>
                          )}
                          {lic.status === 'PENDING' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              CHỜ DUYỆT
                            </span>
                          )}
                          {lic.status === 'EXPIRED' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                              HẾT HẠN
                            </span>
                          )}
                          {lic.status === 'REVOKED' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-700 text-slate-400">
                              THU HỒI
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {lic.expireDate === 'PERPETUAL' ? 'Vĩnh viễn' : lic.expireDate}
                        </span>
                      </td>
                      <td className="py-3 px-4 max-w-[200px]">
                        {lic.licenseKey ? (
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[10px] text-amber-300 truncate max-w-[130px] block bg-slate-950 px-1.5 py-0.5 rounded border border-amber-500/20">
                              {lic.licenseKey}
                            </span>
                            <button
                              onClick={() => copyKey(lic.licenseKey)}
                              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                              title="Sao chép Key"
                            >
                              {copiedKey === lic.licenseKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] text-slate-500 italic">Chưa cấp Key</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {lic.status === 'PENDING' && (
                            <button
                              onClick={() => handleApprove(lic._id, lic.customerName)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors"
                              title="Duyệt đơn và sinh mã Key"
                            >
                              Duyệt & Cấp Key
                            </button>
                          )}
                          <button
                            onClick={() => handleRenew(lic._id, lic.customerName)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800"
                            title="Gia hạn"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                          {lic.status === 'ACTIVE' && (
                            <button
                              onClick={() => handleRevoke(lic._id, lic.customerName)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800"
                              title="Thu hồi"
                            >
                              <Ban className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(lic._id, lic.customerName)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800"
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
      </div>

      {/* Modal: Tạo Key Mới */}
      {createModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-purple-400" /> Tạo Key Bản Quyền Mới
            </h3>
            <form onSubmit={handleCreateSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Tên khách hàng *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={newLicenseData.customerName}
                    onChange={e => setNewLicenseData({ ...newLicenseData, customerName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="0912345678"
                    value={newLicenseData.phone}
                    onChange={e => setNewLicenseData({ ...newLicenseData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Mã Máy Tính (Machine ID) *</label>
                <input
                  type="text"
                  required
                  placeholder="KTS-XXXX-XXXX-XXXX-XXXX (hoặc * cho Master Key)"
                  value={newLicenseData.machineId}
                  onChange={e => setNewLicenseData({ ...newLicenseData, machineId: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Gói bản quyền</label>
                  <select
                    value={newLicenseData.packageType}
                    onChange={e => {
                      const val = e.target.value;
                      let amt = 899000;
                      if (val === 'MONTHLY') amt = 99000;
                      if (val === 'LIFETIME') amt = 2490000;
                      setNewLicenseData({ ...newLicenseData, packageType: val, amount: amt });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  >
                    <option value="MONTHLY">Gói 1 Tháng (99k)</option>
                    <option value="YEARLY">Gói 1 Năm (899k)</option>
                    <option value="LIFETIME">Gói Vĩnh Viễn (2.490k)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Số tiền (VNĐ)</label>
                  <input
                    type="number"
                    value={newLicenseData.amount}
                    onChange={e => setNewLicenseData({ ...newLicenseData, amount: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs text-white font-bold disabled:opacity-50"
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
