import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingZalo from './components/FloatingZalo';
import OrderModal from './components/OrderModal';
import VietQRModal from './components/VietQRModal';

import HomePage from './pages/HomePage';
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
          onOpenOrder={() => handleSelectPlan(plans[1] || null)}
        />
      )}

      {/* Main Pages Routed */}
      <main className="flex-1">
        <Routes>
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
          <Route
            path="/huong-dan"
            element={
              <GuidePage
                onOpenOrder={() => handleSelectPlan(plans[1] || null)}
                onOpenLookup={() => navigate('/tra-cuu')}
              />
            }
          />
          <Route path="/guide" element={<Navigate to="/huong-dan" replace />} />

          <Route
            path="/tra-cuu"
            element={
              <LookupPage
                onOpenOrder={() => handleSelectPlan(plans[1] || null)}
              />
            }
          />
          <Route path="/lookup" element={<Navigate to="/tra-cuu" replace />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/login" element={<Navigate to="/admin" replace />} />

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
