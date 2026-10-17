"use client";

import React from "react";
import Image from "next/image";
import { 
  Smile, 
  Sparkles, 
  Baby, 
  Crosshair, 
  Zap, 
  ArrowLeft,
  CheckCircle2,
  Layers,
  HeartPulse
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  specialtyTag: string;
  specialtyValue: string;
}

export default function SpecializedClinicsSection({
  onSelectSpecialty,
}: {
  onSelectSpecialty?: (specialty: string) => void;
} = {}) {
  const services: ServiceItem[] = [
    {
      id: "orthodontics",
      title: "التقويم الشفاف والمعدني",
      subtitle: "Clear Aligners & Orthodontics",
      description: "علاج الفراغات وتزاحم الأسنان وتصحيح إطباق الفكين بأحدث أجهزة التقويم الشفاف غير المرئي والتقويم الكريستالي السريع.",
      icon: Smile,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      features: ["قوالب شفافة غير مرئية ومتحركة", "تخطيط ثلاثي الأبعاد لخطوات العلاج", "متابعة دورية رقمية مرنة"],
      specialtyTag: "تقويم حديث بدون ألم",
      specialtyValue: "تقويم أسنان شفاف ومعدني",
    },
    {
      id: "implantology",
      title: "زراعة الأسنان وجراحة اللثة",
      subtitle: "Dental Implants & Periodontics",
      description: "تعويض الأسنان المفقودة بجراحات دقيقة ومعدلات نجاح قياسية، مع تطعيم العظام ورفع الجيب الفكي لثبات يدوم مدى الحياة.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
      features: ["زرعات سويسرية وألمانية معتمدة", "زراعة فورية في نفس اليوم للحالات المؤهلة", "إجراء جراحي بدون ألم"],
      specialtyTag: "نسبة نجاح 99.4%",
      specialtyValue: "زراعة وجراحة اللثة",
    },
    {
      id: "smile-design",
      title: "تصميم الابتسامة وعدسات الفينير",
      subtitle: "Digital Smile Design & Veneers",
      description: "ابتسامة هوليوود مخصصة بدقة ثلاثية الأبعاد (Digital Smile Design)، باستخدام عدسات الفينير واللومينير فائقة النعومة والطبيعية.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80",
      features: ["محاكاة رقمية لشكل الابتسامة قبل البدء", "عدسات إيماكس رقيقة تحافظ على بنية السن", "مقاومة تامة للتصبغات وتغير اللون"],
      specialtyTag: "ابتسامة المشاهير",
      specialtyValue: "تجميل وهوليوود سمايل",
    },
    {
      id: "pediatric-general-anesthesia",
      title: "طب أسنان الأطفال والتخدير الكلي",
      subtitle: "Pediatric Dentistry & General Anesthesia",
      description: "إنهاء جميع مشاكل التسوس للأطفال وذوي الاحتياجات الخاصة في جلسة واحدة دون خوف أو توتر، تحت إشراف نخبة من استشاريي التخدير المعتمدين.",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      features: ["وحدة تخدير كلي متكاملة ومعتمدة", "إنهاء كافة المعالجات بجلسة واحدة", "بيئة مرحة ومريحة لطمأنة الطفل"],
      specialtyTag: "وحدة معتمدة للأطفال",
      specialtyValue: "أسنان أطفال وتخدير كلي",
    },
    {
      id: "endodontics",
      title: "علاج العصب والجذور بالميكروسكوب",
      subtitle: "Microscopic Endodontics",
      description: "معالجة ميكروسكوبية فائقة الدقة لقنوات الجذور وعصب الأسنان المعقدة للحفاظ على السن الطبيعي وحمايته من الخلع مدى الحياة.",
      icon: Crosshair,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      features: ["ميكروسكوب جراحي لتكبير القنوات الدقيقة", "تنظيف وتعقيم بالليزر للأنسجة", "جلسات علاجية سريعة ومريحة"],
      specialtyTag: "حفاظ دائم على السن",
      specialtyValue: "علاج جذور وعصب الأسنان",
    },
    {
      id: "teeth-whitening",
      title: "التبييض والتنظيف بالليزر",
      subtitle: "Laser Whitening & Hygiene",
      description: "إزالة الجير والتصبغات العميقة واستعادة النضارة الطبيعية للأسنان ببروتوكولات التبييض البارد بالليزر في جلسة لا تتجاوز 45 دقيقة.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      features: ["تفتيح يصل إلى 8 درجات أفتح", "حماية المينا وتقليل حساسية الأسنان", "إزالة التصبغات الناتجة عن القهوة والتدخين"],
      specialtyTag: "نتائج فورية بجلسة واحدة",
      specialtyValue: "تنظيف وتبييض الأسنان بالليزر",
    },
  ];

  const handleBookService = (specialtyValue: string) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(specialtyValue);
    }
    const bookingWidget = document.getElementById("booking-widget");
    if (bookingWidget) {
      bookingWidget.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold mb-3">
            <HeartPulse size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
            <span>الأقسام والوحدات التخصصية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            خدمات علاجية وتجميلية متكاملة <span className="teal-text-gradient">بأعلى المعايير العالمية</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            تجمع عيادات ديمة بين أرقى الخبرات الطبية وأحدث الأجهزة التشخيصية المتقدمة (أشعة 3D CBCT والميكروسكوب الجراحي) لتمنحك رعاية دقيقة تفوق التوقعات.
          </p>
        </div>

        {/* Services Grid: Crisp White Cards on Seamless Soft Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-cyan-500/50 transition-all duration-300 flex flex-col group hover:-translate-y-2 shadow-md hover:shadow-xl"
              >
                {/* Visual Top Image with Specialty Tag */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Specialty Tag Badge */}
                  <span className="absolute top-4 right-4 bg-slate-900/90 text-amber-400 border border-amber-500/30 text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                    {service.specialtyTag}
                  </span>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-3 right-4 w-12 h-12 rounded-xl bg-cyan-700 backdrop-blur-md flex items-center justify-center text-white border border-cyan-400/40 shadow-lg shrink-0">
                    <Icon size={24} className="w-6 h-6 text-amber-300" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-cyan-700 tracking-wider uppercase block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-cyan-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA for this Service */}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => handleBookService(service.specialtyValue)}
                      className="w-full bg-slate-900 hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                    >
                      <span>احجز هذا القسم</span>
                      <ArrowLeft size={14} className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Units Callout Banner (CBCT & Pediatric Anesthesia) */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-2 text-center lg:text-right">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              تجهيزات رقمية استثنائية
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              قسم الأشعة ثلاثية الأبعاد (3D Dental CBCT) ووحدة التخدير الكلي
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              نوفر في مجمع ديمة أحدث أجهزة التصوير الطبقي ثلاثي الأبعاد لتشخيص دقيق قبل الزراعة والتقويم، بالإضافة إلى وحدة مرخصة للتخدير الكلي للأطفال لعلاج كامل بدون ألم أو خوف.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:920005196"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <span>استفسر عن وحدة التخدير الكلي</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
