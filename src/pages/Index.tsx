
import React from "react";
import HeroSection from "@/components/HeroSection";
import UserSelector from "@/components/UserSelector";
import ExplainerCards from "@/components/ExplainerCards";

/**
 * Behandlervalg.dk homepage –
 * No directory listing here (moved to /terapeuter).
 */
const Index = () => {
  return (
    <main className="bg-background font-sans min-h-screen">
      <HeroSection />
      <UserSelector />
      <ExplainerCards />
    </main>
  );
};

export default Index;
