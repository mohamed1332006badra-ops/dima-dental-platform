"use client";

import React from "react";
import { Phone, Clock, Sparkles, MessageCircle } from "lucide-react";

export default function TopAnnouncementBar() {
  return (
    <div className="hidden sm:block bg-[#0F172A] text-slate-300 py-2 px-4 text-xs border-b border-amber-500/20 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-right">
        {/* Promotion Message */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-amber-500/20 text-amber-400 shrink-0">
            <Sparkles size={14} className="w-3.5 h-3.5 animate-pulse shrink-0" />
          </span>
          <span className="font-medium text-slate-100">
            ابتسامتك الآن بالتقسيط المريح عبر <strong className="text-amber-400">تابي وتمارا</strong> بدون فوائد
          </span>
          <span className="hidden lg:inline text-slate-400">|</span>
          <span className="hidden lg:inline text-slate-300">احجز استشارتك اليوم في قلب العليا</span>
        </div>

        {/* Separated Contact: Phone Call 920005196 & WhatsApp 0500179494 */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium justify-center flex-wrap">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Clock size={14} className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>السبت - الخميس: 1:00 م – 9:00 م</span>
          </div>

          {/* WhatsApp Reservations */}
          <a
            href="https://wa.me/966500179494?text=مرحباً%20مجمع%20ديمة%20لطب%20الأسنان،%20أود%20الاستفسار%20عن%20المواعيد"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-full font-bold transition-all shadow-sm shrink-0"
          >
            <MessageCircle size={12} className="w-3 h-3 shrink-0" />
            <span>واتساب الحجوزات: 0500179494</span>
          </a>

          {/* Unified Phone Call */}
          <a
            href="tel:920005196"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 text-white px-2.5 py-1 rounded-full font-bold transition-all shadow-sm shrink-0"
            dir="ltr"
          >
            <Phone size={12} className="w-3 h-3 rotate-12 shrink-0" />
            <span>الاتصال: 920005196</span>
          </a>
        </div>
      </div>
    </div>
  );
}
