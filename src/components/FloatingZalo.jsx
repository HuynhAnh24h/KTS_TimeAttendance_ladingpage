import React, { useState } from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function FloatingZalo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      {/* Tooltip / Label */}
      <a
        href="https://zalo.me/0776980269"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-blue-200 text-slate-800 text-xs font-bold shadow-lg hover:border-blue-400 hover:shadow-xl transition-all"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat Zalo: <strong className="text-blue-600">0776.980.269</strong></span>
      </a>

      {/* Main Floating Circle Button */}
      <a
        href="https://zalo.me/0776980269"
        target="_blank"
        rel="noreferrer"
        title="Chat Zalo Kỹ Thuật: 0776.980.269"
        className="relative w-13 h-13 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>
        {/* Zalo Icon styled */}
        <div className="flex flex-col items-center justify-center">
          <span className="font-black text-xs tracking-tighter leading-none">Zalo</span>
        </div>
      </a>
    </div>
  );
}
