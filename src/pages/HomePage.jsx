import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WorkflowVisual from '../components/WorkflowVisual';
import Features from '../components/Features';
import HardwareProducts from '../components/HardwareProducts';
import ComparisonSection from '../components/ComparisonSection';
import RoiCalculator from '../components/RoiCalculator';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import DownloadSection from '../components/DownloadSection';

export default function HomePage({ plans, onSelectPlan, onOpenLookup }) {
  useEffect(() => {
    document.title = 'KTS TimeAttendance v2.0.2 - Chấm Công Đa Chi Nhánh, Máy Chấm Công & Thi Công';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        onOpenOrder={() => onSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
        onOpenLookup={onOpenLookup}
      />
      <div id="workflow">
        <WorkflowVisual />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="products">
        <HardwareProducts
          onOpenConsultation={() => onSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
        />
      </div>
      <div id="comparison">
        <ComparisonSection />
      </div>
      <div id="roi">
        <RoiCalculator
          onOpenOrder={() => onSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
        />
      </div>
      <div id="pricing">
        <Pricing
          plans={plans}
          onSelectPlan={onSelectPlan}
        />
      </div>
      <Testimonials />
      <FaqSection />
      <DownloadSection />
    </>
  );
}
