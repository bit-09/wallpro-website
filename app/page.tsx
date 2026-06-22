"use client";

import React from 'react';
import { Printer, Shield, Zap, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#00a4a6] selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider text-white">
          WALLPRO<span className="text-[#00a4a6]">INDIA</span>
        </div>
        <a href="#contact" className="text-sm bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:bg-[#00a4a6] hover:text-white transition-all duration-300">
          Get Quote
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00a4a6]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <span className="text-xs font-semibold tracking-widest text-[#00a4a6] uppercase mb-4 inline-block">
            The Future of Interior Design
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Transforming Spaces With <br />
            <span style={{background: 'linear-gradient(to right, #ffffff, #a0a0a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Advanced 3D Vertical Wall Printing
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
            Bypassing traditional wallpapers and time-consuming manual paint. WallPro India prints any high-definition digital artwork directly onto concrete, plaster, glass, wood, or metal with absolute precision.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-neutral-200 transition-all text-sm md:text-base">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY FEATURES SECTION */}
      <section id="features" className="py-24 border-t border-zinc-900 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Industrial Precision Meets Digital Art</h2>
            <p className="text-zinc-500 text-sm md:text-base">Premium, durable architectural print execution tailored for India's top spaces.</p>
          </div>

          {/* Grid Layout Fixed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#00a4a6]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00a4a6]/10 flex items-center justify-center text-[#00a4a6] mb-6">
                <Printer size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">High-Definition 3D Output</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Stunning color replication and depth metrics using high-precision machine framework calibrations for razor-sharp textures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#00a4a6]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00a4a6]/10 flex items-center justify-center text-[#00a4a6] mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant UV Curing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Industrial UV lamps dry premium ink bundles instantly as the printhead moves, leaving surfaces clean and completely odor-free.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#00a4a6]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00a4a6]/10 flex items-center justify-center text-[#00a4a6] mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Long-Lasting & Washable</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Scratch-resistant, water-proof, and fade-proof finishes built to maintain perfect aesthetic integrity for years indoors or outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT & LEAD GENERATION SECTION */}
      <section id="contact" className="py-24 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Brand & Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Collaborate on Your Walls</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              We partner with forward-thinking architects, premium interior designers, and commercial builders to execute next-level feature installations across commercial and high-end residential real estate.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base">
                <MapPin className="text-[#00a4a6] shrink-0" size={20} />
                <span>Makthal, Narayanpet / Vijayawada, India</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base">
                <Mail className="text-[#00a4a6] shrink-0" size={20} />
                <span>info@wallproindia.com</span>
              </div>
            </div>
          </div>

          {/* Lead Form Wrapper Fixed */}
          <div className="w-full">
            <form className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 space-y-5 w-full" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                <input type="text" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a4a6] transition-all text-sm" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a4a6] transition-all text-sm" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Project Requirements</label>
                <textarea rows={4} className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00a4a6] transition-all text-sm resize-none" placeholder="Describe the dimensions, surface material, and your layout idea..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#00a4a6] text-white font-semibold py-3.5 rounded-lg hover:bg-[#008f91] transition-all duration-300 text-sm shadow-lg shadow-[#00a4a6]/10">
                Request Free Site Survey
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 5. CLEAN FOOTER */}
      <footer className="py-8 border-t border-zinc-950 text-center text-xs text-gray-600 bg-black/20">
        <p>&copy; {new Date().getFullYear()} WallPro India. All Rights Reserved.</p>
      </footer>

    </main>
  );
}