import React from 'react';
import { motion } from 'framer-motion';

const PlatformSection = () => {
  const features = [
    {
      title: 'Secure Enterprise Integration',
      description:
        'Connect to your existing data sources and systems securely. Our platform integrates with your tech stack while maintaining enterprise-grade security and compliance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: 'Multi-Model Orchestration',
      description:
        'Leverage the right AI model for each task. Our platform intelligently routes requests to specialized models based on the task requirements and performance metrics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34" />
          <path d="M14 3v4a2 2 0 0 0 2 2h4" />
          <path d="M5 12.1V13a2 2 0 0 0 2 2h7" />
          <line x1="18" y1="16" x2="18.01" y2="16" />
          <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M2 17.5v-1a2 2 0 0 1 2-2h12" />
        </svg>
      ),
    },
    {
      title: 'Advanced Retrieval Augmented Generation',
      description:
        'Enhance AI responses with your proprietary data. Our platform employs sophisticated retrieval techniques to ground AI outputs in your enterprise knowledge.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: 'Comprehensive Observability',
      description:
        'Monitor and understand your AI systems with detailed analytics. Track performance, usage patterns, and costs with our comprehensive observability tools.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="platform" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(67,56,202,0.1),transparent_50%),radial-gradient(circle_at_top_right,rgba(79,70,229,0.1),transparent_50%)] z-0" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <div className="p-2 bg-gray-900/70">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="ml-2 text-xs text-gray-400 font-mono">platform.config.js</div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm text-blue-300 overflow-x-auto">
                <pre className="text-xs sm:text-sm whitespace-pre">
{`// Enterprise AI Platform Configuration
const platformConfig = {
  security: {
    encryption: 'AES-256',
    authentication: 'OAuth2 + MFA',
    dataPrivacy: 'SOC2 compliant',
    auditLogging: true
  },
  modelOrchestration: {
    models: ['gpt-4', 'claude-3', 'PaLM-2', 'custom-fine-tuned'],
    selectionStrategy: 'adaptive',
    fallbackChain: true
  },
  rag: {
    vectorStores: ['Pinecone', 'Milvus', 'custom'],
    chunkStrategy: 'semantic',
    embeddingModels: ['OpenAI', 'HuggingFace'],
    metadataFiltering: true
  },
  observability: {
    metrics: ['latency', 'tokens', 'cost', 'accuracy'],
    monitoring: 'real-time',
    alerting: {
      thresholds: {
        cost: 1000,
        errorRate: 0.05
      }
    }
  }
};

export default platformConfig;`}
                </pre>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Enterprise-Grade AI Platform</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our professional AI platform is built for enterprises that demand security,
                scalability, and performance. Deploy with confidence using our state-of-the-art
                infrastructure and tooling.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="flex-shrink-0 mt-1 text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#demo"
                className="btn-primary inline-flex items-center"
              >
                Schedule a Platform Demo
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
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