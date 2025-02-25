import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageGenerationAnimationProps {
  onComplete: () => void;
  duration: number; // in milliseconds
}

// Component for animated code typing
const CodeTypingEffect: React.FC<{ text: string; delay: number; completed: boolean; highlight?: string }> = ({ 
  text, 
  delay, 
  completed,
  highlight = 'text-gray-300'
}) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (completed) return;
    
    const timeout = setTimeout(() => {
      if (displayText.length < text.length) {
        setDisplayText(text.substring(0, displayText.length + 1));
      }
    }, 30); // typing speed
    
    return () => clearTimeout(timeout);
  }, [displayText, text, completed]);
  
  return (
    <div className={`font-mono text-sm ${highlight}`}>
      {displayText}
      {displayText.length < text.length && !completed && (
        <motion.span 
          className="inline-block w-1.5 h-4 ml-0.5 bg-primary-400" 
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </div>
  );
};

// Component for floating particle effect
const Particle: React.FC<{ 
  index: number;
  active: boolean;
}> = ({ index, active }) => {
  // Random properties for diverse particle appearance
  const size = Math.floor(Math.random() * 4) + 2;
  const color = index % 5 === 0 
    ? "bg-primary-400" 
    : index % 5 === 1 
      ? "bg-secondary-500" 
      : index % 5 === 2
        ? "bg-blue-500"
        : index % 5 === 3
          ? "bg-purple-500"
          : "bg-white";
  
  const opacity = Math.random() * 0.5 + 0.2;
  const duration = Math.random() * 8 + 6;
  const delay = Math.random() * 4;
  
  // Random positions within viewport
  const left = `${Math.random() * 100}%`;
  const top = `${Math.random() * 100}%`;
  
  return active ? (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{
        width: size,
        height: size,
        left,
        top,
        opacity: 0,
      }}
      animate={{
        opacity: [0, opacity, 0],
        y: [0, Math.random() > 0.5 ? -100 : 100],
        x: [0, Math.random() > 0.5 ? -50 : 50],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  ) : null;
};

// Component for grid visualization
const GridEffect: React.FC<{active: boolean}> = ({active}) => {
  return active ? (
    <motion.div 
      className="absolute inset-0 z-0 opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 2 }}
    >
      <div className="w-full h-full grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-primary-500/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.01, duration: 0.5 }}
          />
        ))}
      </div>
    </motion.div>
  ) : null;
};

// Component for UI snippets
const UISnippet: React.FC<{
  delay: number;
  type: 'nav' | 'card' | 'button' | 'hero';
}> = ({ delay, type }) => {
  let content;
  
  switch(type) {
    case 'nav':
      content = (
        <div className="h-10 w-full bg-gray-800 rounded-lg flex items-center px-3">
          <div className="w-8 h-8 rounded-full bg-primary-500/40 mr-auto"></div>
          <div className="flex space-x-4 ml-auto">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-12 h-3 bg-gray-600 rounded"></div>
            ))}
          </div>
        </div>
      );
      break;
    case 'hero':
      content = (
        <div className="h-32 w-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg p-4 flex flex-col justify-center">
          <div className="w-40 h-6 bg-gradient-to-r from-primary-500/40 to-secondary-500/40 rounded mb-2"></div>
          <div className="w-56 h-4 bg-gray-600 rounded mb-4"></div>
          <div className="flex space-x-2">
            <div className="w-20 h-8 bg-primary-600/40 rounded"></div>
            <div className="w-20 h-8 bg-gray-700/40 rounded border border-gray-600/40"></div>
          </div>
        </div>
      );
      break;
    case 'card':
      content = (
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
          <div className="flex mb-3">
            <div className="w-8 h-8 rounded-full bg-secondary-500/30"></div>
            <div className="ml-2">
              <div className="h-3 w-20 bg-white/30 rounded mb-1"></div>
              <div className="h-2 w-16 bg-white/20 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/20 rounded"></div>
            <div className="h-2 w-5/6 bg-white/20 rounded"></div>
            <div className="h-2 w-4/6 bg-white/20 rounded"></div>
          </div>
        </div>
      );
      break;
    case 'button':
      content = (
        <div className="flex flex-col space-y-2">
          <div className="h-8 w-32 bg-primary-500/40 rounded"></div>
          <div className="h-8 w-32 bg-secondary-500/40 rounded"></div>
          <div className="h-8 w-32 bg-gray-700/40 rounded border border-gray-600/40"></div>
        </div>
      );
      break;
    default:
      content = null;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay, 
        duration: 0.4, 
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
    >
      {content}
    </motion.div>
  );
};

