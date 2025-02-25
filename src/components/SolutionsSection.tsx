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
  features, 
  gradient 
}) => {
  return (
    <motion.div
      className={`card group hover:shadow-lg hover:shadow-${gradient}/10 relative overflow-hidden backdrop-blur-md border-[0.5px] border-white/10`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${gradient}/5 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      {/* Decorative element */}
      <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-transparent to-white/5"></div>
      
      <div className="relative z-10">
        <div className={`flex items-center mb-4 text-${gradient} group-hover:text-${gradient} transition-colors`}>
          <div className="text-${gradient} mr-3">{icon}</div>
          <div className={`h-px flex-grow bg-${gradient}/30`}></div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-3 group-hover:text-${gradient} transition-colors`}>
          {title}
        </h3>
        
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-5">
          {description}
        </p>
        
        <div className="space-y-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-2">
              <svg className={`h-5 w-5 text-${gradient} mt-0.5 flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-400 group-hover:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Cognitive Agent Networks',
      description:
        'Multi-agent AI systems that collaborate to solve complex enterprise problems with emergent intelligence',
      features: [
        'Self-organizing task decomposition',
        'Inter-agent negotiation protocols',
        'Adaptive reasoning strategies',
        'Collective memory architecture'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
          <line x1="12" y1="2" x2="12" y2="12"></line>
        </svg>
      ),
      gradient: 'primary-500'
    },
    {
      title: 'Neural Enterprise Assistants',
      description:
        'Context-aware AI assistants that integrate deeply with your enterprise knowledge and workflows',
      features: [
        'Personalized knowledge graphs',
        'Conversational context retention',
        'Enterprise system integration',
        'Proprietary data alignment'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      gradient: 'secondary-500'
    },
    {
      title: 'Quantum-Inspired Search',
      description:
        'Semantic search technology inspired by quantum principles to understand context and discover non-obvious connections',
      features: [
        'Semantic knowledge entanglement',
        'Superposition query processing',
        'Uncertainty-aware results',
        'Multi-dimensional relevance scoring'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <circle cx="11" cy="11" r="3"></circle>
        </svg>
      ),
      gradient: 'blue-500'
    },
    {
      title: 'Generative Knowledge Mining',
      description:
        'Extract structured insights from unstructured data by learning complex relationships between concepts',
      features: [
        'Self-supervised entity extraction',
        'Neural relationship mapping',
        'Cross-document synthesis',
        'Temporal pattern recognition'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      gradient: 'purple-500'
    },
    {
      title: 'Autonomous Decision Systems',
      description:
        'AI-powered decision support systems that combine predictive analytics with causal reasoning',
      features: [
        'Counterfactual scenario analysis',
        'Explainable decision pathways',
        'Multi-objective optimization',
        'Active uncertainty reduction'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      gradient: 'indigo-500'
    },
    {
      title: 'Synapse API Platform',
      description:
        'Next-generation API platform for seamless integration of AI capabilities with your existing systems',
      features: [
        'Adaptive rate management',
        'Zero-trust security architecture',
        'Real-time capability discovery',
        'Cross-model translation layer'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      gradient: 'cyan-500'
    },
  ];

  return (
    <section id="solutions" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-500/5 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-secondary-500/5 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-blue-500/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-[5%] left-[50%] w-[25%] h-[25%] bg-purple-500/5 rounded-full filter blur-3xl opacity-40"></div>
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
            <svg className="h-12 w-12 mx-auto text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Revolutionary AI Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Next-generation AI capabilities designed for enterprise transformation. 
            Our platform empowers organizations with cutting-edge artificial intelligence 
            while maintaining human-centered control, security, and governance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <a href="#platform" className="btn-primary inline-flex items-center">
            Explore Our Platform
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection; 