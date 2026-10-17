"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Calendar, Star, Stethoscope } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  rating: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: "basel",
    name: "د. باسل الميداني",
    title: "أخصائي تقويم الأسنان والفكين",
    specialty: "خبير التقويم الشفاف (Clear Aligners) وحلول الابتسامة",
    experience: "+14 سنة خبرة",
    rating: "4.9 ★",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "alexander",
    name: "د. ألكسندر صابر",
    title: "أخصائي جراحة اللثة وزراعة الأسنان",
    specialty: "جراحة اللثة التجميلية وتطعيم العظام وزراعة الأسنان المتقدمة",
    experience: "+16 سنة خبرة",
    rating: "4.9 ★",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "masoud",
    name: "د. محمد مسعود",
    title: "طبيب أسنان عام وتجميل",
    specialty: "ابتسامة هوليوود، الفينير، والحشوات التجميلية الرقمية",
    experience: "+10 سنوات خبرة",
    rating: "4.8 ★",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dakhila",
    name: "د. دخيلة القطان",
    title: "استشارية طب أسنان الأطفال",
    specialty: "علاج حالات الأطفال وذوي الاحتياجات الخاصة تحت التخدير الكامل",
    experience: "+18 سنة خبرة",
    rating: "5.0 ★",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964f137?auto=format&fit=crop&w=600&q=80",
  },
];

export default function DoctorsSection({ onSelectDoctor }: { onSelectDoctor?: (doctorName: string) => void } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToBooking = (doctorName: string) => {
    if (onSelectDoctor) {
      onSelectDoctor(doctorName);
    }
    const bookingWidget = document.getElementById("booking-widget");
    if (bookingWidget) {
      bookingWidget.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="doctors" className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-50/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-50/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-cyan-100/80 border border-cyan-200/60 text-cyan-800 text-xs font-bold mb-5 shadow-sm">
            <Award size={14} className="text-cyan-700" />
            <span>نخبة الكفاءات الطبية بالرياض</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight section-divider">
            نخبة من أمهر أطباء واستشاريي الأسنان
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6">
            فريق متكامل يجمع بين الخبرة الأكاديمية والسريرية الممتدة لأكثر من ربع قرن لضمان أدق النتائج وأعلى درجات الأمان
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:border-cyan-200/60 transition-all duration-500 flex flex-col justify-between luxury-card ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-amber-700 flex items-center gap-1.5 shadow-md border border-amber-100/50">
                    <Star size={12} className="fill-amber-500 text-amber-500" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white border border-white/10">
                    {doctor.experience}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-cyan-800 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-bold text-cyan-700 mb-2 mt-1 flex items-center gap-1.5">
                    <Stethoscope size={12} className="shrink-0" />
                    {doctor.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => scrollToBooking(doctor.name)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs border border-slate-800 hover:border-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm btn-premium"
                >
                  <Calendar size={14} />
                  <span>احجز موعد كشف</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
