"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  User, 
  Phone, 
  Stethoscope, 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  CreditCard 
} from "lucide-react";
import TabbyTamaraBadges from "./TabbyTamaraBadges";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface HeroSectionProps {
  selectedDoctor?: string;
  onDoctorSelected?: (doctor: string) => void;
  selectedSpecialty?: string;
  onSpecialtySelected?: (specialty: string) => void;
}

export default function HeroSection({
  selectedDoctor,
  onDoctorSelected,
  selectedSpecialty,
  onSpecialtySelected,
}: HeroSectionProps) {
  const [specialty, setSpecialty] = useState("تجميل وهوليوود سمايل");
  const [doctor, setDoctor] = useState("د. محمد مسعود");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (selectedDoctor) {
      if (selectedDoctor.includes("باسل")) setDoctor("د. باسل الميداني");
      else if (selectedDoctor.includes("ألكسندر") || selectedDoctor.includes("الكسندر")) setDoctor("د. ألكسندر صابر");
      else if (selectedDoctor.includes("مسعود")) setDoctor("د. محمد مسعود");
      else if (selectedDoctor.includes("دخيلة")) setDoctor("د. دخيلة القطان");
      else setDoctor(selectedDoctor);
    }
  }, [selectedDoctor]);

  useEffect(() => {
    if (selectedSpecialty) {
      setSpecialty(selectedSpecialty);
    }
  }, [selectedSpecialty]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg("يرجى إدخال الاسم الكامل");
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMsg("يرجى إدخال رقم جوال صحيح (مثال: 05xxxxxxxx)");
      return;
    }
    setErrorMsg("");

    const message = `مرحباً مجمع ديمة لطب الأسنان، أود تأكيد موعد مع ${doctor} تخصص ${specialty} الاسم: ${fullName} الجوال: ${phone}${date ? ` الموعد المقترح: ${date}` : ""}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/966500179494?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-[92vh] text-white overflow-hidden flex items-center pt-8 pb-16">
      
      {/* High-Resolution Clean, Bright Dental Clinic Interior (NO surgery / masked surgeons photo) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
          alt="مجمع عيادات ديمة لطب الأسنان - العليا الرياض"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Softened Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-slate-950/95 via-slate-900/85 to-slate-900/80 backdrop-blur-[1px]" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md">
              <Sparkles size={16} className="w-4 h-4 text-amber-400 shrink-0" />
              <span>أكثر من ربع قرن من التميز الطبي في الرياض</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span className="text-slate-300">شارع التحلية - العليا</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              25 عاماً من الريادة الطبية لرعاية وتجميل{" "}
              <span className="gold-text-gradient block mt-1">ابتسامتك في قلب الرياض</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              نخبة من الاستشاريين المتخصصين، أحدث تقنيات التشخيص الرقمي ثلاثي الأبعاد (3D Dental CBCT)، 
              ووحدة تخدير كلي متكاملة لأسنان الأطفال، مع حلول علاجية ميسرة بتقسيط{" "}
              <strong className="text-amber-400 font-bold">تابي وتمارا على 4 دفعات بدون أي فوائد</strong>.
            </p>

            {/* Tabby & Tamara Badges */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <span className="text-xs text-slate-300 font-medium">خطط الدفع الميسر المعتمدة:</span>
              <TabbyTamaraBadges size="small" />
            </div>

            {/* Quick Trust Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-700/60 p-2.5 rounded-xl backdrop-blur-sm">
                <CheckCircle2 size={16} className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">أطباء واستشاريون معتمدون</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-700/60 p-2.5 rounded-xl backdrop-blur-sm">
                <CheckCircle2 size={16} className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">تقسيط 0% تابي & تمارا</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-700/60 p-2.5 rounded-xl backdrop-blur-sm col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">رعاية أطفال وتخدير كلي</span>
              </div>
            </div>

            {/* Direct Action Buttons: WhatsApp & Phone */}
            <div className="pt-3 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://wa.me/966500179494?text=مرحباً%20مجمع%20ديمة%20لطب%20الأسنان،%20أود%20حجز%20موعد%20استشارة"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3.5 rounded-2xl text-sm sm:text-base border border-emerald-400/40 flex items-center gap-2.5 transition-all shadow-xl shadow-emerald-950/40 transform hover:scale-105 shrink-0"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>واتساب الحجوزات: 0500179494</span>
              </a>

              <a
                href="tel:920005196"
                className="bg-slate-900/80 hover:bg-slate-900 text-white font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base border border-slate-700 hover:border-amber-400/40 flex items-center gap-2 transition-all shadow-lg shrink-0"
                dir="ltr"
              >
                <Phone size={16} className="w-4 h-4 text-amber-400 shrink-0" />
                <span>الاتصال الموحد: 920005196</span>
              </a>
            </div>

            {/* Google Rating Social Proof Badge */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-700/80 px-3.5 py-1.5 rounded-xl backdrop-blur-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
                  ))}
                </div>
                <span className="font-bold text-white mr-1">4.4</span>
                <span className="text-slate-300">من 1,800+ مراجع معتمد</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
                <ShieldCheck size={16} className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>ترخيص وزارة الصحة السعودية</span>
              </div>
            </div>

          </div>

          {/* Interactive Booking Card */}
          <div className="lg:col-span-5" id="booking-widget">
            <div className="relative bg-white/95 backdrop-blur-2xl text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 hover:border-amber-500/40 transition-colors">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                      حجز موعد فوري ومرن
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    احجز استشارتك الطبية
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-sm shrink-0">
                  <Calendar size={24} className="w-6 h-6 shrink-0" />
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4 mt-5">
                {errorMsg && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-2.5 rounded-lg font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Specialty Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Stethoscope size={14} className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    <span>التخصص الطبي المطلوب</span>
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => {
                      setSpecialty(e.target.value);
                      if (onSpecialtySelected) onSpecialtySelected(e.target.value);
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="تجميل وهوليوود سمايل">تجميل وهوليوود سمايل وعدسات الفينير</option>
                    <option value="تقويم أسنان شفاف ومعدني">تقويم أسنان شفاف ومعدني</option>
                    <option value="زراعة وجراحة اللثة">زراعة وجراحة اللثة وتطعيم العظام</option>
                    <option value="أسنان أطفال وتخدير كلي">أسنان أطفال وتخدير كلي (جلسة واحدة)</option>
                    <option value="علاج جذور وعصب الأسنان">علاج جذور وعصب الأسنان بالميكروسكوب</option>
                    <option value="تنظيف وتبييض الأسنان بالليزر">تنظيف وتبييض الأسنان بالليزر</option>
                    <option value="فحص شامل واستشارة عامة">فحص شامل واستشارة عامة مع الأشعة</option>
                  </select>
                </div>

                {/* Doctor Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User size={14} className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>الطبيب المفضل</span>
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => {
                      setDoctor(e.target.value);
                      if (onDoctorSelected) onDoctorSelected(e.target.value);
                    }}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="أي طبيب متاح">أي طبيب متاح حسب أقرب موعد</option>
                    <option value="د. باسل الميداني">د. باسل الميداني (أخصائي التقويم الشفاف والفكين)</option>
                    <option value="د. ألكسندر صابر">د. ألكسندر صابر (أخصائي جراحة اللثة والزراعة)</option>
                    <option value="د. محمد مسعود">د. محمد مسعود (طبيب تجميل الأسنان وهوليوود سمايل)</option>
                    <option value="د. دخيلة القطان">د. دخيلة القطان (استشارية طب أسنان الأطفال والتخدير الكلي)</option>
                  </select>
                </div>

                {/* Patient Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User size={14} className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>الاسم الكامل</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: عبد الله محمد الشمري"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Saudi Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone size={14} className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>رقم الجوال السعودي</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white transition-all text-left"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none" dir="ltr">
                      🇸🇦 +966
                    </span>
                  </div>
                </div>

                {/* Optional Preferred Date */}
                <div>
                  <label htmlFor="appointmentDate" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar size={14} className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>تاريخ الموعد المقترح</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="appointmentDate"
                      id="appointmentDate"
                      dir="ltr"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-right bg-white focus:ring-2 focus:ring-cyan-700 focus:outline-hidden text-xs sm:text-sm font-sans"
                      required
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-2"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>تأكيد الحجز الفوري عبر واتساب (0500179494)</span>
                </button>

                {/* Tabby & Tamara Guarantee */}
                <div className="pt-2 flex items-center justify-center gap-2 text-center text-[11px] text-slate-500 font-medium">
                  <CreditCard size={14} className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>الدفع متاح نقداً أو بالتقسيط عبر تابي وتمارا بالعيادة</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
