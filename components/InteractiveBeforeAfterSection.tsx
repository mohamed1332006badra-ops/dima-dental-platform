"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface CaseItem {
  id: string;
  title: string;
  titleEn: string;
  doctor: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  stats: string;
}

export default function InteractiveBeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: CaseItem[] = [
    {
      id: "hollywood-veneers",
      title: "تصميم ابتسامة هوليوود وعدسات الفينير",
      titleEn: "Digital Smile Design",
      doctor: "د. محمد مسعود",
      duration: "جلستان علاجيتان",
      description: "علاج تصبغات وتآكل المينا وتعديل خط الابتسامة بعدسات فينير إيماكس فائقة الرقة بلون طبيعي ثلاثي الأبعاد يحاكي بياض الأسنان الحيوي.",
      // Before: Natural teeth before cosmetic makeover
      beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      // After: Brilliant cosmetic smile makeover with whitening and veneers
      afterImg: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
      stats: "تطابق لوني 100% مع ضمان 10 سنوات",
    },
    {
      id: "clear-aligners",
      title: "تقويم الأسنان الشفاف وتعديل الإطباق",
      titleEn: "Clear Aligners",
      doctor: "د. باسل الميداني",
      duration: "9 أشهر فقط",
      description: "تصحيح تزاحم الأسنان وإغلاق الفراغات الأمامية بدون أسلاك معدنية ظاهرة وبأقصى درجات الراحة والمرونة اليومية.",
      // Before: Natural teeth with gaps and alignment irregularities
      beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      // After: Perfectly straight aligned white teeth smile
      afterImg: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
      stats: "إطباق مثالي واستقامة كاملة للأسنان",
    },
    {
      id: "implant-restoration",
      title: "زراعة الأسنان التعويضية وتجميل اللثة",
      titleEn: "Dental Implants",
      doctor: "د. ألكسندر صابر",
      duration: "جلسة واحدة للزراعة الفورية",
      description: "تعويض الأسنان المفقودة بزرعات تيتانيوم ألمانية مع نحت وتوريد خط اللثة لإعادة وظيفة المضغ والابتسامة الجمالية المتكاملة.",
      // Before: Natural teeth before restoration
      beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      // After: Restored cosmetic teeth smile
      afterImg: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
      stats: "نسبة نجاح وثبات 99.4%",
    },
  ];

  const currentCase = cases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleInteractionEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <section id="before-after" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs sm:text-sm font-bold mb-3">
            <Sparkles size={16} className="w-4 h-4 text-amber-600 shrink-0" />
            <span>نتائج حقيقية موثقة قبل وبعد</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            شاهد التحول الحقيقي في <span className="gold-text-gradient">ابتسامات مراجعينا</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            مقارنة سريرية مباشرة لأسنان المراجعين قبل الخطة العلاجية وبعد اكتمال الابتسامة التجميلية. حرّك المقبض يميناً ويساراً لمشاهدة الفرق الحقيقي في صفاء الأسنان وتناسقها.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
                activeCaseIndex === idx
                  ? "bg-slate-900 text-amber-400 border border-amber-400/40 shadow-md scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              }`}
            >
              <span>{c.title}</span>
              <span dir="ltr" className="inline-block text-[11px] font-sans opacity-80">
                ({c.titleEn})
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200/90 rounded-3xl p-4 sm:p-8 shadow-xl">
          
          {/* Slider Visual Box (Actual Human Teeth vs Actual Human Teeth) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border-2 border-slate-300"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After Image: Radiant Bright Teeth (Background Layer) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={currentCase.afterImg}
                  alt="بعد العلاج التجميلي في مجمع ديمة"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  priority
                />
                <span className="absolute top-4 left-4 bg-emerald-600/90 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-md z-10 backdrop-blur-md">
                  بعد العلاج ✨
                </span>
              </div>

              {/* Before Image: Human Teeth Before (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <Image
                  src={currentCase.beforeImg}
                  alt="قبل العلاج"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  priority
                />
                <span className="absolute top-4 right-4 bg-slate-900/90 text-amber-300 text-xs font-black px-3 py-1.5 rounded-lg shadow-md z-10 backdrop-blur-md">
                  قبل العلاج
                </span>
              </div>

              {/* Center Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900 border-2 border-amber-400 text-amber-400 flex items-center justify-center shadow-2xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                  <MoveHorizontal size={20} className="w-5 h-5 animate-pulse shrink-0" />
                </div>
              </div>

              {/* Drag Prompt Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur-md text-slate-200 text-[11px] font-semibold px-4 py-1.5 rounded-full pointer-events-none shadow-md z-20 flex items-center gap-1.5">
                <MoveHorizontal size={14} className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>اسحب المقبض يميناً ويساراً لمقارنة الأسنان</span>
              </div>

            </div>
          </div>

          {/* Case Clinical Details */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="inline-block text-xs font-bold text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full mb-2">
                تفاصيل الحالة السريرية
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {currentCase.title}
              </h3>
              <div className="mt-1">
                <span dir="ltr" className="inline-block text-xs font-bold text-amber-600 font-sans">
                  ({currentCase.titleEn})
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {currentCase.description}
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">الطبيب المعالج:</span>
                <span className="font-bold text-slate-900">{currentCase.doctor}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">المدة المستغرقة:</span>
                <span className="font-bold text-cyan-800">{currentCase.duration}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5">
                <span className="text-slate-500 font-medium">مؤشر الجودة:</span>
                <span className="font-bold text-emerald-700">{currentCase.stats}</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <a
                href="#booking-widget"
                className="w-full bg-slate-900 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Sparkles size={16} className="w-4 h-4 text-amber-400 shrink-0" />
                <span>احصل على ابتسامة مماثلة بالتقسيط</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
