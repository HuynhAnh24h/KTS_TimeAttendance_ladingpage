import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 30000
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('kts_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const licenseApi = {
  getPackages: () => api.get('/license/packages').then(r => r.data),
  orderLicense: (data) => api.post('/license/order', data).then(r => r.data),
  lookupLicense: (query) => api.get('/license/lookup', { params: { query } }).then(r => r.data),
  checkOnline: (machineId) => api.get('/license/online-check', { params: { machine_id: machineId } }).then(r => r.data)
};

export const adminApi = {
  login: (credentials) => api.post('/admin/login', credentials).then(r => r.data),
  getStats: () => api.get('/admin/stats').then(r => r.data),
  getLicenses: (params) => api.get('/admin/licenses', { params }).then(r => r.data),
  createLicense: (data) => api.post('/admin/licenses/create', data).then(r => r.data),
  approveLicense: (id) => api.post(`/admin/licenses/${id}/approve`).then(r => r.data),
  revokeLicense: (id) => api.post(`/admin/licenses/${id}/revoke`).then(r => r.data),
  renewLicense: (id, data) => api.put(`/admin/licenses/${id}/renew`, data).then(r => r.data),
  deleteLicense: (id) => api.delete(`/admin/licenses/${id}`).then(r => r.data)
};

export const updatesApi = {
  check: (version) => api.get('/updates/check', { params: { version } }).then(r => r.data),
  getHistory: () => api.get('/updates/history').then(r => r.data),
  publishRelease: (data) => api.post('/updates/publish', data).then(r => r.data),
};

export default api;
