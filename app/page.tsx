"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#030303] text-white min-h-screen">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-12 py-8 bg-[#030303]/80 backdrop-blur-md">
        <div className="text-2xl font-light tracking-[0.25em]">WALLPRO<span className="text-[#00a4a6]">INDIA</span></div>
        <div className="space-x-8 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Enquire</a>
        </div>
      </nav>

      {/* HERO: Luxury Minimalism */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-[#00a4a6] text-xs uppercase tracking-[0.3em] mb-6">Revolutionizing Surfaces</h2>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-10">PRECISION<br/>IN PRINT</h1>
          <p className="text-zinc-500 text-lg max-w-md mx-auto leading-relaxed">
            Where industrial engineering meets high-end digital artistry. We don't just decorate; we define your space.
          </p>
        </motion.div>
      </section>

      {/* SERVICES: Modular Luxury Grid */}
      <section id="services" className="py-32 px-12 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-0 border-l border-t border-white/5">
          {[
            { icon: Printer, title: "3D VERTICAL", desc: "High-definition architectural printing with deep texture mapping." },
            { icon: Zap, title: "INSTANT UV", desc: "Industrial-grade rapid curing for odor-free, durable finishes." },
            { icon: Shield, title: "ENDURANCE", desc: "Scratch-resistant and UV-stable coatings for infinite longevity." }
          ].map((s, i) => (
            <div key={i} className="p-12 border-r border-b border-white/5 hover:bg-white/5 transition-colors group">
              <s.icon className="text-[#00a4a6] mb-8 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="text-xl font-medium tracking-tight mb-4">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: Final Touch */}
      <footer className="py-12 text-center text-[10px] uppercase tracking-widest text-zinc-600">
        © 2026 WallPro India — Architectural Surface Solutions
      </footer>
    </main>
  );
}