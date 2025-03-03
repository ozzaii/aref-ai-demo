import React from 'react';
import { motion } from 'framer-motion';

const PlatformSection = () => {
  return (
    <section id="discover" className="py-20 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/95 via-dark to-dark/98"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-blue-400/5 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/10 p-6 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full opacity-75"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full opacity-75"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full opacity-75"></div>
                </div>
                <div className="text-xs font-mono text-blue-400">orchestration.ts</div>
              </div>

              {/* Code Content */}
              <div className="space-y-4">
                <div className="font-mono text-sm">
                  <div className="text-blue-400/70">
                    <span className="text-blue-300">import</span>{' '}
                    <span className="text-blue-400">{'{'}</span> ModelOrchestrator, TinyModel <span className="text-blue-400">{'}'}</span>{' '}
                    <span className="text-blue-300">from</span> <span className="text-blue-200">'nanominds'</span>
                  </div>
                  <div className="mt-4 text-gray-400">
                    <span className="text-blue-300">const</span> orchestrator = <span className="text-blue-300">new</span>{' '}
                    <span className="text-blue-400">ModelOrchestrator</span>()
                  </div>
                  <div className="mt-4 text-gray-400">
                    <span className="text-blue-300">// Initialize domain-specific models</span>
                    <br />
                    <span className="text-blue-300">const</span> models = {'{'}
                    <br />
                    &nbsp;&nbsp;analysis: <span className="text-blue-300">new</span>{' '}
                    <span className="text-blue-400">TinyModel</span>(<span className="text-blue-200">'data-analysis'</span>),
                    <br />
                    &nbsp;&nbsp;prediction: <span className="text-blue-300">new</span>{' '}
                    <span className="text-blue-400">TinyModel</span>(<span className="text-blue-200">'time-series'</span>),
                    <br />
                    &nbsp;&nbsp;reasoning: <span className="text-blue-300">new</span>{' '}
                    <span className="text-blue-400">TinyModel</span>(<span className="text-blue-200">'logic'</span>)
                    <br />
                    {'}'}
                  </div>
                  <div className="mt-4 text-gray-400">
                    <span className="text-blue-300">// Configure neural pathways</span>
                    <br />
                    orchestrator.<span className="text-blue-400">connect</span>(models)
                    <br />
                    &nbsp;&nbsp;.<span className="text-blue-400">setPath</span>(<span className="text-blue-200">'analysis → prediction'</span>)
                    <br />
                    &nbsp;&nbsp;.<span className="text-blue-400">setPath</span>(<span className="text-blue-200">'prediction → reasoning'</span>)
                  </div>
                  <div className="mt-4 text-gray-400">
                    <span className="text-blue-300">// Execute orchestrated workflow</span>
                    <br />
                    <span className="text-blue-300">const</span> result = <span className="text-blue-300">await</span>{' '}
                    orchestrator.<span className="text-blue-400">process</span>(input)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Intelligent Orchestration
              </span>
            </h2>

            <p className="text-lg text-gray-300 font-light leading-relaxed">
              nanominds revolutionizes AI by orchestrating specialized tiny models into 
              powerful distributed intelligence networks. Each model is precision-engineered 
              for its domain, working in harmony through our advanced neural pathways.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                    <line x1="12" y1="2" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Efficient Architecture</h3>
                  <p className="text-gray-400">
                    Purpose-built tiny models that excel in specific domains while maintaining 
                    minimal computational requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intelligent Synthesis</h3>
                  <p className="text-gray-400">
                    Advanced neural pathways enable seamless communication and collaboration 
                    between specialized models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Adaptive Learning</h3>
                  <p className="text-gray-400">
                    Models continuously optimize their interactions and pathways based on 
                    real-world performance and feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-flex items-center">
                Explore the Technology
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection; 