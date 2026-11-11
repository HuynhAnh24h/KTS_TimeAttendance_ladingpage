import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, User, AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import AdminDashboard from '../components/AdminDashboard';
import { adminApi } from '../api/client';

export default function AdminPage() {
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Cổng Quản Trị Viên | KTS TimeAttendance';
    const token = localStorage.getItem('kts_admin_token');
    if (token) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await adminApi.login({ username, password });
      if (res.success && res.token) {
        localStorage.setItem('kts_admin_token', res.token);
        setIsAdminLoggedIn(true);
      } else {
        setError(res.message || 'Đăng nhập không thành công');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Tài khoản hoặc mật khẩu không chính xác');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('kts_admin_token');
    setIsAdminLoggedIn(false);
  };

  if (isAdminLoggedIn) {
    return (
      <AdminDashboard
        onBackToHome={() => navigate('/')}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Quay lại Trang Chủ
        </Link>

        <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mx-auto mb-3 shadow-md shadow-purple-500/10">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Cổng Quản Trị Viên</h1>
        <p className="mt-1 text-xs text-slate-500">Hệ thống quản lý đơn hàng & cấp License Key KTS</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-xl rounded-3xl border border-slate-200 sm:px-10 space-y-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tài khoản quản trị</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mật khẩu</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-colors"
                />
              </div>
              <p className="mt-1.5 text-[11px] text-slate-400">Mặc định: admin / KtsAdmin@2026</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md shadow-purple-500/20"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : null}
              <span>Đăng Nhập Quản Trị</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
