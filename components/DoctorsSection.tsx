"use client";

import React from "react";
import Image from "next/image";
import { Award, Calendar, CheckCircle2, Star, Stethoscope } from "lucide-react";

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialtyTag: string;
  specialtyTagEn?: string;
  description: string;
  badges: string[];
  experience: string;
  image: string;
  rating: number;
  patientsCount: string;
}

interface DoctorsSectionProps {
  onSelectDoctor?: (doctorName: string) => void;
}

export default function DoctorsSection({ onSelectDoctor }: DoctorsSectionProps) {
  const doctors: Doctor[] = [
    {
      id: "dr-basel",
      name: "د. باسل الميداني",
      role: "أخصائي تقويم الأسنان والفكين",
      specialtyTag: "خبير التقويم الشفاف وتناسق الابتسامة",
      specialtyTagEn: "Clear Aligners",
      description: "متخصص في تصميم الابتسامة التقويمية، تعديل إطباق الفكين، وعلاج تزاحم وبروز الأسنان بأحدث تقنيات التقويم الشفاف والمعدني السريع.",
      badges: ["ماجستير تقويم الأسنان", "معتمد بتقنية التقويم الشفاف", "تناسق الابتسامة"],
      experience: "+16 سنة خبرة",
      // Dignified professional doctor in clean clinical attire (No surgical mask)
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      patientsCount: "+4,500 مراجع",
    },
    {
      id: "dr-alexander",
      name: "د. ألكسندر صابر",
      role: "أخصائي جراحة اللثة وزراعة الأسنان",
      specialtyTag: "جراحة الفم وتطعيم العظام التعويضية",
      specialtyTagEn: "Dental Implants",
      description: "رائد في زراعة الأسنان الفورية، عمليات رفع الجيب الفكي، وتطعيم العظام المتقدم بتقنيات رقمية تضمن أعلى نسب الثبات والنجاح.",
      badges: ["بورد جراحة وزراعة الأسنان", "تجميل اللثة بالليزر", "زراعة فورية"],
      experience: "+18 سنة خبرة",
      // Dignified consultant physician in white medical coat
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      patientsCount: "+5,200 مراجع",
    },
    {
      id: "dr-mohamed",
      name: "د. محمد مسعود",
      role: "طبيب أسنان عام وتجميل",
      specialtyTag: "ابتسامة هوليوود وعدسات الفينير",
      specialtyTagEn: "Cosmetic Veneers",
      description: "خبير في الفينير واللومينير فائق الرقة، الحشوات التجميلية الميكروسكوبية، والتبييض المتقدم لابتسامة طبيعية متناسقة تحاكي ملامح الوجه.",
      badges: ["Digital Smile Design", "تجميل الأسنان المجهري", "فينير إيماكس"],
      experience: "+14 سنة خبرة",
      // Professional male dentist in clinic uniform (NO stethoscope)
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      patientsCount: "+3,800 مراجع",
    },
    {
      id: "dr-dakhila",
      name: "د. دخيلة القطان",
      role: "استشارية ونائب رئيس طب أسنان الأطفال",
      specialtyTag: "رعاية الأطفال وعلاجات التخدير الكلي",
      specialtyTagEn: "Pediatric Care",
      description: "استشارية بارزة متخصصة في علاج أسنان الأطفال وذوي الاحتياجات الخاصة تحت التخدير الكلي الآمن في جلسة واحدة لإنهاء الألم دون خوف.",
      badges: ["استشارية طب أسنان أطفال", "وحدة التخدير الكلي الآمن", "سلوكيات الطفل"],
      experience: "+20 سنة خبرة",
      // Female consultant in professional indoor clinical setting
      image: "https://images.unsplash.com/photo-1594824813587-88d447f2e148?auto=format&fit=crop&w=600&q=80",
      rating: 5.0,
      patientsCount: "+6,100 طفل",
    },
  ];

  const handleBookDoctor = (docName: string) => {
    if (onSelectDoctor) {
      onSelectDoctor(docName);
    }
    const elem = document.getElementById("booking-widget");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="doctors" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/70 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold mb-3">
            <Stethoscope size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
            <span>الكادر الطبي الاستشاري المعتمد</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            نخبة من <span className="teal-text-gradient">أمهر أطباء واستشاريي</span> الأسنان بالرياض
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            فريق طبي متكامل بخبرات سريرية تزيد عن 25 عاماً، يحملون أعلى الشهادات التخصصية والاعتمادات الدولية من وزارة الصحة لضمان أفضل نتائج علاجية وتجميلية لابتسامتك.
          </p>
        </div>

        {/* Doctors Grid: Strictly Equal Heights & Balanced Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-2 h-full"
            >
              {/* Doctor Image Container (Fixed Exact Ratio 4/5 for All) */}
              <div className="relative aspect-[4/5] sm:h-72 w-full bg-slate-100 overflow-hidden shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-bold text-slate-800">
                  <Star size={14} className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                  <span>{doctor.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-cyan-900/90 text-amber-300 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-400/30">
                  {doctor.experience}
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 right-4 left-4 text-white">
                  <span className="text-[11px] font-semibold text-amber-400 block mb-0.5">
                    {doctor.specialtyTag}{" "}
                    {doctor.specialtyTagEn && (
                      <span dir="ltr" className="inline-block text-[10px] text-amber-200 font-sans">
                        ({doctor.specialtyTagEn})
                      </span>
                    )}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {doctor.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-cyan-800 text-xs font-bold mb-2">
                    <Award size={14} className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>{doctor.role}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {doctor.description}
                  </p>

                  {/* Badges / Credentials */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {doctor.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Action Button (Strictly pinned to bottom) */}
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleBookDoctor(doctor.name)}
                    className="w-full bg-slate-900 group-hover:bg-cyan-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Calendar size={16} className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>احجز كشف مع الطبيب</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-12 text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-2">
          <CheckCircle2 size={16} className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>جميع الأطباء مصنفون رسمياً من الهيئة السعودية للتخصصات الصحية ومجازون بمزاولة المهنة في مجمع ديمة.</span>
        </div>

      </div>
    </section>
  );
}
