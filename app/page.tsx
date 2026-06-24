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
  Quote,
  MapPin,
  MessageCircle,
  Mail,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // NEW BUSINESS NUMBER
  const whatsappNumber = "919014383855";
  const displayPhone = "+91 901438 3855";

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mbdvjaeo", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Unable to submit your request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const logoGradient = "linear-gradient(to right, #ec4899, #f97316, #eab308, #22c55e, #3b82f6)";

  return (
    <main id="top" className="min-h-screen overflow-x-hidden font-sans">
      
      {/* FLOATING WHATSAPP BUTTON (Crucial for Indian Market Conversions) */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Chat with WallPro on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-[#1A1A1A] text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with WallPro
        </span>
      </a>

    {/* 1. FROSTED GLASS NAVIGATION */}
      {/* ADDED: h-20 md:h-24 forces the bar to stay sleek and thin */}
      <nav className="absolute top-0 w-full z-50 h-20 md:h-24 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-[#1A1A1A]/10 text-[#1A1A1A]">
        
        <a href="#top" className="z-50 flex items-center justify-center h-20 md:h-24">
          <img src="/logo.png" alt="WallPro India" className="h-full w-auto object-contain" />
        </a>
        
        <div className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] z-50">
          <a href="#services" className="hover:text-black/50 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-black/50 transition-colors">Gallery</a>
          <a href="#process" className="hover:text-black/50 transition-colors">Process</a>
          <a href="#faq" className="hover:text-black/50 transition-colors">FAQ</a>
        </div>
        
        <a href="#contact" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-black/50 transition-colors z-50">
          <Phone size={14} /> {displayPhone}
        </a>
      </nav>

      {/* 2. ARCHITECTURAL HERO (Explicit Clarity Update) */}
      <section className="relative min-h-[95vh] bg-[#0A0A0A] flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]/30"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Launching in Hyderabad: July 2026</span>
            </div>
            
            {/* UPDATED: Directly stating what the business does */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
              Transforming <br /> Walls Into <br />
              <span className="italic font-light text-white/70">Masterpieces.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-lg font-medium leading-relaxed mb-12 drop-shadow-md">
              Premium Wall & Floor Printing Solutions for Homes, Offices, Hotels and Commercial Spaces.
            </p>

            <a href="#gallery" className="inline-flex items-center gap-4 text-white text-sm uppercase tracking-widest font-medium group">
              View Our Portfolio 
              <span className="w-10 h-[1px] bg-white group-hover:w-16 transition-all duration-300"></span>
            </a>
          </motion.div>

          {/* Right: Expanded Quote Form for better lead qualification */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="lg:col-span-5 relative" id="contact">
            <div className="absolute -inset-[1px] rounded-2xl opacity-70" style={{ background: logoGradient }}></div>
            <div className="relative bg-[#121212]/90 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-serif text-white mb-2">Request an Estimate</h3>
              <p className="text-white/60 text-xs mb-6">Share your project details. We'll engineer the quote.</p>

              {submitted ? (
                <div className="text-center py-12" role="status" aria-live="polite">
                  <Check className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl text-white font-serif">Request Received.</h4>
                  <p className="text-white/50 mt-2 text-sm">Our studio will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Full Name" required className="w-full bg-transparent border-b border-white/10 text-white px-2 py-3 outline-none focus:border-white focus:bg-white/5 transition-all text-sm" />
                    <input type="tel" inputMode="tel" autoComplete="tel" name="phone" placeholder="Phone Number" required className="w-full bg-transparent border-b border-white/10 text-white px-2 py-3 outline-none focus:border-white focus:bg-white/5 transition-all text-sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="city" placeholder="City (e.g. Hyderabad)" required className="w-full bg-transparent border-b border-white/10 text-white px-2 py-3 outline-none focus:border-white focus:bg-white/5 transition-all text-sm" />
                    <input type="number" inputMode="numeric" min="0" name="size" placeholder="Wall Size (sq ft)" className="w-full bg-transparent border-b border-white/10 text-white px-2 py-3 outline-none focus:border-white focus:bg-white/5 transition-all text-sm" />
                  </div>
                  <select name="type" className="w-full bg-[#1A1A1A] border-b border-white/10 text-white/70 px-2 py-3 outline-none focus:border-white transition-all text-sm appearance-none">
                    <option value="Residential">Residential Wall Print</option>
                    <option value="Corporate">Commercial / Office Branding</option>
                    <option value="Hospitality">Hotel / Restaurant Artwork</option>
                    <option value="Floor">Premium Floor Printing</option>
                  </select>
                  <textarea name="message" placeholder="Tell us about your space..." rows={2} className="w-full bg-transparent border-b border-white/10 text-white px-2 py-3 outline-none focus:border-white focus:bg-white/5 transition-all text-sm resize-none"></textarea>
                  {error && (
                    <p className="text-sm text-red-400 mt-2">{error}</p>
                  )}
                  <button type="submit" disabled={loading} className="w-full bg-white text-black font-bold uppercase tracking-widest text-[10px] py-4 hover:bg-white/90 transition-colors disabled:opacity-60 disabled:pointer-events-none flex justify-center items-center gap-2 mt-2">
                    {loading ? "Processing..." : "Get Detailed Quote"} <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BANNER (Crucial for local credibility) */}
      <div className="border-b border-[#1A1A1A]/10 bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/60">
          <span className="flex items-center gap-2"><MapPin size={16} className="text-pink-500"/> Based in Hyderabad</span>
          <span className="flex items-center gap-2"><Layers size={16} className="text-orange-500"/> Serving TS & AP</span>
          <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> 5-Year Output Warranty</span>
        </div>
      </div>

      {/* 3. EXPERTISE (Renamed to Customer-Focused Benefits) */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 border-t border-l border-[#1A1A1A]/10">
          {[
            { num: "01", icon: Layers, title: "Print On Walls & Floors", desc: "Engineered specifically for plaster, glass, wood, concrete, and floor tiles." },
            { num: "02", icon: ShieldCheck, title: "5-Year Durability", desc: "UV-stable, scratch-resistant polymers built to last indoors and outdoors." },
            { num: "03", icon: Clock, title: "Fast Installation", desc: "Instant UV curing technology means zero drying time. Use your room immediately." },
            { num: "04", icon: Paintbrush, title: "Photo-Quality Results", desc: "No stencils. No stickers. Print complex, high-res imagery directly onto surfaces." }
          ].map((feature, i) => (
            <div key={i} className="group p-8 md:p-10 border-r border-b border-[#1A1A1A]/10 hover:bg-white transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: logoGradient }}></div>
              <span className="text-4xl font-serif text-[#1A1A1A]/10 font-bold block mb-8 group-hover:text-[#1A1A1A]/30 transition-colors">{feature.num}</span>
              <feature.icon className="text-[#1A1A1A] mb-6" size={28} strokeWidth={1} />
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider">{feature.title}</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PORTFOLIO WITH IMAGE REVEALS (Updated to Wall/Floor specific contexts) */}
      <section id="gallery" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-serif mb-4">Print Portfolio</h2>
            <p className="text-[#1A1A1A]/60 uppercase tracking-widest text-xs font-bold">Custom Designs For Every Space</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Bento Block 1: Residential */}
            <div className="md:col-span-2 relative overflow-hidden group rounded-xl bg-[#0A0A0A]">
              <img src="/residential.jpg" alt="Living Room Wall Print" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: logoGradient }}></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end text-white">
                <HomeIcon size={32} strokeWidth={1.5} className="mb-4 text-white/70" />
                <h3 className="text-3xl font-serif mb-2">Residential Wall Prints</h3>
                <p className="max-w-md text-white/70 text-sm">Living rooms, kid's bedrooms, and private estates. We turn standard painted walls into deeply personal visual statements.</p>
              </div>
            </div>

            {/* Bento Block 2: Corporate */}
            <div className="relative overflow-hidden group rounded-xl bg-[#0A0A0A]">
              <img src="/corporate.jpg" alt="Office Branding Wall Print" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end text-white">
                <Building2 size={32} strokeWidth={1.5} className="mb-4 text-white/70" />
                <h3 className="text-2xl font-serif mb-2">Office Branding</h3>
                <p className="text-white/70 text-sm">Boardrooms and reception walls designed to communicate instant authority and brand identity.</p>
              </div>
            </div>

            {/* Bento Block 3: Hospitality */}
            <div className="md:col-span-3 relative overflow-hidden group rounded-xl bg-[#0A0A0A]">
              <img src="/hospitality.jpg" alt="Restaurant Artwork" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end text-white">
                <Coffee size={32} strokeWidth={1.5} className="mb-4 text-white/70" />
                <h3 className="text-3xl font-serif mb-2">Hotel & Restaurant Artwork</h3>
                <p className="max-w-2xl text-white/70 text-sm">Cafes, flagship stores, and fine dining. Creating immersive, photogenic mural environments that define the guest experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW: FLOOR PRINTING SECTION (Highlighting the USP) */}
      <section className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-white relative border-t border-white/10">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">Our Unique Capability</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Print Beyond <br/>Walls.</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              We don't just transform vertical spaces. WallPro India specializes in premium floor printing for commercial spaces, retail stores, and immersive residential setups.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-1" size={20} />
                <span className="text-white/80 text-sm">Prints directly on Epoxy, Concrete, Wood, and Tile floors.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-1" size={20} />
                <span className="text-white/80 text-sm">Engineered for high foot-traffic with industrial-grade clear coats.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-blue-500 shrink-0 mt-1" size={20} />
                <span className="text-white/80 text-sm">Perfect for 3D illusions, brand wayfinding, and luxury retail.</span>
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
              Request Floor Quote <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="lg:w-1/2 w-full h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* When you get a floor photo, name it floor.jpg and drop it in the public folder */}
            <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center">
              <span className="text-white/30 font-serif italic">Premium Floor Printing</span>
            </div>
            <img src="/floor.jpg" alt="3D Floor Printing" className="absolute inset-0 w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* 6. FOUNDER'S NOTE (Building Trust as a New Brand) */}
      <section id="about" className="py-32 px-6 md:px-12 bg-[#F5F4F0] text-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote size={48} className="mx-auto text-[#1A1A1A]/20 mb-8" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-6">A Note From The Founders</h3>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-12">
            "WallPro India was founded to bring large-format, <span className="italic">architectural-grade printing</span> to Hyderabad. No shortcuts. Absolute fidelity."
          </h2>
          <div className="w-[1px] h-24 bg-[#1A1A1A]/20 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left border-t border-[#1A1A1A]/10 pt-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] mb-3 text-[#1A1A1A]">Vetted Tech</h4>
              <p className="text-sm text-[#1A1A1A]/70">Equipment sourced only after evaluating multiple global manufacturers for printhead supremacy.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] mb-3 text-[#1A1A1A]">Direct Oversight</h4>
              <p className="text-sm text-[#1A1A1A]/70">As a dedicated local studio, every single inch of your project is personally overseen by our core team.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] mb-3 text-[#1A1A1A]">Zero Compromise</h4>
              <p className="text-sm text-[#1A1A1A]/70">We refuse to cut corners on surface preparation, ink quality, or UV curing times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPANDED FAQ */}
      <section id="faq" className="py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#1A1A1A]/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Frequently Asked Questions</h2>
          <p className="text-[#1A1A1A]/60 uppercase tracking-widest text-xs font-bold">Everything you need to know about our service.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {[
             { q: "Is this traditional painting or wallpaper?", a: "Neither. It is direct-to-surface digital UV printing. Our machine applies microscopic droplets of polymer ink directly onto your wall or floor for photographic sharpness, without the peeling of wallpaper." },
             { q: "Which surfaces can you print on?", a: "Almost any rigid surface. Plaster walls, glass partitions, polished wood, ceramic tiles, and concrete floors." },
             { q: "Can you print custom photos?", a: "Yes. As long as the image is high-resolution, we can print personal photographs, custom corporate logos, or 3D artwork exactly as provided." },
             { q: "How long does the print last?", a: "Architectural grade durability. Expect up to 5+ years indoors, and 3+ years outdoors with built-in UV fading and scratch resistance." },
             { q: "Is the ink waterproof and safe?", a: "Yes. Our UV-cured inks dry instantly, are completely waterproof, and are eco-friendly with no strong odors, making them safe for kids' rooms and hospitals." },
             { q: "How long does a project take?", a: "Most residential walls can be completed in a single day. There is zero drying time required." },
             { q: "Where are you located?", a: "We are based in Hyderabad, Telangana, and actively serve commercial and residential projects across Telangana and Karnataka." },
             { q: "How are prices calculated?", a: "Quotes are engineered based on precise square footage, surface complexity, and location. Request a free quote above for exact pricing." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-[#1A1A1A]/10 pb-6">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3">{faq.q}</h4>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. HIGH-CONVERSION FOOTER */}
      <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <div className="mb-8 inline-block bg-white px-6 py-4 rounded-2xl shadow-lg">
              <img src="/logo.png" alt="WallPro India" className="w-48 h-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
              Redefining interior architecture through high-precision vertical and floor printing. Transforming spaces across South India.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Print Gallery</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Contact Studio</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/40" /> 
                <a href={`tel:${displayPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{displayPhone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-green-500" /> 
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/40" /> 
                <a href="mailto:info@wallproindia.com" className="hover:text-white transition-colors">info@wallproindia.com</a>
              </li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                <MapPin size={18} className="text-white/40 shrink-0 mt-0.5" /> 
                <span className="text-white/60 text-xs">Based in Hyderabad<br/>Serving Telangana & Karnataka</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} WallPro India. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Premium Surface Engineering.</p>
        </div>
      </footer>
    </main>
  );
}