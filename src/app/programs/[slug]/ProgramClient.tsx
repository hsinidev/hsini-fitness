"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

// Define the precise matrix of content for all 5 specific gym programs
const programData = {
  gym: {
    name: "Strength & Conditioning",
    description: "Build muscle, increase power, and refine your physique in our state-of-the-art free weight and machine area.",
    features: [
      "Access to premium Olympic lifting platforms",
      "Extensive selection of dumbbells up to 150lbs",
      "Guided machine circuits for targeted hypertrophy",
      "Dedicated stretching and mobility zones"
    ],
    machines: [
      "Hip Thrust Machine", "Leg Press Machine", "Glute Kickback Machine", 
      "Cable Tower / Crossover", "Seated Hip Abductor", "Seated Hip Adductor", 
      "StairMaster", "Incline Bench Press", "Shoulder Press Machine", 
      "Pec Deck / Chest Fly", "Lat Pulldown Machine", "Captain's Chair", 
      "Ab Crunch Machine", "Smith Machine", "Hyperextension Bench"
    ],
    tools: [
      "Barbells & Weight Plates", "Dumbbells", "Kettlebells", "Ankle Straps", 
      "D-Handles & Rope Attachments", "Resistance Bands", "Stability Balls", 
      "Medicine Balls", "Yoga Mats", "Plyo Boxes"
    ],
    exercises: [
      "Hip Thrusts", "Glute Bridges", "Barbell Back Squats", "Goblet Squats", 
      "Bulgarian Split Squats", "Romanian Deadlifts", "Glute Kickbacks", 
      "Cable Pull-Throughs", "Abductor Pulses", "Sumo Deadlifts", 
      "Incline Bench Press", "Dumbbell Lateral Raises", "Cable Face Pulls", 
      "Lat Pulldowns", "Pull-Ups / Chin-Ups", "Dumbbell Chest Flies", 
      "Overhead Shoulder Press", "Planks", "Hanging Leg Raises", 
      "Russian Twists", "Kettlebell Swings", "Walking Lunges", 
      "Reverse Lunges", "Frog Pumps", "Bird-Dogs"
    ],
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
    ],
    schedule: [
      { day: "Mon-Fri", time: "6:00 AM - 9:00 PM" },
      { day: "Weekends", time: "8:00 AM - 6:00 PM" }
    ]
  },
  crossfit: {
    name: "CrossFit / HIIT",
    description: "High-intensity interval training designed to push your cardiovascular and muscular endurance to the absolute limit.",
    features: [
      "Daily WODs (Workout of the Day) programmed by experts",
      "High-energy group environment",
      "Mastery of gymnastics and Olympic weightlifting",
      "Scalable movements for all fitness levels"
    ],
    machines: [
      "Concept2 RowErg", "Assault AirBike / Rogue Echo", "Concept2 SkiErg", 
      "Assault Runner / TrueForm", "GHD Machine"
    ],
    tools: [
      "Olympic Barbells & Bumper Plates", "Spring Collars", "Kettlebells", 
      "Medicine Balls / Slam Balls", "Heavy D-Ball Sandbags", "Speed Jump Ropes", 
      "Plyo Boxes", "Gymnastic Rings", "Climbing Ropes", "AbMats", 
      "Gymnastic Grips", "Weightlifting Belts", "Knee Sleeves", "Wrist Wraps", 
      "Chalk", "Resistance Bands", "Weight Vests", "Parallettes", 
      "Farmer's Walk Handles", "Sleds / Prowlers"
    ],
    exercises: [
      "Thrusters", "Wall Balls", "Burpees", "Kipping Pull-Ups", 
      "Chest-to-Bar Pull-Ups", "Muscle-Ups", "Clean and Jerks", "Snatches", 
      "Toes-to-Bar (T2B)", "Double-Unders", "Box Jumps", "Handstand Push-Ups", 
      "Handstand Walks", "Kettlebell Swings", "Deadlifts", "Overhead Squats", 
      "Medicine Ball Cleans", "Walking Overhead Lunges", "Devils Presses", 
      "Dumbbell Snatches", "Rope Climbs", "Sandbag Cleans", "Bike Sprints", 
      "Rowing Sprints"
    ],
    bgImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop"
    ],
    schedule: [
      { day: "Mon, Wed, Fri", time: "5:30 AM | 12:00 PM | 6:00 PM" },
      { day: "Tue, Thu", time: "6:00 AM | 5:30 PM" },
      { day: "Saturday", time: "9:00 AM Community WOD" }
    ]
  },
  yoga: {
    name: "Yoga & Mobility",
    description: "Restore your body, improve flexibility, and build core strength in our calming, temperature-controlled studio.",
    features: [
      "Vinyasa, Power, and Restorative flows",
      "Infrared heated classes available",
      "Breathwork and meditation integration",
      "Premium mats and props provided"
    ],
    machines: [
      "Yoga Headstand Bench", "Aerial Yoga Hammock", "Yoga Wall Ropes", 
      "Yoga Back Bender Bench", "Yoga Backless Chair", "Inversion Table"
    ],
    tools: [
      "Yoga Mat", "Yoga Blocks (Cork/Bamboo)", "Yoga Straps", "Yoga Bolsters", 
      "Yoga Blankets", "Meditation Cushions", "Yoga Wheels", "Yoga Towels", 
      "Sandbags", "Eye Pillows", "Yoga Wedges", "Yoga Rings", "Toe Separators"
    ],
    exercises: [
      "Downward-Facing Dog", "Warrior I, II, and III", "Tree Pose", "Child's Pose", 
      "Cobra Pose", "Upward-Facing Dog", "Bridge Pose", "Triangle Pose", 
      "Half Moon Pose", "Cat-Cow Stretch", "Plank Pose (Chaturanga)", 
      "Chair Pose", "Pigeon Pose", "Bound Angle Pose", "Corpse Pose (Savasana)", 
      "Camel Pose", "Wheel Pose", "Hanging Forward Bend", "Boat Pose", 
      "Crow Pose", "Shoulder Stand", "Headstand", "Happy Baby Pose", 
      "Supine Spinal Twist", "Extended Side Angle"
    ],
    bgImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop"
    ],
    schedule: [
      { day: "Mon, Wed", time: "7:00 AM | 7:00 PM" },
      { day: "Tue, Thu", time: "12:00 PM | 6:30 PM" },
      { day: "Sunday", time: "10:00 AM Recovery Flow" }
    ]
  },
  bodycombat: {
    name: "Body Composition & Combat",
    description: "Focused on building lean muscle, burning fat simultaneously, and striking your way to superior fitness.",
    features: [
      "Non-contact, high-intensity cardio",
      "Draws from Karate, Boxing, Taekwondo",
      "Burns up to 740 calories per class",
      "Drives immense core strength and agility"
    ],
    machines: [
      "InBody / BIA Scale", "DEXA Scan Machine", "BOD POD", 
      "Concept2 RowErg", "Assault AirBike", "Manual Curved Treadmill", 
      "Weighted Gym Sled"
    ],
    tools: [
      "Skinfold Calipers", "Gulick Anthropometric Tape", "3D Body Scanners", 
      "Heart Rate Monitors", "Hydrostatic Weighing Tanks"
    ],
    exercises: [
      "Barbell Deadlifts", "Barbell Back Squats", "Barbell Bench Press", 
      "Dumbbell Walking Lunges", "Push-Ups", "Pull-Ups / Chin-Ups", 
      "Overhead Dumbbell Press", "Burpees", "Kettlebell Swings", "Thrusters", 
      "Mountain Climbers", "Jump Squats", "Planks", "Bicycle Crunches", 
      "Pallof Press", "Sled Pushes", "Farmer's Carries", "Medicine Ball Slams"
    ],
    bgImage: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop"
    ],
    schedule: [
      { day: "Tue, Thu", time: "6:00 AM | 7:00 PM" },
      { day: "Saturday", time: "11:00 AM" }
    ]
  },
  bodybike: {
    name: "Indoor Cycling",
    description: "An immersive, rhythm-based indoor cycling experience designed to build endurance and burn serious calories.",
    features: [
      "Premium magnetic resistance bikes",
      "Immersive lighting and sound systems",
      "Live metric tracking on large screens",
      "High-energy instructors and playlists"
    ],
    machines: [
      "Indoor Studio Spin Bikes", "Magnetic Resistance Bikes", 
      "Friction Resistance Bikes", "Direct-Drive Smart Trainers", "Roller Trainers"
    ],
    tools: [
      "Cycling Shoes", "Padded Cycling Shorts", "Sweat Towels", 
      "Insulated Water Bottles", "Heart Rate Monitor", "Cycling Socks", 
      "Smartphone Mount", "Wireless Earbuds"
    ],
    exercises: [
      "Seated Flat", "Standing Flat", "Seated Climb", "Standing Climb", 
      "Jumps / Lifts", "Sprints", "Isolated Leg Training", "Hovering", 
      "Chest Press / Upper Body Pulses"
    ],
    bgImage: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=600&auto=format&fit=crop"
    ],
    schedule: [
      { day: "Mon, Wed, Fri", time: "6:00 AM | 5:30 PM" },
      { day: "Saturday", time: "8:30 AM" }
    ]
  }
};

