import React from 'react';
import { motion } from 'framer-motion';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  features: string[];
  gradient: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  title, 
  description, 
  icon, 
  delay, 
  features
}) => {
  return (
    <motion.div
      className="card group relative overflow-hidden backdrop-blur-md border-[0.5px] border-blue-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-400/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.3, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
      />
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-blue-500/10 to-transparent"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      
      {/* Interactive particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
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
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 p-6">
        <motion.div 
          className="flex items-center mb-4 text-blue-400 group-hover:text-blue-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="text-blue-400 mr-3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {icon}
          </motion.div>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-400/30 to-transparent" />
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300"
          layout
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-400 group-hover:text-gray-300 transition-colors mb-5"
          layout
        >
          {description}
        </motion.p>
        
        <div className="space-y-2">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              className="flex items-start space-x-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.svg 
                className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
                fill="currentColor"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </motion.svg>
              <motion.span 
                className="text-sm text-gray-400 group-hover:text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      </div>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Model Orchestration',
      description:
        'Seamlessly coordinate specialized tiny models to create powerful, efficient intelligent systems',
      features: [
        'Dynamic model composition',
        'Intelligent task routing',
        'Cross-model communication',
        'Optimized resource allocation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
          <line x1="12" y1="2" x2="12" y2="12"></line>
        </svg>
      ),
      gradient: 'blue-400'
    },
    {
      title: 'Domain Specialization',
      description:
        'Purpose-built tiny models that excel in specific domains while maintaining minimal computational footprint',
      features: [
        'Domain-specific architectures',
        'Focused knowledge encoding',
        'Efficient inference paths',
        'Minimal resource requirements'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      gradient: 'blue-400'
    },
    {
      title: 'Neural Architecture',
      description:
        'Advanced neural pathways that enable efficient communication and collaboration between specialized models',
      features: [
        'Adaptive neural routing',
        'Lightweight connections',
        'Distributed processing',
        'Scalable architecture'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      gradient: 'blue-400'
    },
    {
      title: 'Intelligent Synthesis',
      description:
        'Combine outputs from multiple specialized models to generate comprehensive, nuanced solutions',
      features: [
        'Multi-model integration',
        'Context-aware fusion',
        'Adaptive aggregation',
        'Coherent output generation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      gradient: 'blue-400'
    }
  ];

  return (
    <section id="architecture" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-blue-400/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-blue-300/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="inline-block mb-3"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          >
            <svg className="h-12 w-12 mx-auto text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Artificial Programmable Intelligence
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 font-light">
            A revolutionary approach to AI that orchestrates domain-specific tiny models
            into powerful intelligent systems. Achieve extraordinary results without the
            computational overhead of traditional large models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              delay={index}
              features={solution.features}
              gradient={solution.gradient}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <a href="#discover" className="btn-primary inline-flex items-center">
            Discover the Architecture
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection; 