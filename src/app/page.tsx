"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import ThreeHero from "@/components/ThreeHero";

interface ScheduleSlot {
  time: string;
  title: string;
  coach: string;
  spots: number;
  total: number;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"ATHLETE" | "WARRIOR" | "ELITE">("ATHLETE");
  const [selectedClass, setSelectedClass] = useState<ScheduleSlot | null>(null);

  const scheduleData: ScheduleSlot[] = [
    { time: "06:00 AM", title: "STRENGTH & CONDITIONING", coach: "Marcus Vance", spots: 4, total: 12 },
    { time: "09:30 AM", title: "HIIT CROSSFIT", coach: "Sarah Jenkins", spots: 8, total: 15 },
    { time: "12:00 PM", title: "POWER YOGA", coach: "Elena Rostov", spots: 0, total: 10 },
    { time: "05:30 PM", title: "METCON BURN", coach: "Marcus Vance", spots: 11, total: 20 },
    { time: "07:00 PM", title: "OLYMPIC LIFTING", coach: "David Chen", spots: 3, total: 8 },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- SEO / JSON-LD SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Hsini Fitness",
            "url": "https://fitness.hsini.dev",
            "logo": "https://fitness.hsini.dev/logo.png",
            "image": "https://fitness.hsini.dev/images/kinetic-1.webp",
            "description": "Premium training facility offering Strength & Conditioning, CrossFit, Yoga, and BodyBike.",
            "telephone": "(555) 123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Fitness Blvd.",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10001",
              "addressCountry": "US"
            },
            "founder": {
              "@type": "Person",
              "name": "Mohamed Hsini",
              "url": "https://github.com/hsinidev"
            },
            "sameAs": [
              "https://github.com/hsinidev",
              "https://www.linkedin.com/in/hsinidev/"
            ]
          })
        }}
      />

      <Navbar />

      {/* --- 3D HERO SECTION --- */}
      <ThreeHero />

      {/* --- DISCOVER OUR CLASSES --- */}
      <section id="classes" className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Programs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">DISCOVER OUR CLASSES</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              From high-intensity intervals to restorative yoga, find the perfect class to meet your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { slug: "gym", title: "Strength", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", desc: "Build muscle and pure power." },
              { slug: "crossfit", title: "CrossFit", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", desc: "High-intensity functional movement." },
              { slug: "yoga", title: "Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", desc: "Flexibility, core, and balance." },
              { slug: "bodycombat", title: "Combat", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop", desc: "Martial arts inspired cardio." },
              { slug: "bodybike", title: "BodyBike", img: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=800&auto=format&fit=crop", desc: "High-intensity indoor cycling sessions." }
            ].map((prog) => (
              <Link 
                key={prog.slug} 
                href={`/programs/${prog.slug}`}
                className="group relative h-[400px] rounded-2xl overflow-hidden block bg-zinc-900"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${prog.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{prog.title}</h3>
                  <p className="text-zinc-300 text-sm mb-4">
                    {prog.desc}
                  </p>
                  <span className="text-orange-500 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM FACILITIES --- */}
      <section className="py-24 bg-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" alt="Gym Facility" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">The Facility</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              PREMIUM EQUIPMENT, <br/> EXPERT GUIDANCE.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              We provide an unparalleled training environment. Outfitted with state-of-the-art rogue equipment, dedicated lifting platforms, and spacious class studios, Hsini Fitness is designed for those who take their health seriously.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-2">15k+</h4>
                <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wide">Sq. Ft Facility</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-2">40+</h4>
                <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wide">Weekly Classes</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-2">12</h4>
                <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wide">Elite Trainers</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white mb-2">24/7</h4>
                <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wide">Member Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEMBERSHIP PLANS (Restored Dark Configurator) --- */}
      <section id="memberships" className="py-24 bg-[#0B0B0C] border-y border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]">DOMAIN SELECTION</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-white uppercase">CHOOSE YOUR PASS</h2>
            <p className="text-zinc-500 font-medium text-sm mt-3">Toggle profiles to dynamically highlight performance packages</p>
            
            <div className="mt-10 inline-flex bg-[#161618] p-1.5 border border-zinc-800 rounded-lg overflow-hidden">
              {(["ATHLETE", "WARRIOR", "ELITE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-md ${activeTab === tab ? "bg-red-600 text-white shadow-lg" : "text-zinc-500 hover:text-white"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-6">
            
            {/* Card Module A */}
            <div className={`bg-[#161618] p-8 border transition-all duration-500 flex flex-col justify-between min-h-[450px] rounded-2xl group ${activeTab === "ATHLETE" ? "border-red-500 scale-105 opacity-100 z-10 shadow-2xl shadow-red-500/5" : "border-zinc-800 opacity-50 hover:opacity-80"}`}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400">ATHLETE DOMAIN</span>
                  {activeTab === "ATHLETE" && <span className="text-[9px] font-bold bg-red-500/20 text-red-500 px-2 py-0.5 border border-red-500/30 tracking-wider rounded-sm">SELECTED</span>}
                </div>
                <h3 className="text-5xl font-black text-white tracking-tight mt-6">$149<span className="text-sm text-zinc-500 font-medium tracking-normal">/MO</span></h3>
                <ul className="mt-8 space-y-4 text-sm text-zinc-400 font-semibold">
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Full Access to Strength & Conditioning Floor</li>
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Basic Performance Parameter Tracking</li>
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Standard Heavy Machinery Vault Clearance</li>
                </ul>
              </div>
              <button className="w-full mt-12 py-4 bg-transparent border-2 border-zinc-700 text-white font-black uppercase tracking-wider text-xs hover:border-red-500 hover:bg-red-500 transition-all duration-300 rounded-xl">
                SECURE THIS PASS
              </button>
            </div>

            {/* Card Module B */}
            <div className={`bg-[#161618] p-8 border transition-all duration-500 flex flex-col justify-between min-h-[450px] rounded-2xl group ${activeTab === "WARRIOR" ? "border-red-500 scale-105 opacity-100 z-10 shadow-2xl shadow-red-500/5" : "border-zinc-800 opacity-50 hover:opacity-80"}`}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400">WARRIOR MISSION</span>
                  {activeTab === "WARRIOR" && <span className="text-[9px] font-bold bg-red-500/20 text-red-500 px-2 py-0.5 border border-red-500/30 tracking-wider rounded-sm">SELECTED</span>}
                </div>
                <h3 className="text-5xl font-black text-white tracking-tight mt-6">$199<span className="text-sm text-zinc-500 font-medium tracking-normal">/MO</span></h3>
                <ul className="mt-8 space-y-4 text-sm text-zinc-400 font-semibold">
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Unlimited CrossFit Group Bookings</li>
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Access to High-Intensity Engine Rooms</li>
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Bi-Weekly Kinetic Progress Diagnostics</li>
                </ul>
              </div>
              <button className="w-full mt-12 py-4 bg-red-600 border border-red-600 text-white font-black uppercase tracking-wider text-xs hover:bg-red-700 transition-all duration-300 rounded-xl">
                SECURE THIS PASS
              </button>
            </div>

            {/* Card Module C */}
            <div className={`bg-[#161618] p-8 border transition-all duration-500 flex flex-col justify-between min-h-[450px] rounded-2xl group ${activeTab === "ELITE" ? "border-red-500 scale-105 opacity-100 z-10 shadow-2xl shadow-red-500/5" : "border-zinc-800 opacity-50 hover:opacity-80"}`}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400">ELITE LAYER</span>
                  {activeTab === "ELITE" && <span className="text-[9px] font-bold bg-red-500/20 text-red-500 px-2 py-0.5 border border-red-500/30 tracking-wider rounded-sm">SELECTED</span>}
                </div>
                <h3 className="text-5xl font-black text-white tracking-tight mt-6">$299<span className="text-sm text-zinc-500 font-medium tracking-normal">/MO</span></h3>
                <ul className="mt-8 space-y-4 text-sm text-zinc-400 font-semibold">
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> 1-on-1 Dedicated Human Architect Coach</li>
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> Custom Tailored Bio-Nutrition Systems</li>
                  <li className="flex items-center gap-3"><span className="text-red-500">✔</span> 24/7 Priority Physical Pipeline Access</li>
                </ul>
              </div>
              <button className="w-full mt-12 py-4 bg-transparent border-2 border-zinc-700 text-white font-black uppercase tracking-wider text-xs hover:border-red-500 hover:bg-red-500 transition-all duration-300 rounded-xl">
                SECURE THIS PASS
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- CLASS SCHEDULE --- */}
      <section id="schedule" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Schedule</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">UPCOMING CLASSES</h2>
          </div>

          <div className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
            {scheduleData.map((slot, index) => (
              <div 
                key={index}
                onClick={() => setSelectedClass(slot)}
                className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 last:border-0 hover:bg-zinc-900/50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold text-white bg-zinc-800 px-4 py-2 rounded-lg">{slot.time}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white">{slot.title}</h4>
                    <p className="text-sm text-zinc-400 mt-1">Instructor: {slot.coach}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-8">
                  <div className="text-left md:text-right">
                    <span className={`text-sm font-bold ${slot.spots === 0 ? "text-red-500" : "text-emerald-500"}`}>
                      {slot.spots === 0 ? "Waitlist" : `${slot.spots} Spots Left`}
                    </span>
                  </div>
                  <button className="px-6 py-2 bg-white text-zinc-900 text-sm font-bold rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR TRAINERS --- */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">The Team</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">EXPERT COACHES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marcus Vance", role: "Head Trainer", img: "/images/kinetic-6.webp" },
              { name: "Sarah Jenkins", role: "CrossFit Coach", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop" },
              { name: "Elena Rostov", role: "Yoga Instructor", img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop" }
            ].map((coach, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-6">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${coach.img}")` }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{coach.name}</h3>
                <span className="text-orange-500 font-medium text-sm">{coach.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING MODAL --- */}
      {selectedClass && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-1">{selectedClass.title}</h3>
            <p className="text-zinc-400 text-sm mb-6">with {selectedClass.coach} at {selectedClass.time}</p>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm font-semibold text-zinc-300 mb-2">
                <span>Class Capacity</span>
                <span>{selectedClass.total - selectedClass.spots} / {selectedClass.total}</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-500 transition-all duration-500" 
                  style={{ width: `${((selectedClass.total - selectedClass.spots) / selectedClass.total) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSelectedClass(null); alert("Class Booked successfully!"); }}>
              <div className="mb-6">
                <label className="block text-sm font-bold text-zinc-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
                />
              </div>
              <button 
                type="submit" 
                disabled={selectedClass.spots === 0}
                className={`w-full py-3.5 rounded-full font-bold transition-colors ${selectedClass.spots === 0 ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-500 text-white"}`}
              >
                {selectedClass.spots === 0 ? "Join Waitlist" : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="w-full bg-zinc-950 pt-20 pb-10 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="Hsini Fitness" className="h-16 w-auto mb-6" />
              <p className="text-zinc-400 max-w-sm">
                A premium training facility for those dedicated to improving their health, strength, and lifestyle.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Classes", "Schedule", "Trainers", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-zinc-400">
                <li>fitness.hsini.dev</li>
                <li>contact@hsini.dev</li>
              </ul>
              <div className="mt-6 flex gap-4">
                <a href="https://github.com/hsinidev" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
                  <svg className="w-6 h-6 text-orange-500 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/hsinidev/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-orange-500 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>© 2026 Hsini Fitness. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
