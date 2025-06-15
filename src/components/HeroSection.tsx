
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-secondary pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        {/* Left column */}
        <div className="md:w-1/2 flex flex-col items-start md:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Find den rigtige behandler <br />
            <span className="font-normal text-[#338062]">– på dine præmisser</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Vi gør det lettere at vælge den rette hjælp uden at gætte dig frem.
          </p>
          <a
            href="#directory"
            className="inline-block rounded-full bg-primary text-white px-7 py-3 font-semibold text-base shadow-md hover:bg-[#164488] transition-colors"
          >
            Kom i gang
          </a>
        </div>
        {/* Right column */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80"
            alt="Tænksom kvinde"
            className="rounded-2xl shadow-soft max-w-xs w-full md:max-w-md object-cover"
            style={{ aspectRatio: "4/5" }}
          />
        </div>
      </div>
      {/* Decorative green curve at bottom */}
      <svg viewBox="0 0 1440 150" className="absolute bottom-0 left-0 w-full pointer-events-none" aria-hidden>
        <path 
          fill="#dff5ea"
          fillOpacity="1"
          d="M0,70 C480,180 960,0 1440,100 L1440,150 L0,150 Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
