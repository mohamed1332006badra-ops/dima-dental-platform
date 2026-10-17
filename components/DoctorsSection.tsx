"use client";

import { Award, Calendar, Star } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "alexander",
    name: "د. ألكسندر صابر",
    title: "أخصائي جراحة اللثة وزراعة الأسنان",
    specialty: "جراحة اللثة التجميلية وتطعيم العظام وزراعة الأسنان المتقدمة",
    experience: "+16 سنة خبرة",
    rating: "4.9 ★",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "masoud",
    name: "د. محمد مسعود",
    title: "طبيب أسنان عام وتجميل",
    specialty: "ابتسامة هوليوود، الفينير، والحشوات التجميلية الرقمية",
    experience: "+10 سنوات خبرة",
    rating: "4.8 ★",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dakhila",
    name: "د. دخيلة القطان",
    title: "استشارية طب أسنان الأطفال",
    specialty: "علاج حالات الأطفال وذوي الاحتياجات الخاصة تحت التخدير الكامل",
    experience: "+18 سنة خبرة",
    rating: "5.0 ★",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function DoctorsSection({ onSelectDoctor }: { onSelectDoctor?: (doctorName: string) => void } = {}) {
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
    <section id="doctors" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-800 text-xs font-bold mb-4">
            <Award size={14} className="text-cyan-700" />
            <span>نخبة الكفاءات الطبية بالرياض</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            نخبة من أمهر أطباء واستشاريي الأسنان
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            فريق متكامل يجمع بين الخبرة الأكاديمية والسريرية الممتدة لأكثر من ربع قرن لضمان أدق النتائج وأعلى درجات الأمان
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-600 flex items-center gap-1 shadow-xs">
                    <Star size={12} className="fill-amber-500 text-amber-500" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white">
                    {doctor.experience}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-700 mb-2 mt-0.5">
                    {doctor.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => scrollToBooking(doctor.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-cyan-700 text-slate-700 hover:text-white font-bold text-xs border border-slate-200 hover:border-cyan-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-2xs"
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
