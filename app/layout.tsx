import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "مجمع عيادات ديمة لطب الأسنان | الرياض - شارع التحلية العليا",
  description: "مجمع عيادات ديمة لطب الأسنان بالرياض - العليا، شارع التحلية. أكثر من 25 عاماً من الخبرة الطبية المعتمدة في تقويم الأسنان، زراعة الأسنان، ابتسامة هوليوود، وطب أسنان الأطفال بالتخدير الكلي. تقسيط تابي وتمارا بدون فوائد.",
  keywords: [
    "عيادات ديمة لطب الأسنان",
    "طبيب أسنان الرياض",
    "عيادات أسنان العليا",
    "تقويم الأسنان الرياض",
    "زراعة أسنان الرياض",
    "ابتسامة هوليوود العليا",
    "طب أسنان الأطفال تخدير كلي",
    "تقسيط أسنان تابي تمارا"
  ],
  authors: [{ name: "مجمع عيادات ديمة لطب الأسنان" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "مجمع عيادات ديمة لطب الأسنان | ريادة طب وتجميل الأسنان بالرياض",
    description: "25 عاماً من الريادة الطبية، كادر استشاري معتمد، أحدث تقنيات 3D CBCT، وتقسيط ميسر عبر تابي وتمارا.",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <body className="font-cairo bg-slate-50 text-slate-900 antialiased selection:bg-cyan-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
