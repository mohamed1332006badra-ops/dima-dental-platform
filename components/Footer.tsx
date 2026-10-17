"use client";

import React from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Twitter, 
  Facebook,
  MessageCircle,
  ArrowUp
} from "lucide-react";
import TabbyTamaraBadges from "./TabbyTamaraBadges";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Summary (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-800 to-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-xl shadow-md shrink-0">
                D
              </div>
              <div>
                <span className="font-black text-xl text-white block">
                  مجمع عيادات ديمة لطب الأسنان
                </span>
                <span className="text-xs text-amber-400 font-semibold" dir="ltr">
                  Dima Dental Centers • Al Olaya, Riyadh
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              أكثر من 25 عاماً من الريادة الطبية والتجميلية في قلب الرياض. نجمع بين أحدث ما توصل إليه طب الأسنان الرقمي وكادر طبي استشاري معتمد لنقدم تجربة علاجية استثنائية تفوق التوقعات.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 block mb-2.5">
                تابعنا على منصات التواصل الاجتماعي:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/dema_clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-transparent hover:scale-110 shadow-sm shrink-0"
                  title="إنستغرام: @dema_clinic"
                >
                  <Instagram size={18} className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://twitter.com/Dimacenters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all border border-slate-800 hover:border-slate-700 hover:scale-110 shadow-sm shrink-0"
                  title="تويتر: @Dimacenters"
                >
                  <Twitter size={18} className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://facebook.com/DimaDentalCenters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-transparent hover:scale-110 shadow-sm shrink-0"
                  title="فيسبوك: Dima Dental Centers"
                >
                  <Facebook size={18} className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Tabby & Tamara Badges in Footer */}
            <div className="pt-2">
              <TabbyTamaraBadges size="small" />
            </div>

          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              أقسام المركز التخصصية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  التقويم الشفاف (Clear Aligners)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  زراعة الأسنان وجراحة اللثة
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  ابتسامة هوليوود وعدسات الفينير
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  طب أسنان الأطفال والتخدير الكلي
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  علاج العصب والجذور بالميكروسكوب
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  التبييض والتنظيف بالليزر
                </a>
              </li>
            </ul>
          </div>

          {/* Doctors (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              الأطباء الاستشاريون
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#doctors" className="hover:text-cyan-400 transition-colors">
                  د. باسل الميداني
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-cyan-400 transition-colors">
                  د. ألكسندر صابر
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-cyan-400 transition-colors">
                  د. محمد مسعود
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-cyan-400 transition-colors">
                  د. دخيلة القطان
                </a>
              </li>
              <li>
                <a href="#financing" className="text-amber-400 hover:underline font-semibold block pt-2">
                  تقسيط تابي وتمارا (4 دفعات)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              قنوات التواصل الرسمية
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>الرياض، طريق الأمير محمد بن عبد العزيز (التحلية)، حي العليا 12313.</span>
              </div>

              {/* Separated Unified Phone */}
              <div className="flex items-center gap-2">
                <Phone size={16} className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>الاتصال الموحد:</span>
                <a href="tel:920005196" className="text-white font-bold hover:text-cyan-400" dir="ltr">
                  920005196
                </a>
              </div>

              {/* Separated WhatsApp Reservations */}
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>واتساب الحجوزات:</span>
                <a
                  href="https://wa.me/966500179494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                  dir="ltr"
                >
                  0500179494
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={16} className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block">السبت - الخميس: 1:00 م - 9:00 م</span>
                  <span className="text-slate-500 text-[11px]">الجمعة: مغلق</span>
                </div>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg transition-colors shrink-0"
              >
                <ArrowUp size={14} className="w-3.5 h-3.5 shrink-0" />
                <span>العودة إلى أعلى الصفحة</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Ministry Disclaimer & Copyright */}
        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-right">
          
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              مرخص رسمياً من وزارة الصحة بالمملكة العربية السعودية | جميع الحقوق محفوظة © {new Date().getFullYear()} مجمع عيادات ديمة لطب الأسنان.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>سياسة الخصوصية</span>
            <span>•</span>
            <span>الشروط والأحكام</span>
            <span>•</span>
            <span className="text-slate-400">تصميم وتنفيذ فائق الفخامة لقطاع الرعاية الصحية</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
