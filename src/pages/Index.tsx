
import React from "react";
import HeroSection from "@/components/HeroSection";
import UserSelector from "@/components/UserSelector";
import ExplainerCards from "@/components/ExplainerCards";
import TherapistDirectory from "@/components/TherapistDirectory";

/**
 * Behandlervalg.dk homepage –
 * Responsive, accessible, mobile-first layout.
 */
const Index = () => {
  return (
    <main className="bg-background font-sans min-h-screen">
      <HeroSection />
      <UserSelector />
      <ExplainerCards />
      <TherapistDirectory />
    </main>
  );
};

export default Index;
