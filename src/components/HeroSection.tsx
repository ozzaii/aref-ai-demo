import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextGenerationEffect } from './TextGenerationEffect';
import Link from 'next/link';

interface TerminalLine {
  type: 'input' | 'output' | 'info' | 'success' | 'error';
  content: string;
  delay: number;
}

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // High-level conceptual words
  const words = [
    "Atomic Thought Process",
    "Neural Programmability",
    "Cognitive Architecture",
    "Intelligent Synthesis",
    "Quantum Efficiency"
  ];

  const terminalSequence: TerminalLine[] = [
    { type: 'input', content: 'nanominds init --mode atomic', delay: 0 },
    { type: 'info', content: 'Initializing atomic thought process...', delay: 1000 },
    { type: 'info', content: 'Deconstructing intelligence patterns...', delay: 1500 },
    { type: 'success', content: '✓ Core efficiency breakthrough achieved', delay: 2000 },
    { type: 'success', content: '✓ Domain context established', delay: 2300 },
    { type: 'success', content: '✓ Enterprise protocols activated', delay: 2600 },
    { type: 'info', content: 'Orchestrating cognitive elements...', delay: 3000 },
    { type: 'success', content: '✓ Neural architecture optimized', delay: 3500 },
    { type: 'input', content: 'orchestrator.connect --mode enterprise', delay: 4000 },
    { type: 'info', content: 'Establishing secure pathways...', delay: 4500 },
    { type: 'success', content: '✓ Deployment matrix ready', delay: 5000 },
    { type: 'input', content: 'orchestrator.execute --task "domain_synthesis"', delay: 5500 },
    { type: 'info', content: 'Processing through atomic mesh...', delay: 6000 },
    { type: 'success', content: '✓ System ready - Optimal efficiency achieved', delay: 6500 }
  ];

  useEffect(() => {
    setMounted(true);
    
    // Animate terminal lines
    const interval = setInterval(() => {
      if (currentLineIndex < terminalSequence.length) {
        setTerminalLines(prev => [...prev, terminalSequence[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentLineIndex]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'input':
        return 'text-blue-400';
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'info':
        return 'text-gray-400';
      default:
        return 'text-white';
    }
  };

  return (
    <>
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient - more subtle and mysterious */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark to-dark/98 z-0" />
        
        {/* Neural network background effect */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0 
              }}
              animate={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'loop',
                delay: i * 0.2
              }}
            />
          ))}
      </div>

      {/* Content */}
        <div className="container mx-auto max-w-[1400px] px-6 relative z-10 mt-10 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
              className="space-y-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">nanominds</span>
                </h1>
                <h2 className="text-2xl md:text-3xl xl:text-5xl font-light mt-2 leading-tight text-gray-300">
                  Artificial Programmable Intelligence. Revolutionized.
                </h2>
                <div className="h-16 mt-6">
                  <TextGenerationEffect words={words} className="text-gray-400 font-mono text-base xl:text-lg" />
                </div>
            </div>

              <p className="text-gray-300 text-lg xl:text-xl leading-relaxed font-light">
                In Pursuit of Atomic Thought Process - Nanominds deconstructs intelligence into fundamental cognitive elements, creating a new paradigm of programmable AI that's more efficient, adaptable, and precise.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="#discover" 
                  className="btn-primary text-center group px-8 py-3 text-base xl:text-lg"
                >
                  <span className="relative inline-flex items-center">
                    Explore Possibilities
                    <motion.span
                      className="absolute -right-2 -top-2 w-2 h-2 bg-blue-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </span>
              </Link>
                <Link 
                  href="#architecture" 
                  className="btn-outline text-center px-8 py-3 text-base xl:text-lg"
                >
                  Discover Architecture
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-[500px] w-full">
                {/* Terminal window background glow */}
                <motion.div
                  className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-2xl blur-3xl"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Terminal window */}
              <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-full max-w-md bg-black/60 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 shadow-2xl overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {/* Terminal header */}
                    <div className="flex items-center justify-between mb-6 bg-black/40 p-3 rounded-lg border border-blue-500/20">
                      <div className="flex items-center space-x-4">
                        {/* System Status */}
                        <div className="flex items-center space-x-3">
                          {/* Model Status */}
                          <motion.div 
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full border border-blue-500/20">
                              <motion.div 
                                className={`w-2 h-2 rounded-full ${currentLineIndex > 3 ? 'bg-green-400' : 'bg-gray-500'}`}
                                animate={{ 
                                  opacity: currentLineIndex > 3 ? [0.5, 1] : 0.5,
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <span className="text-[10px] font-mono text-gray-400">
                                MODELS <span className="text-green-400">{Math.min(3, Math.floor(currentLineIndex / 2))}</span>/3
                              </span>
                            </div>
                            
                            {/* Hover Card */}
                            <motion.div
                              className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-md border border-blue-500/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-48 shadow-xl"
                            >
                              <div className="text-[10px] font-mono space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">finance.mdl</span>
                                  <span className={`${currentLineIndex > 3 ? 'text-green-400' : 'text-gray-500'}`}>
                                    {currentLineIndex > 3 ? '✓ 2.3mb' : 'loading...'}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">market.mdl</span>
                                  <span className={`${currentLineIndex > 4 ? 'text-green-400' : 'text-gray-500'}`}>
                                    {currentLineIndex > 4 ? '✓ 1.8mb' : 'loading...'}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">risk.mdl</span>
                                  <span className={`${currentLineIndex > 5 ? 'text-green-400' : 'text-gray-500'}`}>
                                    {currentLineIndex > 5 ? '✓ 1.5mb' : 'loading...'}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Mesh Status */}
                          <motion.div 
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full border border-blue-500/20">
                              <motion.div 
                                className={`w-2 h-2 rounded-full ${currentLineIndex > 7 ? 'bg-blue-400' : 'bg-gray-500'}`}
                                animate={{ 
                                  opacity: currentLineIndex > 7 ? [0.5, 1] : 0.5
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <span className="text-[10px] font-mono text-gray-400">
                                MESH <span className={currentLineIndex > 7 ? 'text-blue-400' : 'text-gray-500'}>
                                  {currentLineIndex > 7 ? 'ACTIVE' : 'INIT'}
                                </span>
                              </span>
                            </div>

                            {/* Hover Card */}
                            <motion.div
                              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-md border border-blue-500/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-48 shadow-xl"
                            >
                              <div className="text-[10px] font-mono space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">neural.paths</span>
                                  <span className={`${currentLineIndex > 7 ? 'text-blue-400' : 'text-gray-500'}`}>
                                    {currentLineIndex > 7 ? '✓ optimized' : 'connecting...'}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">latency</span>
                                  <span className="text-blue-400">12ms</span>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Process Status */}
                          <motion.div 
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full border border-blue-500/20">
                              <motion.div 
                                className={`w-2 h-2 rounded-full ${
                                  currentLineIndex > 12 ? 'bg-green-400' : 
                                  currentLineIndex > 10 ? 'bg-yellow-400' : 
                                  'bg-gray-500'
                                }`}
                                animate={{ 
                                  opacity: currentLineIndex > 10 ? [0.5, 1] : 0.5
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <span className="text-[10px] font-mono text-gray-400">
                                TASK <span className={
                                  currentLineIndex > 12 ? 'text-green-400' : 
                                  currentLineIndex > 10 ? 'text-yellow-400' : 
                                  'text-gray-500'
                                }>
                                  {currentLineIndex > 12 ? 'DONE' : 
                                   currentLineIndex > 10 ? 'RUNNING' : 
                                   'READY'}
                                </span>
                              </span>
                            </div>

                            {/* Hover Card */}
                            <motion.div
                              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-md border border-blue-500/20 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-48 shadow-xl"
                            >
                              <div className="text-[10px] font-mono space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">task.type</span>
                                  <span className="text-blue-400">market_analysis</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-400">efficiency</span>
                                  <span className="text-green-400">99.8%</span>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ 
                            opacity: [0.4, 1],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="text-xs font-mono text-blue-400">nanominds</div>
                      </div>
                    </div>

                    {/* Terminal content */}
                    <div className="space-y-2 font-mono text-xs">
                      <AnimatePresence mode="popLayout">
                        {terminalLines.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${getLineColor(line.type)} font-mono`}
                          >
                            {line.type === 'input' ? (
                              <div className="flex items-center space-x-2">
                                <span className="text-blue-500">$</span>
                                <span>{line.content}</span>
                  </div>
                            ) : (
                              <div className="pl-4">{line.content}</div>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Blinking cursor */}
                      <motion.div
                        className="w-2 h-4 bg-blue-400"
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: 'reverse'
                        }}
                      />
                    </div>

                    {/* Neural network visualization */}
                    <div className="mt-6 relative h-[180px] bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-lg rounded-lg border border-blue-500/20 p-4 overflow-hidden">
                      {/* Ambient glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5"
                        animate={{
                          opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
                            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                          </linearGradient>
                        </defs>
                        {[0, 1, 2].map((i) => (
                          <motion.path
                            key={i}
                            d={`M 80 ${80 + i * 30} C 160 ${80 + i * 30}, 240 ${80 + i * 30}, 320 ${80 + i * 30}`}
                            stroke="url(#flowGradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                            animate={{
                              strokeDashoffset: [0, -20]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </svg>

                      {/* Data flow particles */}
                      <svg className="absolute inset-0 w-full h-full">
                        {[...Array(3)].map((_, i) => (
                          <motion.circle
                            key={i}
                            r="2"
                            fill={i === 0 ? "rgba(59, 130, 246, 0.5)" : 
                                  i === 1 ? "rgba(168, 85, 247, 0.5)" :
                                  "rgba(34, 197, 94, 0.5)"}
                            filter="url(#glow)"
                            initial={{ cx: 80, cy: 80 + i * 30 }}
                            animate={{
                              cx: [80, 320],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.6,
                              ease: "linear"
                            }}
                          />
                        ))}
                        <defs>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="1" />
                          </filter>
                        </defs>
                      </svg>

                      {/* Model nodes */}
                      <div className="relative h-full flex items-center justify-between px-12">
                        {/* Input nodes */}
                        <div className="flex flex-col space-y-4">
                          {[0, 1].map((i) => (
                            <motion.div
                              key={i}
                              className="h-6 w-6 relative"
                              initial={{ opacity: 0 }}
                              animate={{ 
                                opacity: currentLineIndex > (i + 3) ? 1 : 0.3,
                              }}
                            >
                              <motion.div 
                                className="absolute inset-0 bg-blue-400/20 rounded-full"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              />
                              <motion.div 
                                className="absolute inset-0 border border-blue-400/50 rounded-full"
                                animate={{
                                  scale: [1, 1.1, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* Core node */}
                        <motion.div 
                          className="h-10 w-10 relative"
                          animate={{
                            y: [0, -2, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-purple-400/20 rounded-full"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                          <motion.div 
                            className="absolute inset-0 border border-purple-400/50 rounded-full"
                            animate={{
                              scale: [1, 1.15, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                        </motion.div>

                        {/* Output nodes */}
                        <div className="flex flex-col space-y-4">
                          {[0, 1].map((i) => (
                            <motion.div
                              key={i}
                              className="h-6 w-6 relative"
                              initial={{ opacity: 0 }}
                              animate={{ 
                                opacity: currentLineIndex > (11 + i) ? 1 : 0.3,
                              }}
                            >
                              <motion.div 
                                className="absolute inset-0 bg-green-400/20 rounded-full"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              />
                              <motion.div 
                                className="absolute inset-0 border border-green-400/50 rounded-full"
                                animate={{
                                  scale: [1, 1.1, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Minimal status indicators */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 rounded-full bg-blue-400/50"
                            animate={{
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                          />
                        ))}
                    </div>
                    </div>
                  </motion.div>
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
            className="h-6 w-6 text-blue-400/40"
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

      {/* Features Section */}
      <section className="relative bg-dark/90 py-20">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "10-100x More Efficient",
                description: "Dramatically more resource-efficient than generic alternatives, revolutionizing enterprise AI deployments"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: "Task & Domain Specific",
                description: "Precisely focused models that understand the subtle patterns and context of your specific domain"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                ),
                title: "Adaptable Architecture",
                description: "Intelligent scaling from high-performance servers to resource-constrained environments"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                ),
                title: "Enterprise Ready",
                description: "Built for mission-critical applications where reliability, security, and precision matter"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-black/40 backdrop-blur-sm border border-blue-500/10 rounded-xl p-6 group hover:border-blue-500/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center text-blue-400 mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 