// Main animation component
const PageGenerationAnimation: React.FC<PageGenerationAnimationProps> = ({
  onComplete,
  duration = 4500 // Updated default duration
}) => {
  const [phase, setPhase] = useState(1);
  const [codeCompleted, setCodeCompleted] = useState(false);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const particlesCount = 30;
  const particles = useRef(Array.from({ length: particlesCount }, (_, i) => i));
  
  // Multiple code snippets for different phases
  const fileTypes = [
    { name: 'aref-ai-landing.tsx', type: 'react' },
    { name: 'styles.css', type: 'css' },
    { name: 'platform.config.js', type: 'js' }
  ];
  
  const codeSnippets = {
    react: [
      "import React from 'react';",
      "import { motion } from 'framer-motion';",
      "",
      "const ArefAI = () => {",
      "  return (",
      "    <main className='bg-dark text-white'>",
      "      <Navbar />",
      "      <HeroSection title='Put AI to Work' />",
      "      <SolutionsSection />",
      "      <UseCasesSection />",
      "      <PlatformSection />",
      "      <FooterSection />",
      "    </main>",
      "  );",
      "};",
      "",
      "export default ArefAI;"
    ],
    css: [
      ".gradient-text {",
      "  background: linear-gradient(to right, #38bdf8, #8b5cf6);",
      "  -webkit-background-clip: text;",
      "  background-clip: text;",
      "  color: transparent;",
      "}",
      "",
      ".hero-section {",
      "  min-height: 100vh;",
      "  display: flex;",
      "  flex-direction: column;",
      "  justify-content: center;",
      "  background: radial-gradient(circle, rgba(13,13,13,1) 0%, rgba(18,18,18,1) 100%);",
      "}"
    ],
    js: [
      "// Enterprise AI Platform Configuration",
      "const platformConfig = {",
      "  security: {",
      "    encryption: 'AES-256',",
      "    authentication: 'OAuth2 + MFA',",
      "    dataPrivacy: 'SOC2 compliant'",
      "  },",
      "  models: ['gpt-4', 'claude-3', 'PaLM-2'],",
      "  rag: {",
      "    vectorStores: ['Pinecone', 'Milvus'],",
      "    chunkStrategy: 'semantic'",
      "  }",
      "};"
    ]
  };
  
  // Syntax highlighting classes based on file type
  const getHighlightClass = (line: string, fileType: string): string => {
    if (fileType === 'react') {
      if (line.includes('import')) return 'text-purple-400';
      if (line.includes('const') || line.includes('let') || line.includes('var')) return 'text-blue-400';
      if (line.includes('return')) return 'text-purple-400';
      if (line.includes('className')) return 'text-yellow-400';
      if (line.includes('<') && line.includes('>')) return 'text-orange-400';
      if (line.includes('export')) return 'text-purple-400';
    } else if (fileType === 'css') {
      if (line.includes('{') || line.includes('}')) return 'text-gray-300';
      if (line.match(/^(\s+)[a-z-]+:/)) return 'text-blue-400';
      if (line.match(/:[^;]+;/)) return 'text-green-400';
      if (line.match(/^\.[a-zA-Z-]+/)) return 'text-yellow-400';
    } else if (fileType === 'js') {
      if (line.includes('//')) return 'text-gray-500';
      if (line.includes('const') || line.includes('let') || line.includes('var')) return 'text-blue-400';
      if (line.match(/'.+'/)) return 'text-green-400';
      if (line.includes(':')) return 'text-yellow-400';
    }
    
    return 'text-gray-300';
  };
  
  // Animation timing
  useEffect(() => {
    // Phase transitions with more detailed sub-phases
    const phaseTimings = {
      // Code generation phase (0-30%)
      codePhase1: duration * 0.1,  // First file
      codePhase2: duration * 0.2,  // Second file
      codePhase3: duration * 0.3,  // Third file
      
      // Component visualization phase (30-60%)
      compPhase: duration * 0.3,    // Start component layout
      
      // Styling and refinement phase (60-85%)
      stylePhase: duration * 0.6,   // Apply styling
      finalPhase: duration * 0.85   // Final touches
    };
    
    // File switching and code phases
    const timer1 = setTimeout(() => {
      setActiveFileIndex(1);
    }, phaseTimings.codePhase1);
    
    const timer2 = setTimeout(() => {
      setActiveFileIndex(2);
    }, phaseTimings.codePhase2);
    
    const timer3 = setTimeout(() => {
      setCodeCompleted(true);
      setPhase(2); // Move to component phase
    }, phaseTimings.codePhase3);
    
    const timer4 = setTimeout(() => {
      setPhase(3); // Move to styling phase
    }, phaseTimings.stylePhase);
    
    const timer5 = setTimeout(() => {
      setPhase(4); // Move to final phase
    }, phaseTimings.finalPhase);
    
    // Animation completion
    const completionTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, duration);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(completionTimer);
    };
  }, [duration, onComplete]);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark z-0">
        {/* Particle effects */}
        {particles.current.map((i) => (
          <Particle key={i} index={i} active={true} />
        ))}
        
        {/* Grid effect in phase 2+ */}
        <GridEffect active={phase >= 2} />
        
        {/* Background gradient evolution */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              'radial-gradient(circle at 30% 70%, rgba(56,189,248,0.05), transparent 50%)',
              'radial-gradient(circle at 30% 70%, rgba(56,189,248,0.15), transparent 50%)',
              'radial-gradient(circle at 30% 70%, rgba(56,189,248,0.25), transparent 50%)'
            ]
          }}
          transition={{ 
            duration: duration / 1000,
            times: [0, 0.6, 1]
          }}
        />
        
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.05), transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.15), transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.25), transparent 50%)'
            ]
          }}
          transition={{ 
            duration: duration / 1000,
            times: [0, 0.6, 1]
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Header text */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-xl font-mono text-primary-400"
            animate={{ 
              color: ['#38bdf8', '#8b5cf6', '#38bdf8'] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <span className="inline-block">
              {phase === 1 && "// Generating Code..."}
              {phase === 2 && "// Assembling Components..."}
              {phase === 3 && "// Applying Styles..."}
              {phase === 4 && "// Finalizing Website..."}
            </span>
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left side: Code generation */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`file-${activeFileIndex}`}
                className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="px-4 py-2 bg-gray-800 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400 font-mono">
                    {fileTypes[activeFileIndex].name}
                  </div>
                </div>
                <div className="p-4 space-y-1 text-left h-64 overflow-y-auto">
                  {codeSnippets[fileTypes[activeFileIndex].type as keyof typeof codeSnippets].map((line, index) => (
                    <CodeTypingEffect
                      key={`${fileTypes[activeFileIndex].type}-${index}`}
                      text={line}
                      delay={index * 100}
                      completed={codeCompleted}
                      highlight={getHighlightClass(line, fileTypes[activeFileIndex].type)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right side: Component visualization */}
          <div className="w-full">
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <UISnippet type="nav" delay={0.1} />
                  <UISnippet type="hero" delay={0.3} />
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <UISnippet type="card" delay={0.5} />
                    <UISnippet type="card" delay={0.6} />
                    <UISnippet type="card" delay={0.7} />
                    <UISnippet type="card" delay={0.8} />
                  </div>
                  
                  <UISnippet type="button" delay={1.0} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Progress indicator */}
        <motion.div 
          className="mt-8 w-full bg-gray-800/50 h-1 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: duration / 1000,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PageGenerationAnimation; 