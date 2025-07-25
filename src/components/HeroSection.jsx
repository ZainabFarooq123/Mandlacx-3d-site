import React from "react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-8">
      <h2 className="text-yellow-400 uppercase text-sm tracking-widest">
        The Future of On-Site AI Surveillance
      </h2>
      <h1 className="text-5xl md:text-6xl font-bold mt-4">
        MandlacX Edge <span className="italic text-gray-400">Processor</span>
      </h1>
      <p className="mt-6 text-gray-300 max-w-xl">
        A multi-domain, first-generation AI-powered device designed for
        real-time threat detection.
      </p>
    </section>
  );
}
