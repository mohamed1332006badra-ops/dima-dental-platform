"use client";

import React, { useState } from "react";
import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsAndTrustBar from "@/components/StatsAndTrustBar";
import DoctorsSection from "@/components/DoctorsSection";
import InteractiveBeforeAfterSection from "@/components/InteractiveBeforeAfterSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import SpecializedClinicsSection from "@/components/SpecializedClinicsSection";
import TabbyTamaraBanner from "@/components/TabbyTamaraBanner";
import LocationAndContactSection from "@/components/LocationAndContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("أي طبيب متاح");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("تجميل وهوليوود سمايل");

  const handleSelectDoctor = (doctorName: string) => {
    setSelectedDoctor(doctorName);
  };

  const handleSelectSpecialty = (specialtyName: string) => {
    setSelectedSpecialty(specialtyName);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-700 selection:text-white">
      {/* 1. Top Announcement Bar */}
      <TopAnnouncementBar />

      {/* 2. Sticky Luxury Navigation */}
      <Navbar />

      {/* 3. Hero Section with Quick Booking Widget */}
      <HeroSection
        selectedDoctor={selectedDoctor}
        onDoctorSelected={handleSelectDoctor}
        selectedSpecialty={selectedSpecialty}
        onSpecialtySelected={handleSelectSpecialty}
      />

      {/* 4. Trust & Stats Bar + Tabby & Tamara Partner Logos */}
      <StatsAndTrustBar />

      {/* 5. Medical Directory: Doctors to Feature */}
      <DoctorsSection onSelectDoctor={handleSelectDoctor} />

      {/* 6. Native Drag & Touch Before & After Comparison */}
      <InteractiveBeforeAfterSection />

      {/* 7. Verified Google Maps Reviews Section */}
      <GoogleReviewsSection />

      {/* 8. Specialized Clinical Pillars & 3D CBCT / Anesthesia Units */}
      <SpecializedClinicsSection onSelectSpecialty={handleSelectSpecialty} />

      {/* 9. Tabby & Tamara Financing Reassurance & Calculator */}
      <TabbyTamaraBanner />

      {/* 10. Location, Working Hours & Google Map */}
      <LocationAndContactSection />

      {/* 11. Footer with Saudi Licensing & Regulatory Credentials */}
      <Footer />

      {/* Interactive Floating Quick WhatsApp Widget */}
      <FloatingWhatsApp />
    </main>
  );
}
