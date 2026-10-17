"use client";

import React from "react";
import { Star, CheckCircle, MapPin, Quote, ExternalLink } from "lucide-react";

interface GoogleReview {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number;
  clinicTag: string;
  doctorMention: string;
  comment: string;
}

export default function GoogleReviewsSection() {
  const reviews: GoogleReview[] = [
    {
      id: "review-basel",
      author: "م. فهد العتيبي",
      role: "مراجع معتمد من الرياض",
      date: "قبل أسبوعين",
      rating: 5,
      clinicTag: "تقويم الأسنان الشفاف",
      doctorMention: "د. باسل الميداني",
      comment:
        "تجربتي مع د. باسل الميداني في التقويم الشفاف كانت فارقة تماماً. دقة متناهية في المواعيد وخطة علاجية رقمية واضحة من الجلسة الأولى، والنتيجة بعد 8 أشهر فاقت توقعاتي بكثير. مجمع ديمة في شارع التحلية يقدم مستوى طبياً وفندقياً لا مثيل له.",
    },
    {
      id: "review-alexander",
      author: "د. عبد الرحمن الشهري",
      role: "مراجع معتمد من الرياض",
      date: "قبل شهر",
      rating: 5,
      clinicTag: "زراعة الأسنان وجراحة اللثة",
      doctorMention: "د. ألكسندر صابر",
      comment:
        "أجريت زراعة ضرسين وتطعيم عظمي مع د. ألكسندر صابر. كنت متخوفاً من الجراحة ولكن ماشاء الله يد الدكتور خفيفة جداً، وتم الإجراء بأحدث أجهزة الأشعة ثلاثية الأبعاد وبدون أي ألم يذكر أثناء أو بعد الجلسة. احترافية وأمانة طبية عالية جداً.",
    },
    {
      id: "review-pediatric",
      author: "سارة القحطاني (أم سلطان)",
      role: "ولية أمر مراجع",
      date: "قبل 3 أسابيع",
      rating: 5,
      clinicTag: "عيادة أسنان الأطفال والتخدير الكلي",
      doctorMention: "د. دخيلة القطان ووحدة التخدير",
      comment:
        "عيادة أسنان الأطفال ووحدة التخدير الكلي بمجمع ديمة كانت الحل المثالي لطفلي (5 سنوات) بعد معاناته من تسوسات متعددة وخوف شديد. د. دخيلة القطان وطاقم التخدير تعاملوا معه بمنتهى الرحمة والرقي، وتم علاج كافة أسنانه في جلسة واحدة آمنة تماماً دون أي خوف.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>تقييمات حقيقية موثقة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ماذا يقول مراجعونا في الرياض؟
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            تقييم 4.4 نجوم من أكثر من 1,800 مراجع موثق على خرائط Google
          </p>
        </div>

        {/* 3 Verified Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/80 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Top Quote Decor */}
              <div className="absolute top-6 left-6 text-slate-200 group-hover:text-amber-100 transition-colors pointer-events-none">
                <Quote size={38} className="rotate-180" />
              </div>

              <div>
                {/* Google Maps Badge Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    {/* Google G Icon Emblem */}
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">
                        مراجعة على Google Maps
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle size={10} className="shrink-0" />
                        <span>مراجع حقيقي معتمد</span>
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Golden Stars Rating */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400 shrink-0"
                    />
                  ))}
                  <span className="text-xs font-black text-slate-800 mr-1.5">5.0</span>
                </div>

                {/* Review Body */}
                <p className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed relative z-10">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details & Clinic Badge */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-cyan-800 transition-colors">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {rev.role}
                  </p>
                </div>

                <div className="text-left">
                  <span className="inline-block bg-cyan-100/70 border border-cyan-200 text-cyan-900 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {rev.clinicTag}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Maps Trust Callout Footer */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=مجمع+ديمة+لطب+الأسنان+الرياض"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs"
          >
            <MapPin size={14} className="text-red-500" />
            <span>عرض موقع العيادة والتقييمات على خرائط Google (شارع التحلية، الرياض)</span>
            <ExternalLink size={12} className="text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