type ProgramSlug = keyof typeof programData;

export default function ProgramClient({ slug }: { slug: string }) {

  const [selectedItem, setSelectedItem] = useState<{name: string, type: 'Machine' | 'Tool' | 'Exercise'} | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  const program = programData[slug as ProgramSlug];

  if (!program) {
    notFound();
  }

  // Generate dynamic images for the modal based on type
  const getModalImage = (type: string) => {
    if (type === 'Machine') return "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop";
    if (type === 'Tool') return "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop"; // Exercise
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- SEO / JSON-LD SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": program.name,
            "provider": {
              "@type": "HealthAndBeautyBusiness",
              "name": "Hsini Fitness",
              "url": "https://fitness.hsini.dev"
            },
            "description": program.description,
            "areaServed": "New York",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": `Monthly membership for ${program.name}`
            }
          })
        }}
      />

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        {(() => {
          const videoMapping: Record<string, string> = {
            bodycombat: "/badycompat_.mp4"
          };
          const videoSrc = videoMapping[slug];
          if (videoSrc) {
            return (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={program.bgImage}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            );
          }
          return (
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lightning-damaged-park opacity-75"
              style={{ backgroundImage: `url("${program.bgImage}")` }}
            />
          );
        })()}
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
            Class & Equipment Overview
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 lightning-title">
            {program.name}
          </h1>
          <a href="#details" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors mt-8">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
        </div>
      </section>

      {/* --- CONTENT DETAILS --- */}
      <section id="details" className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-16">
          
          {/* Left Column: Description, Features & Huge Data Lists */}
          <div className="xl:col-span-8">
            <h2 className="text-3xl font-bold text-white mb-6">About This Training</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              {program.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-2"></div>
                      <span className="text-zinc-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                  Primary Machines
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.machines.map((machine, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedItem({ name: machine, type: 'Machine' })}
                      className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-md font-medium hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {machine}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                  Tools & Accessories
                </h3>
                <ul className="space-y-3">
                  {program.tools.map((tool, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => setSelectedItem({ name: tool, type: 'Tool' })}
                        className="flex items-center gap-3 text-zinc-400 text-sm font-medium hover:text-white transition-colors cursor-pointer text-left w-full"
                      >
                        <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
                        {tool}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Core Exercises
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.exercises.map((exercise, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedItem({ name: exercise, type: 'Exercise' })}
                      className="px-3 py-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm rounded-md font-medium hover:bg-orange-500/20 hover:text-orange-300 transition-colors cursor-pointer text-left"
                    >
                      {exercise}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-16 border-t border-zinc-900">
              <h3 className="text-2xl font-bold text-white mb-8">Facility Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {program.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 shadow-xl">
                    <img src={img} alt={`${program.name} gallery`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Schedule Widget */}
          <div className="xl:col-span-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sticky top-32 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Class Schedule</h3>
              <p className="text-zinc-400 text-sm mb-8">Find a time that works for you.</p>
              
              <div className="space-y-4 mb-8">
                {program.schedule.map((slot, idx) => (
                  <div key={idx} className="flex flex-col py-4 border-b border-zinc-800 last:border-0">
                    <span className="font-bold text-orange-500 mb-1">{slot.day}</span>
                    <span className="text-sm text-zinc-300 font-medium">{slot.time}</span>
                  </div>
                ))}
              </div>

              <Link href="/#schedule" className="block w-full py-4 text-center rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold transition-colors shadow-lg shadow-orange-600/20">
                Book a Session
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-zinc-950 pt-20 pb-10 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <Link href="/" className="mb-6">
            <img src="/logo.png" alt="Hsini Fitness" className="h-14 w-auto" />
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#classes" className="hover:text-white transition-colors">Classes</Link>
            <Link href="/#memberships" className="hover:text-white transition-colors">Memberships</Link>
          </div>
          <div className="flex gap-6 mb-8">
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
          <p className="text-zinc-600 text-xs">
            © 2026 Hsini Fitness. All rights reserved. | fitness.hsini.dev | contact@hsini.dev
          </p>
        </div>
      </footer>

      {/* --- DETAILS MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
            onClick={() => setSelectedItem(null)} 
          />
          
          <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden transform scale-100 transition-transform">
            {/* Modal Header / Image Area */}
            <div className="h-56 bg-zinc-950 relative flex flex-col items-center justify-center border-b border-zinc-800 overflow-hidden">
               {/* Background Image injected dynamically */}
               <div 
                 className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-500"
                 style={{ backgroundImage: `url('${getModalImage(selectedItem.type)}')` }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
               
               <div className="relative z-10 w-16 h-16 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 flex items-center justify-center mb-3 shadow-2xl">
                 <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>
               <span className="relative z-10 text-white font-black tracking-widest text-xs uppercase drop-shadow-md">
                 {selectedItem.type} PREVIEW
               </span>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-bold tracking-widest uppercase mb-4 rounded-md">
                {selectedItem.type}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedItem.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                The <strong className="text-zinc-300">{selectedItem.name}</strong> is a fundamental {selectedItem.type.toLowerCase()} utilized in our <span className="text-orange-400">{program.name}</span> program. 
                Our expert coaches will guide you through the proper mechanics, form, and safety protocols to ensure maximum efficiency and performance gains when utilizing this {selectedItem.type.toLowerCase()}.
              </p>
              <button 
                onClick={() => setSelectedItem(null)}
                className="w-full py-4 bg-white text-zinc-900 font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-lg"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

