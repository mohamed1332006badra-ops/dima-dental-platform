"use client";

import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Navigation,
  Car,
  Building
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function LocationAndContactSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const googleMapsUrl = "https://maps.google.com/?q=Dima+Dental+Center+Al+Olaya+Riyadh";

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold mb-3">
            <MapPin size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
            <span>موقعنا وأوقات العمل</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            موقع استراتيجي في <span className="teal-text-gradient">قلب الرياض (شارع التحلية)</span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            يسهل الوصول إلى مجمع ديمة من كافة أحياء الرياض، مع توفر مواقف سيارات مريحة واستقبال فاخر على مدار ساعات العمل.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details & Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <Building size={24} className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    مجمع عيادات ديمة لطب الأسنان
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    المملكة العربية السعودية - الرياض، طريق الأمير محمد بن عبد العزيز (شارع التحلية)، حي العليا 12313.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mt-2">
                    <Car size={14} className="w-3.5 h-3.5 shrink-0" />
                    <span>تتوفر مواقف خاصة لخدمة مراجعي المركز</span>
                  </div>
                </div>
              </div>

              {/* Working Hours Banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-bold">
                  <Clock size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
                  <span>مواعيد العمل الرسمية:</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-700 font-medium pr-6">
                  <span>السبت إلى الخميس:</span>
                  <span className="font-bold text-cyan-900" dir="ltr">1:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 pr-6">
                  <span>يوم الجمعة:</span>
                  <span className="text-rose-600 font-bold">مغلق</span>
                </div>
              </div>

              {/* Separated Contact Numbers */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                {/* Unified Call Center */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Phone size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span className="font-semibold">الاتصال الموحد:</span>
                  </div>
                  <a
                    href="tel:920005196"
                    className="font-black text-cyan-800 text-sm hover:underline"
                    dir="ltr"
                  >
                    920005196
                  </a>
                </div>

                {/* Direct WhatsApp Reservations */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">واتساب الحجوزات:</span>
                  </div>
                  <a
                    href="https://wa.me/966500179494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-emerald-600 text-sm hover:underline"
                    dir="ltr"
                  >
                    0500179494
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Direct Buttons */}
            <div className="space-y-3">
              <a
                href="tel:920005196"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-3 shadow-md transition-all"
              >
                <Phone size={16} className="w-4 h-4 text-amber-400 shrink-0" />
                <span>الاتصال الموحد: 920005196</span>
              </a>

              <a
                href="https://wa.me/966500179494?text=مرحباً%20مجمع%20ديمة%20لطب%20الأسنان،%20أود%20الاستفسار%20عن%20مواعيد%20العيادة"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-3 shadow-md shadow-emerald-700/20 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>واتساب الحجوزات: 0500179494</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-3 border border-slate-300 shadow-sm transition-all"
              >
                <Navigation size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>فتح الموقع في Google Maps</span>
                <ExternalLink size={14} className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </div>

          </div>

          {/* Interactive Google Maps Embed Container */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-xl bg-slate-100 flex flex-col">
              <iframe
                title="موقع مجمع عيادات ديمة لطب الأسنان بالرياض - العليا"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14498.411136423455!2d46.6852!3d24.6989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03264b3ef8b5%3A0x633d749be9d45a90!2sPrince%20Muhammad%20Ibn%20Abd%20Al%20Aziz%20Rd%2C%20Al%20Olaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1710000000000!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "440px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-1"
              />

              {/* Map Floating Pill */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                <MapPin size={16} className="w-4 h-4 text-rose-500 animate-bounce shrink-0" />
                <span>طريق الأمير محمد بن عبد العزيز (التحلية) - العليا</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
