'use client';

import React from 'react';

// Import all components
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PlatformSection from '@/components/PlatformSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import StaticModelArchitecture from '@/components/StaticModelArchitecture';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white relative">
      <InteractiveBackground />
      <Navbar />
      <HeroSection />
      <StaticModelArchitecture />
      <PlatformSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 