"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Sparkles, MoveHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export default function InteractiveBeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section ref={sectionRef} id="before-after" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" dir="rtl">
      {/* Decorative ambient glows */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/80 border border-amber-200/60 text-amber-800 text-xs font-bold mb-5 shadow-sm">
            <Sparkles size={14} className="text-amber-600" />
            <span>نتائج حقيقية للمراجعين</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight section-divider">
            شاهد التحول الحقيقي في ابتسامات مراجعينا
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6">
            اسحب المؤشر يميناً ويساراً لمقارنة الأسنان قبل وبعد جلسة تصميم الابتسامة والفينير
          </p>
        </div>

        <div className={`relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 select-none transition-all duration-700 delay-200 ${isVisible ? 'animate-scaleIn' : 'opacity-0 scale-90'}`}>
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-amber-500/20 to-cyan-500/20 rounded-3xl blur-xl pointer-events-none" />
          
          <div
            ref={containerRef}
            className="relative h-80 sm:h-96 md:h-[480px] w-full overflow-hidden cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image — Bright Hollywood smile result */}
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
              alt="بعد العلاج - ابتسامة ناصعة ومتناسقة"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10 pointer-events-none flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              بعد العلاج (ابتسامة هوليوود)
            </div>

            {/* Before Image — Dental issues */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                alt="قبل العلاج - تصبغات وفراغات"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10 pointer-events-none">
                قبل العلاج
              </div>
            </div>

            {/* Slider Handle — Premium design */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-cyan-700 shadow-2xl border-2 border-cyan-600 flex items-center justify-center animate-pulse">
                <MoveHorizontal size={20} className="text-cyan-700" />
              </div>
              {/* Slider arrows hint */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-[calc(50%+28px)] text-white/70 pointer-events-none">
                <ChevronRight size={18} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 translate-x-[calc(-50%+28px)] text-white/70 pointer-events-none" style={{ left: 0 }}>
                <ChevronLeft size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Instruction hint below slider */}
        <p className="text-center text-xs text-slate-400 mt-4 font-medium">
          💡 اسحب الدائرة البيضاء لمقارنة النتيجة
        </p>
      </div>
    </section>
  );
}
