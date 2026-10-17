"use client";

import { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function InteractiveBeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section id="before-after" className="py-20 bg-slate-50" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-4">
            <Sparkles size={14} className="text-amber-600" />
            <span>نتائج حقيقية للمراجعين</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            شاهد التحول الحقيقي في ابتسامات مراجعينا
          </h2>
          <p className="text-slate-600 text-sm">
            اسحب المؤشر يميناً ويساراً لمقارنة الأسنان قبل وبعد جلسة تصميم الابتسامة والفينير
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 select-none">
          <div
            ref={containerRef}
            className="relative h-80 sm:h-96 md:h-[450px] w-full overflow-hidden cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80"
              alt="بعد العلاج - ابتسامة ناصعة ومتناسقة"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
              بعد العلاج (ابتسامة هوليوود)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                alt="قبل العلاج - تصبغات وفراغات"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
                قبل العلاج
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-xl border-2 border-cyan-700 flex items-center justify-center">
                <MoveHorizontal size={18} className="text-cyan-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
