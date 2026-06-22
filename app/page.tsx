"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-grain min-h-screen">
      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-lg border-b border-white/5"
      >
        <span className="text-2xl font-light tracking-[0.2em] uppercase">WallPro<span className="text-[#00a4a6]">India</span></span>
        <button className="border border-white/20 px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Explore</button>
      </motion.nav>

      {/* HERO: Cinematic Focus */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-8xl font-bold mb-8">Precision in <br/> Every <span className="text-[#00a4a6]">Print</span></h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">The intersection of industrial engineering and digital artistry. We don't just print; we redefine surfaces.</p>
        </motion.div>
      </section>

      {/* FEATURES: Layered Cards */}
      <section className="py-32 px-12 grid md:grid-cols-3 gap-12 bg-[#050505]">
        {[
          { icon: Printer, title: "High-Definition 3D", desc: "Razor-sharp textures with industrial precision." },
          { icon: Zap, title: "Instant UV Curing", desc: "No mess, no odor, immediate finish." },
          { icon: Shield, title: "Durable Coating", desc: "Engineered for longevity and impact." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 bg-zinc-900/50 border border-white/5 hover:border-[#00a4a6]/50 transition-colors"
          >
            <item.icon className="mb-8 text-[#00a4a6]" size={32} />
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>
      
      {/* Add your Contact Section here... */}
    </main>
  );
}