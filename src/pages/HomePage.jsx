import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WorkflowVisual from '../components/WorkflowVisual';
import Features from '../components/Features';
import ComparisonSection from '../components/ComparisonSection';
import RoiCalculator from '../components/RoiCalculator';
import Pricing from '../components/Pricing';
import DownloadSection from '../components/DownloadSection';

export default function HomePage({ plans, onSelectPlan, onOpenLookup }) {
  useEffect(() => {
    document.title = 'KTS TimeAttendance v2.0.2 - Chấm Công Đa Chi Nhánh & Tính Lương';
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
      <Features />
      <div id="comparison">
        <ComparisonSection />
      </div>
      <div id="roi">
        <RoiCalculator
          onOpenOrder={() => onSelectPlan(plans.find(p => p.id === 'PRO_YEARLY') || plans[0] || null)}
        />
      </div>
      <Pricing
        plans={plans}
        onSelectPlan={onSelectPlan}
      />
      <DownloadSection />
    </>
  );
}
