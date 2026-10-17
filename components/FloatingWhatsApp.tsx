"use client";

import { useState } from "react";
import { X, Send, Sparkles, CheckCheck } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "966500179494";

  const quickTopics = [
    { label: "✨ حجز استشارة ابتسامة هوليوود", text: "مرحباً مجمع ديمة، أود الاستفسار وحجز استشارة لتجميل وابتسامة هوليوود." },
    { label: "💳 الاستفسار عن تقسيط تابي وتمارا", text: "مرحباً، أود معرفة تفاصيل خطط العلاج بالتقسيط عبر تابي وتمارا." },
    { label: "🦷 موعد كشف وتقويم أسنان", text: "السلام عليكم، أود حجز موعد كشف مع أخصائي التقويم." },
    { label: "👶 عيادة أسنان الأطفال والتخدير", text: "مرحباً، أود حجز موعد في قسم طب أسنان الأطفال." },
  ];

  const handleOpenWhatsApp = (customText: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 font-sans" dir="rtl">
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-[#0F172A] p-4 text-white relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0F172A] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">مجمع عيادات ديمة لطب الأسنان</h4>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span>متواجدون لخدمتك (الرد فوري)</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white transition"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 text-xs text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-900 mb-1">أهلاً بك في مجمع ديمة بالرياض 🦷</p>
              يسعدنا خدمتك والرد على استفساراتك وتنسيق موعدك مع نخبة أطبائنا. اختر الخدمة للبدء:
              <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                <span>الآن</span>
                <CheckCheck className="text-blue-500" size={12} />
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                <Sparkles className="text-amber-500" size={12} /> استفسارات سريعة بنقرة واحدة:
              </p>
              {quickTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => handleOpenWhatsApp(topic.text)}
                  className="w-full text-right p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs text-slate-800 transition flex items-center justify-between group shadow-xs"
                >
                  <span>{topic.label}</span>
                  <Send className="text-slate-300 group-hover:text-emerald-600 transition -scale-x-100" size={12} />
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={() => handleOpenWhatsApp("السلام عليكم، أود التواصل مع فريق الاستقبال بمجمع ديمة لطب الأسنان.")}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>محادثة حرة عبر واتساب</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Compact Circular Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
        aria-label="تحدث مع العيادة الآن عبر واتساب"
      >
        <span className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-7 h-7 text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </span>
      </button>

      {/* Desktop Full Button with Text */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden sm:flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="text-xs sm:text-sm font-semibold">تحدث مع العيادة الآن</span>
      </button>
    </div>
  );
}
