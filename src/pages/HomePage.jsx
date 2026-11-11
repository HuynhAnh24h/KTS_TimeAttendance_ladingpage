import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import DownloadSection from '../components/DownloadSection';

export default function HomePage({ plans, onSelectPlan, onOpenLookup }) {
  useEffect(() => {
    document.title = 'KTS TimeAttendance - Phần Mềm Quản Lý Chấm Công Thông Minh';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        onOpenOrder={() => onSelectPlan(plans[1] || null)}
        onOpenLookup={onOpenLookup}
      />
      <Features />
      <Pricing
        plans={plans}
        onSelectPlan={onSelectPlan}
      />
      <DownloadSection />
    </>
  );
}
