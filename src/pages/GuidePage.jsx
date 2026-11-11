import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserGuide from '../components/UserGuide';

export default function GuidePage({ onOpenOrder, onOpenLookup }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Hướng Dẫn Sử Dụng Chi Tiết | KTS TimeAttendance';
    window.scrollTo(0, 0);
  }, []);

  return (
    <UserGuide
      onBackToHome={() => navigate('/')}
      onOpenOrder={onOpenOrder}
      onOpenLookup={onOpenLookup}
    />
  );
}
