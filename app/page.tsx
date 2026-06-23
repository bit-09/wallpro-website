"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Paintbrush, 
  Layers, 
  Building2, 
  Home as HomeIcon, 
  Coffee,
  Check,
  Quote
} from 'lucide-react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const whatsappNumber = "916281658946";

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    await fetch("https://formspree.io/f/mbdvjaeo", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    setLoading(false);
    setSubmitted(true);
  }

  const logoGradient = "linear-gradient(to right, #ec4899, #f97316, #eab308, #22c55e, #3b82f6)";

  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F5F4F0] overflow-x-hidden font-sans">
      
 {/* 1. ULTRA-MINIMAL NAV */}
      <nav className="absolute top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center border-b border-white/10 text-white">
        
        {/* EXACT LOGO FILE (Center-zoomed perfectly using scale) */}
        <a href="#" className="z-50 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-44 h-12 md:w-60 md:h-14 flex items-center justify-center overflow-hidden transform transition-transform hover:scale-105">
          <img src="/logo.png" alt="WallPro India" className="w-full h-full object-contain scale-[1.6] md:scale-[1.7]" />
        </a>
        
        <div className="hidden md:flex space-x-12 text-xs font-medium uppercase tracking-[0.2em] z-50"></div>
        
        <div className="hidden md:flex space-x-12 text-xs font-medium uppercase tracking-[0.2em] z-50"></div>
        <div className="hidden md:flex space-x-12 text-xs font-medium uppercase tracking-[0.2em] z-50">
          <a href="#services" className="hover:text-white/70 transition-colors">Expertise</a>
          <a href="#process" className="hover:text-white/70 transition-colors">Process</a>
          <a href="#about" className="hover:text-white/70 transition-colors">Studio</a>
        </div>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white/70 transition-colors z-50">
          <Phone size={14} /> Connect
        </a>
      </nav>

      {/* 2. ARCHITECTURAL HERO WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[95vh] bg-[#0A0A0A] flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        
        {/* --- VIDEO CONTAINER --- */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Lighter gradient overlay so the video shows clearly, but text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-[#0A0A0A]/20"></div>
        </div>
        {/* Abstract Glowing Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left: Massive Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Launch: July 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
              Crafting <br />
              <span className="italic font-light text-white/70">Timeless</span> <br />
              Spaces.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed mb-12 drop-shadow-md">
              High-definition vertical printing for architecture and interiors. We transform blank walls into profound visual statements.
            </p>

            <a href="#about" className="inline-flex items-center gap-4 text-white text-sm uppercase tracking-widest font-medium group">
              Discover Our Studio 
              <span className="w-10 h-[1px] bg-white group-hover:w-16 transition-all duration-300"></span>
            </a>
          </motion.div>

          {/* Right: Livspace-Style Floating Conversion Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-[1px] rounded-2xl opacity-70" style={{ background: logoGradient }}></div>
            <div className="relative bg-[#121212]/80 backdrop-blur-2xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-serif text-white mb-2">Request an Estimate</h3>
              <p className="text-white/60 text-sm mb-8">Share your dimensions. We'll engineer the quote.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <Check className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl text-white font-serif">Received.</h4>
                  <p className="text-white/50 mt-2 text-sm">Our studio will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <input type="text" name="name" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-none border-b focus:border-white focus:bg-white/10 text-white px-4 py-3 outline-none transition-all" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-none border-b focus:border-white focus:bg-white/10 text-white px-4 py-3 outline-none transition-all" />
                    <select name="type" className="w-full bg-[#1A1A1A] border border-white/10 rounded-none border-b focus:border-white text-white/70 px-4 py-3 outline-none transition-all appearance-none">
                      <option value="Residential">Residential Space</option>
                      <option value="Corporate">Corporate Office</option>
                      <option value="Hospitality">Hospitality / Retail</option>
                    </select>
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-white/90 transition-colors flex justify-center items-center gap-2">
                    {loading ? "Processing..." : "Get Detailed Quote"} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERTISE */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 border-t border-l border-[#1A1A1A]/10">
          {[
            { num: "01", icon: Layers, title: "Multi-Surface", desc: "Engineered for walls, glass, wood, and concrete." },
            { num: "02", icon: ShieldCheck, title: "5-Year Span", desc: "UV-stable, scratch-resistant polymers built to last." },
            { num: "03", icon: Clock, title: "Rapid Cure", desc: "Instant UV curing technology for zero downtime." },
            { num: "04", icon: Paintbrush, title: "Absolute Fidelity", desc: "Print complex imagery exactly as architected." }
          ].map((feature, i) => (
            <div key={i} className="group p-10 border-r border-b border-[#1A1A1A]/10 hover:bg-white transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: logoGradient }}></div>
              <span className="text-4xl font-serif text-[#1A1A1A]/10 font-bold block mb-8 group-hover:text-[#1A1A1A]/30 transition-colors">{feature.num}</span>
              <feature.icon className="text-[#1A1A1A] mb-6" size={28} strokeWidth={1} />
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wider text-xs">{feature.title}</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PORTFOLIO WITH IMAGE REVEALS (Bento Box Layout) */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif mb-16 text-center">Portfolio Sectors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            
            {/* Bento Block 1: Residential */}
            <div className="md:col-span-2 relative overflow-hidden group rounded-xl bg-[#0A0A0A]">
              {/* Changed from Unsplash link to your local public folder link */}
              <img src="/residential.jpg" alt="Residential Interior" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: logoGradient }}></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end text-white">
                <HomeIcon size={40} strokeWidth={1} className="mb-4 text-white/70" />
                <h3 className="text-3xl font-serif mb-2">Residential Sanctuaries</h3>
                <p className="max-w-md text-white/70 text-sm">Villas, high-rise apartments, and private estates. We turn standard living areas into deeply personal architectural statements.</p>
              </div>
            </div>

            {/* Bento Block 2: Corporate */}
            <div className="relative overflow-hidden group rounded-xl bg-[#0A0A0A]">
              {/* Changed from Unsplash link to your local public folder link */}
              <img src="/corporate.jpg" alt="Corporate Office" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end text-white">
                <Building2 size={40} strokeWidth={1} className="mb-4 text-white/70" />
                <h3 className="text-2xl font-serif mb-2">Corporate Form</h3>
                <p className="text-white/70 text-sm">Boardrooms designed to communicate instant authority.</p>
              </div>
            </div>

            {/* Bento Block 3: Hospitality */}
            <div className="md:col-span-3 relative overflow-hidden group rounded-xl bg-[#0A0A0A]">
              {/* Changed from Unsplash link to your local public folder link */}
              <img src="/hospitality.jpg" alt="Hospitality Interior" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end text-white">
                <Coffee size={40} strokeWidth={1} className="mb-4 text-white/70" />
                <h3 className="text-3xl font-serif mb-2">Hospitality & Retail</h3>
                <p className="max-w-2xl text-white/70 text-sm">Hotels, flagship stores, and fine dining. Creating immersive, highly photogenic environments that define the guest experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL FOUNDER QUOTE */}
      <section id="about" className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote size={64} className="mx-auto text-white/10 mb-10" />
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-12 drop-shadow-lg">
            "We engineer spaces with the same <span className="italic text-white/60">rigorous precision</span> used to build software. No shortcuts. Absolute fidelity."
          </h2>
          <div className="w-[1px] h-24 bg-white/20 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-3 text-white/40">Vetted Tech</h4>
              <p className="text-sm text-white/70">Equipment sourced only after evaluating multiple global manufacturers for printhead supremacy.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-3 text-white/40">Direct Oversight</h4>
              <p className="text-sm text-white/70">As a newly founded studio, every single inch of your project is personally overseen by the founders.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-3 text-white/40">Zero Compromise</h4>
              <p className="text-sm text-white/70">We refuse to cut corners on surface preparation or UV curing times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-16">Inquiries.</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
             { q: "Is this traditional painting?", a: "No. It is direct-to-surface digital UV printing. It applies microscopic droplets of polymer ink for photographic sharpness." },
             { q: "What is the lifespan?", a: "Architectural grade. Expect up to 5 years indoors with built-in UV and abrasion resistance." },
             { q: "Which surfaces are viable?", a: "Almost any rigid surface. Plaster, glass, polished wood, and concrete floors." },
             { q: "How are prices calculated?", a: "Quotes are engineered based on precise square footage, surface complexity, and location." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-[#1A1A1A]/10 pb-6">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3">{faq.q}</h4>
              <p className="text-[#1A1A1A]/60 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-24">
          <div>
            
            {/* EXACT LOGO FILE (Inside a white container for the dark footer) */}
            <div className="mb-8 inline-block bg-white px-6 py-4 rounded-2xl shadow-lg">
              <img src="/logo.png" alt="WallPro India" className="w-52 md:w-64 h-auto object-contain" />
            </div>
            
            <p className="text-white/40 text-sm max-w-sm">
              Redefining interior architecture through high-precision vertical printing.
            </p>
          </div>
          <div className="md:text-right flex flex-col justify-between">
            <a href={`https://wa.me/${whatsappNumber}`} className="text-3xl md:text-5xl font-serif hover:italic transition-all inline-block mb-6">
              +91 62816 58946
            </a>
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Currently Serving: Hyderabad • Bengaluru • Vijayawada
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} WallPro India Studio.</p>
          <p>Precision Surface Engineering.</p>
        </div>
      </footer>
    </main>
  );
}