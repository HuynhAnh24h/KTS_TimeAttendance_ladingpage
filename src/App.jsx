import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingZalo from './components/FloatingZalo';
import OrderModal from './components/OrderModal';
import VietQRModal from './components/VietQRModal';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import DownloadPage from './pages/DownloadPage';
import GuidePage from './pages/GuidePage';
import LookupPage from './pages/LookupPage';
import AdminPage from './pages/AdminPage';
import { licenseApi } from './api/client';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [plans, setPlans] = useState([]);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [vietQrModalOpen, setVietQrModalOpen] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);

  useEffect(() => {
    licenseApi.getPackages()
      .then(res => {
        if (res.success && res.plans) {
          setPlans(res.plans);
        }
      })
      .catch(console.error);
  }, []);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setOrderModalOpen(true);
  };

  const handleOrderSuccess = (order) => {
    setOrderModalOpen(false);
    setCreatedOrder(order);
    setVietQrModalOpen(true);
  };

  const handleGoToLookup = (query) => {
    setVietQrModalOpen(false);
    navigate(`/tra-cuu?q=${encodeURIComponent(query || '')}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Public Navbar (Ẩn trên trang Admin để giao diện quản trị chuyên nghiệp) */}
      {!isAdminRoute && (
        <Navbar
          onOpenOrder={() => handleSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
        />
      )}

      {/* Main Pages Routed */}
      <main className="flex-1">
        <Routes>
          {/* 1. Trang Chủ */}
          <Route
            path="/"
            element={
              <HomePage
                plans={plans}
                onSelectPlan={handleSelectPlan}
                onOpenLookup={() => navigate('/tra-cuu')}
              />
            }
          />

          {/* 2. Trang Thiết Bị & Thi Công Lắp Đặt */}
          <Route
            path="/thiet-bi"
            element={
              <ProductsPage
                onOpenConsultation={() => handleSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
              />
            }
          />
          <Route path="/san-pham" element={<Navigate to="/thiet-bi" replace />} />
          <Route path="/may-cham-cong" element={<Navigate to="/thiet-bi" replace />} />

          {/* 3. Trang Tính Năng & Giải Pháp */}
          <Route
            path="/tinh-nang"
            element={
              <FeaturesPage
                onOpenOrder={() => handleSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
              />
            }
          />
          <Route path="/features" element={<Navigate to="/tinh-nang" replace />} />

          {/* 4. Trang Bảng Giá Bản Quyền */}
          <Route
            path="/bang-gia"
            element={
              <PricingPage
                plans={plans}
                onSelectPlan={handleSelectPlan}
              />
            }
          />
          <Route path="/pricing" element={<Navigate to="/bang-gia" replace />} />

          {/* 5. Trang Tải Phần Mềm */}
          <Route
            path="/tai-ve"
            element={<DownloadPage />}
          />
          <Route path="/download" element={<Navigate to="/tai-ve" replace />} />

          {/* 6. Trang Cẩm Nang Hướng Dẫn Sử Dụng 12 Chuyên Đề */}
          <Route
            path="/huong-dan"
            element={
              <GuidePage
                onOpenOrder={() => handleSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
                onOpenLookup={() => navigate('/tra-cuu')}
              />
            }
          />
          <Route path="/guide" element={<Navigate to="/huong-dan" replace />} />

          {/* 7. Trang Tra Cứu Bản Quyền Online */}
          <Route
            path="/tra-cuu"
            element={
              <LookupPage
                onOpenOrder={() => handleSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
              />
            }
          />
          <Route path="/lookup" element={<Navigate to="/tra-cuu" replace />} />

          {/* 8. Trang Quản Trị Hệ Thống (Admin Portal) */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/login" element={<Navigate to="/admin" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Public Footer */}
      {!isAdminRoute && <Footer />}

      {/* Floating Zalo Chat Button */}
      <FloatingZalo />

      {/* Order & Payment Modals */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedPlan={selectedPlan}
        onSuccess={handleOrderSuccess}
      />

      <VietQRModal
        isOpen={vietQrModalOpen}
        onClose={() => setVietQrModalOpen(false)}
        order={createdOrder}
        onGoToLookup={handleGoToLookup}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
