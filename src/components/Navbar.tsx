"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const programs = [
  { name: "Gym & Weights", slug: "gym" },
  { name: "CrossFit", slug: "crossfit" },
  { name: "Yoga", slug: "yoga" },
  { name: "BodyCombat", slug: "bodycombat" },
  { name: "BodyBike", slug: "bodybike" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center -my-2">
          <img src="/logo.png" alt="Hsini Fitness Logo" className="h-16 md:h-20 w-auto object-contain transition-all duration-300" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors">Home</Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1">
              Classes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {/* Dropdown */}
            <div className={`absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl transition-all duration-200 overflow-hidden ${dropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
              {programs.map((prog) => (
                <Link 
                  key={prog.slug} 
                  href={`/programs/${prog.slug}`}
                  className="block px-5 py-3 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-orange-500 transition-colors"
                >
                  {prog.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link href="/#schedule" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors">Schedule</Link>
          <Link href="/#memberships" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors">Memberships</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/#memberships" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-colors shadow-lg shadow-orange-600/30">
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-t border-zinc-900 flex flex-col px-6 py-4 space-y-4 shadow-2xl">
          <Link href="/" className="text-lg font-semibold text-zinc-300">Home</Link>
          <div className="pt-4 border-t border-zinc-900">
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest block mb-4">Our Classes</span>
            <div className="flex flex-col space-y-3 pl-4">
              {programs.map((prog) => (
                <Link key={prog.slug} href={`/programs/${prog.slug}`} className="text-zinc-300 font-medium">
                  {prog.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#schedule" className="text-lg font-semibold text-zinc-300 pt-4 border-t border-zinc-900">Schedule</Link>
          <Link href="/#memberships" className="text-lg font-semibold text-zinc-300">Memberships</Link>
          <Link href="/#memberships" className="w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold mt-4">JOIN NOW</Link>
        </div>
      )}
    </nav>
  );
}