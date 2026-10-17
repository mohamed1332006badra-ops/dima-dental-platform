"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "عن المركز", href: "#trust-stats" },
    { name: "أطباؤنا", href: "#doctors" },
    { name: "خدماتنا", href: "#services" },
    { name: "قبل وبعد", href: "#before-after" },
    { name: "التقسيط (تابي وتمارا)", href: "#financing" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("booking-widget");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-cyan-900 to-cyan-700 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform border border-amber-500/30 shrink-0">
              <span className="font-extrabold text-xl tracking-tight">D</span>
              <Sparkles size={14} className="w-3.5 h-3.5 text-amber-400 absolute -top-1 -right-1 shrink-0" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-cyan-800 transition-colors">
                مجمع ديمة
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[11px] font-semibold text-cyan-800 tracking-wider">
                  لطب وجراحة الأسنان
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">
                  العليا
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-cyan-700 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-700 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:920005196"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-cyan-700 font-bold text-sm px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
              title="اتصل بالرقم الموحد"
              dir="ltr"
            >
              <Phone size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
              <span>920005196</span>
            </a>

            <a
              href="#booking-widget"
              onClick={handleScrollToBooking}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-700 via-cyan-800 to-slate-900 hover:from-cyan-600 hover:to-slate-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-cyan-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Calendar size={16} className="w-4 h-4 text-amber-400 shrink-0" />
              <span>احجز موعدك</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#booking-widget"
              onClick={handleScrollToBooking}
              className="sm:hidden inline-flex items-center gap-1.5 bg-cyan-700 text-white font-bold text-xs px-3 py-2 rounded-lg shrink-0"
            >
              <Calendar size={14} className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>حجز</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X size={24} className="w-6 h-6" /> : <Menu size={24} className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-cyan-700 py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:920005196"
                className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-sm"
                dir="ltr"
              >
                <Phone size={16} className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>920005196 - اتصل الآن</span>
              </a>

              <a
                href="#booking-widget"
                onClick={handleScrollToBooking}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-700 to-slate-900 text-white font-bold py-3 rounded-xl text-sm shadow-md"
              >
                <Calendar size={16} className="w-4 h-4 text-amber-400 shrink-0" />
                <span>احجز موعدك الآن عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
