"use client";

import React from "react";
import { Award, Star, Users, ShieldCheck, CreditCard } from "lucide-react";
import TabbyTamaraBadges from "./TabbyTamaraBadges";

export default function StatsAndTrustBar() {
  const stats = [
    {
      value: "+25",
      label: "عاماً من الخبرة الطبية",
      sublabel: "ريادة مستمرة في قلب الرياض منذ 1999",
      icon: Award,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      value: "4.4 ★",
      label: "أكثر من 1,800 تقييم",
      sublabel: "تقييمات حقيقية موثقة على Google Maps",
      icon: Star,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
    },
    {
      value: "+12",
      label: "طبيباً واستشارياً متخصصاً",
      sublabel: "كفاءات سعودية ودولية مرخصة",
      icon: Users,
      color: "text-cyan-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
    {
      value: "100%",
      label: "معتمد من وزارة الصحة",
      sublabel: "أعلى معايير التعقيم والجودة الطبية",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  return (
    <section id="trust-stats" className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Metrics Grid */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-4 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 p-2 sm:p-0 transition-all hover:translate-y-[-2px]"
              >
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${stat.bgColor} ${stat.borderColor} border flex items-center justify-center shrink-0 shadow-sm`}
                >
                  <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${stat.color} shrink-0`} />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
                    <span>{stat.value}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 sm:mt-1 leading-snug">
                    {stat.label}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Financial & Trust Integration Banner with Authentic Tabby & Tamara Badges */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold text-center md:text-right">
            <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <CreditCard size={20} className="w-5 h-5 shrink-0" />
            </div>
            <span>
              شركاء النجاح في التمويل الميسر: قسّط جميع علاجات الأسنان وتجميل الابتسامة على 4 دفعات شهرية واحصل على استشارة مجانية
            </span>
          </div>

          {/* Authentic Tabby & Tamara Badges Component */}
          <div className="shrink-0">
            <TabbyTamaraBadges size="normal" />
          </div>
        </div>

      </div>
    </section>
  );
}
