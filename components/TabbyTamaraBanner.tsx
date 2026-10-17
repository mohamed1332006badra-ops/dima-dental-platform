"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  ArrowLeft
} from "lucide-react";
import { TabbyBadge, TamaraBadge } from "./TabbyTamaraBadges";

export default function TabbyTamaraBanner() {
  const [treatmentCost, setTreatmentCost] = useState<number>(4000);

  const predefinedAmounts = [1600, 3200, 4800, 8000, 12000];
  const monthlyInstallment = Math.round(treatmentCost / 4);

  return (
    <section id="financing" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Info + Interactive Installment Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold">
              <Sparkles size={16} className="w-4 h-4 text-amber-400 shrink-0" />
              <span>حلول تمويلية معتمدة ومرنة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              لا تؤجل صحة وجمال أسنانك —{" "}
              <span className="gold-text-gradient block mt-1">قسّط خطتك العلاجية على 4 دفعات</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              ابدأ علاجك الآن وادفع لاحقاً عبر <strong className="text-white">تابي (Tabby)</strong> أو <strong className="text-white">تمارا (Tamara)</strong> بدون فوائد وبدون أي رسوم خفية، متوافق 100% مع الشريعة الإسلامية.
            </p>

            {/* 4 Steps Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-900 text-cyan-300 flex items-center justify-center font-black text-sm shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">اختر خطتك الطبية</h4>
                  <p className="text-xs text-slate-400 mt-1">يحدد الطبيب الخطة المناسبة لحالتك مع عرض السعر الواضح.</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-900 text-amber-300 flex items-center justify-center font-black text-sm shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">ادفع 25% فقط اليوم</h4>
                  <p className="text-xs text-slate-400 mt-1">الدفعة الأولى عند بدء الجلسة في الاستقبال بكل سهولة.</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-900 text-cyan-300 flex items-center justify-center font-black text-sm shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">الباقي على 3 أشهر</h4>
                  <p className="text-xs text-slate-400 mt-1">خصم الأقساط الشهرية تلقائياً وبكل شفافية.</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-black text-sm shrink-0">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">بدون فوائد 0%</h4>
                  <p className="text-xs text-slate-400 mt-1">ما تراه هو ما تدفعه بالضبط دون أية زيادة أو تكاليف إضافية.</p>
                </div>
              </div>
            </div>

            {/* Authentic Brand Badges Integration */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <TabbyBadge size="large" />
              <TamaraBadge size="large" />

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                <ShieldCheck size={16} className="w-4 h-4 shrink-0" />
                <span>موافقة فورية بالهوية الوطنية أو الإقامة خلال 60 ثانية</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Installment Simulator Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calculator size={20} className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className="text-lg font-bold text-white">حاسبة التقسيط التقديرية</h3>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold">
                  بدون فوائد 0%
                </span>
              </div>

              {/* Slider for Cost */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">تكلفة الخطة العلاجية المتوقعة:</span>
                  <span className="text-xl font-black text-amber-400">
                    {treatmentCost.toLocaleString("ar-SA")} ر.س
                  </span>
                </div>

                <input
                  type="range"
                  min="800"
                  max="16000"
                  step="200"
                  value={treatmentCost}
                  onChange={(e) => setTreatmentCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />

                {/* Predefined Quick Buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {predefinedAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setTreatmentCost(amt)}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-bold transition-all ${
                        treatmentCost === amt
                          ? "bg-amber-400 text-slate-950 border-amber-400"
                          : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500"
                      }`}
                    >
                      {amt.toLocaleString("ar-SA")} ر.س
                    </button>
                  ))}
                </div>
              </div>

              {/* Installment Result Box */}
              <div className="mt-8 bg-slate-950/80 border border-amber-500/30 rounded-2xl p-5 text-center space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">
                  قسطك الشهري مع تابي أو تمارا (على 4 دفعات متساوية)
                </span>
                <div className="text-4xl font-black text-white flex items-center justify-center gap-1.5">
                  <span className="text-amber-400">{monthlyInstallment.toLocaleString("ar-SA")}</span>
                  <span className="text-base text-slate-300 font-semibold">ريال / شهرياً</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  <span>الدفعة الأولى: {monthlyInstallment.toLocaleString("ar-SA")} ر.س</span>
                  <span>•</span>
                  <span>الرسوم الإضافية: 0 ر.س</span>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-6">
                <a
                  href="#booking-widget"
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg shadow-amber-500/20"
                >
                  <CreditCard size={16} className="w-4 h-4 shrink-0" />
                  <span>احجز موعدك وابدأ بالتقسيط الميسر</span>
                  <ArrowLeft size={16} className="w-4 h-4 shrink-0" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
