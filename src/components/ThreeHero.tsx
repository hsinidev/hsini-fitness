"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x09090b, 0.0015); // zinc-950

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- PARTICLES ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 120; // spread
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create a circular texture for particles programmatically
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    if (context) {
        context.beginPath();
        context.arc(16, 16, 14, 0, Math.PI * 2);
        context.fillStyle = '#f97316'; // Orange 500
        context.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.25,
      map: texture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- MOUSE INTERACTION ---
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // --- RESIZE ---
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate particles slowly
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      // Mouse parallax
      camera.position.x += (mouseX * 0.01 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.01 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- GSAP TEXT ANIMATION ---
    if (textRef.current) {
      const elements = Array.from(textRef.current.children);
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.2 }
      );
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-zinc-950 border-b border-zinc-900">
      {/* Calisthenics Street Workout Nighttime Background (Lightning Flickering) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat select-none pointer-events-none transition-all duration-300 lightning-damaged-park opacity-75"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1920&auto=format&fit=crop")' }}
      />

      {/* Volumetric Street Light Beam Overlay (Flickering in Sync) */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.05)_45%,transparent_75%)] mix-blend-screen pointer-events-none select-none street-light-beam" />
      
      {/* Glowing Streetlamp Source Head */}
      <div className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_120px_60px_rgba(255,255,255,0.95)] pointer-events-none select-none z-[2] street-light-beam" />

      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-[1] opacity-60 mix-blend-screen pointer-events-none" />
      
      {/* Subtle Gradient Overlay for readability behind text, but keeping park details perfectly visible */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/10 pointer-events-none" />

      {/* Hero Text */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none mt-10">
        <span className="inline-block text-orange-500 font-bold tracking-widest uppercase text-sm mb-6 pointer-events-auto">
          Welcome to Hsini Fitness
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-white mb-8 pointer-events-auto drop-shadow-2xl lightning-title">
          ELEVATE YOUR <br className="hidden md:block"/> POTENTIAL.
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-medium pointer-events-auto drop-shadow-lg">
          Experience a world-class training facility designed for results. Expert coaching, premium equipment, and a community that pushes you further.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
          <a href="#memberships" className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-10 py-4 rounded-full transition-all text-sm uppercase tracking-wide shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            Start Free Trial
          </a>
          <a href="#classes" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-10 py-4 border border-zinc-800 rounded-full transition-all text-sm uppercase tracking-wide">
            Explore Classes
          </a>
        </div>
      </div>
    </section>
  );
}
