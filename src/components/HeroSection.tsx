import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextGenerationEffect } from './TextGenerationEffect';
import Link from 'next/link';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Words for the typing effect
  const words = [
    "Enterprise AI Solutions",
    "Advanced Agent Networks",
    "Intelligent Search Systems",
    "Custom AI Assistants",
    "Data-Driven Insights"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark/90 z-0" />
      
      {/* Background animation effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-10 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Put AI to Work</span>
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                Enterprise-Grade AI Platform
              </h1>
              <div className="h-16 mt-4">
                <TextGenerationEffect words={words} className="text-gray-300" />
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Accelerate your business transformation with our professional AI solutions. 
              Deploy custom agents, assistants, and intelligent search capabilities tailored to your enterprise needs.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#demo" className="btn-primary text-center">
                Request Demo
              </Link>
              <Link href="#solutions" className="btn-outline text-center">
                Explore Solutions
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-dark bg-gray-600 flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Trusted by 200+ enterprises worldwide
              </p>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-xs font-mono text-gray-400">Enterprise AI Console</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 w-full bg-white/5 rounded-md" />
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-white/5 rounded-sm" />
                      <div className="h-4 w-5/6 bg-white/5 rounded-sm" />
                      <div className="h-4 w-2/3 bg-white/5 rounded-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="h-20 bg-white/5 rounded-md" />
                      <div className="h-20 bg-white/5 rounded-md" />
                    </div>
                    <div className="h-32 w-full bg-white/5 rounded-md" />
                    <div className="flex justify-end">
                      <div className="h-8 w-1/3 bg-primary-500/30 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection; 