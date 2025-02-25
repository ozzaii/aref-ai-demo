'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all components
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import UseCasesSection from '@/components/UseCasesSection';
import PlatformSection from '@/components/PlatformSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageGenerationAnimation from '@/components/PageGenerationAnimation';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // The animation will finish in 4.5 seconds (reduced from 7 seconds)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      
      // Wait a bit after the animation completes to show the content
      setTimeout(() => {
        setShowAnimation(false);
      }, 500);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle animation completion (also called from PageGenerationAnimation)
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-dark text-white relative">
      <AnimatePresence mode="wait">
        {showAnimation ? (
          <motion.div 
            key="animation"
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
            exit={{ 
              opacity: 0,
              transition: { duration: 0.5 }
            }}
          >
            <PageGenerationAnimation 
              onComplete={handleAnimationComplete}
              duration={4500}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Navbar />
            <HeroSection />
            <SolutionsSection />
            <UseCasesSection />
            <PlatformSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 