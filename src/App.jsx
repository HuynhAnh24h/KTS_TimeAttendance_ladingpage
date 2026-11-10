import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import DownloadSection from './components/DownloadSection';
import UserGuide from './components/UserGuide';
import FloatingZalo from './components/FloatingZalo';
import OrderModal from './components/OrderModal';
import VietQRModal from './components/VietQRModal';
import LicenseLookup from './components/LicenseLookup';
import AdminLoginModal from './components/AdminLoginModal';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { licenseApi } from './api/client';

export default function App() {
  const [plans, setPlans] = useState([]);
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'admin' | 'guide'
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Modals state
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [vietQrModalOpen, setVietQrModalOpen] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);

  const [lookupModalOpen, setLookupModalOpen] = useState(false);
  const [lookupQuery, setLookupQuery] = useState('');

  const [adminLoginOpen, setAdminLoginOpen] = useState(false);

  useEffect(() => {
    // Kiểm tra token admin trong localStorage
    const token = localStorage.getItem('kts_admin_token');
    if (token) {
      setIsAdminLoggedIn(true);
    }

    // Tải bảng giá gói từ API
    licenseApi.getPackages()
      .then(res => {
        if (res.success && res.plans) {
          setPlans(res.plans);
        }
      })
      .catch(console.error);

    // Xử lý chuyển view qua hash URL (#guide)
    const handleHash = () => {
      if (window.location.hash === '#guide') {
        setCurrentView('guide');
        window.scrollTo(0, 0);
      } else if (!window.location.hash || window.location.hash === '#' || ['#features', '#pricing', '#download'].includes(window.location.hash)) {
        if (currentView === 'guide') {
          setCurrentView('landing');
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
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
    setLookupQuery(query || '');
    setLookupModalOpen(true);
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setCurrentView('admin');
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('kts_admin_token');
    setIsAdminLoggedIn(false);
    setCurrentView('landing');
  };

  const handleOpenGuide = () => {
    window.location.hash = '#guide';
    setCurrentView('guide');
    window.scrollTo(0, 0);
  };

  if (currentView === 'admin' && isAdminLoggedIn) {
    return (
      <AdminDashboard
        onBackToHome={() => {
          window.location.hash = '';
          setCurrentView('landing');
        }}
        onLogout={handleAdminLogout}
      />
    );
  }

  if (currentView === 'guide') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
        <UserGuide
          onBackToHome={() => {
            window.location.hash = '';
            setCurrentView('landing');
            window.scrollTo(0, 0);
          }}
          onOpenOrder={() => {
            setSelectedPlan(plans[1] || null);
            setOrderModalOpen(true);
          }}
          onOpenLookup={() => {
            setLookupQuery('');
            setLookupModalOpen(true);
          }}
        />

        <Footer
          onOpenAdmin={() => {
            if (isAdminLoggedIn) {
              setCurrentView('admin');
            } else {
              setAdminLoginOpen(true);
            }
          }}
          onOpenGuide={handleOpenGuide}
        />

        {/* Modals */}
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

        <LicenseLookup
          isOpen={lookupModalOpen}
          onClose={() => setLookupModalOpen(false)}
          initialQuery={lookupQuery}
          onOpenOrder={() => {
            setLookupModalOpen(false);
            setOrderModalOpen(true);
          }}
        />

        <AdminLoginModal
          isOpen={adminLoginOpen}
          onClose={() => setAdminLoginOpen(false)}
          onLoginSuccess={handleAdminLoginSuccess}
        />

        {/* Floating Zalo Chat Button */}
        <FloatingZalo />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenLookup={() => {
          setLookupQuery('');
          setLookupModalOpen(true);
        }}
        onOpenOrder={() => {
          setSelectedPlan(plans[1] || null);
          setOrderModalOpen(true);
        }}
        onOpenAdmin={() => {
          if (isAdminLoggedIn) {
            setCurrentView('admin');
          } else {
            setAdminLoginOpen(true);
          }
        }}
        onOpenGuide={handleOpenGuide}
        isAdminLoggedIn={isAdminLoggedIn}
        onLogoutAdmin={handleAdminLogout}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenOrder={() => {
            setSelectedPlan(plans[1] || null);
            setOrderModalOpen(true);
          }}
          onOpenLookup={() => {
            setLookupQuery('');
            setLookupModalOpen(true);
          }}
          onOpenGuide={handleOpenGuide}
        />

        <Features onOpenGuide={handleOpenGuide} />

        <Pricing
          plans={plans}
          onSelectPlan={handleSelectPlan}
        />

        <DownloadSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => {
          if (isAdminLoggedIn) {
            setCurrentView('admin');
          } else {
            setAdminLoginOpen(true);
          }
        }}
        onOpenGuide={handleOpenGuide}
      />

      {/* Modals */}
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

      <LicenseLookup
        isOpen={lookupModalOpen}
        onClose={() => setLookupModalOpen(false)}
        initialQuery={lookupQuery}
        onOpenOrder={() => {
          setLookupModalOpen(false);
          setOrderModalOpen(true);
        }}
      />

      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Floating Zalo Chat Button */}
      <FloatingZalo />
    </div>
  );
}
