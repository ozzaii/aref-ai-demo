import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface UseCaseTab {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  stats: { value: string; label: string }[];
}

const useCases: UseCaseTab[] = [
  {
    id: 'financial',
    label: 'Financial Services',
    title: 'AI-Powered Financial Operations',
    description:
      'Transform financial services with AI-powered risk assessment, fraud detection, and customer service automation.',
    points: [
      'Regulatory compliance monitoring with real-time alerts',
      'Customer intent prediction for personalized banking experiences',
      'Automated fraud detection with 99.7% accuracy',
      'Document processing and analysis for loan applications'
    ],
    stats: [
      { value: '85%', label: 'Reduction in processing time' },
      { value: '73%', label: 'Increase in fraud detection' },
      { value: '43%', label: 'Cost reduction' }
    ]
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Intelligent Healthcare Solutions',
    description:
      'Enhance patient care and operational efficiency with AI-powered diagnostic tools and workflow automation.',
    points: [
      'Medical image analysis and anomaly detection',
      'Patient journey optimization and resource allocation',
      'Administrative workflow automation for medical staff',
      'Predictive analytics for patient health outcomes'
    ],
    stats: [
      { value: '67%', label: 'Reduction in administrative tasks' },
      { value: '92%', label: 'Accuracy in diagnostic assistance' },
      { value: '39%', label: 'Reduction in wait times' }
    ]
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    title: 'Smart Manufacturing Intelligence',
    description:
      'Optimize production processes, predict maintenance needs, and reduce downtime with AI-powered manufacturing solutions.',
    points: [
      'Predictive maintenance to prevent equipment failures',
      'Quality control automation with computer vision',
      'Supply chain optimization and inventory management',
      'Production optimization through real-time analytics'
    ],
    stats: [
      { value: '78%', label: 'Reduction in unplanned downtime' },
      { value: '35%', label: 'Increase in production efficiency' },
      { value: '52%', label: 'Improvement in quality control' }
    ]
  },
  {
    id: 'retail',
    label: 'Retail',
    title: 'Next-Gen Retail Intelligence',
    description:
      'Enhance customer experiences and optimize operations with AI-powered retail solutions for inventory, pricing, and personalization.',
    points: [
      'Inventory optimization with demand forecasting',
      'Personalized customer recommendations at scale',
      'Dynamic pricing strategies based on market conditions',
      'Customer behavior analysis for store layout optimization'
    ],
    stats: [
      { value: '32%', label: 'Increase in conversion rate' },
      { value: '41%', label: 'Reduction in inventory costs' },
      { value: '27%', label: 'Growth in customer lifetime value' }
    ]
  },
  {
    id: 'legal',
    label: 'Legal',
    title: 'AI-Enhanced Legal Operations',
    description:
      'Accelerate legal research, contract analysis, and case preparation with AI tools designed for legal professionals.',
    points: [
      'Contract analysis and risk identification',
      'Legal research automation across vast case databases',
      'Document classification and information extraction',
      'Precedent analysis and case outcome prediction'
    ],
    stats: [
      { value: '63%', label: 'Time saved on document review' },
      { value: '45%', label: 'Cost reduction in research' },
      { value: '82%', label: 'Increase in contract processing speed' }
    ]
  }
];

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const currentCase = useCases.find(c => c.id === activeTab) || useCases[0];

  return (
    <section id="usecases" className="py-20 relative bg-gradient-to-b from-dark/50 to-dark">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Enterprise AI Use Cases</span>
          </h2>
          <p className="text-lg text-gray-300">
            Discover how leading organizations across industries are leveraging our
            AI solutions to transform operations, enhance customer experiences, and
            drive innovation.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {useCases.map(useCase => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === useCase.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {useCase.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {currentCase.title}
            </h3>
            <p className="text-lg text-gray-300">
              {currentCase.description}
            </p>
            <div className="space-y-4 mt-8">
              {currentCase.points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:col-span-2">
            <div className="card bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <h4 className="text-xl font-semibold mb-6 text-center text-white">
                Impact Metrics
              </h4>
              <div className="grid grid-cols-1 gap-y-8">
                {currentCase.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-bold mb-2 gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a href="#demo" className="btn-primary w-full text-center">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection; 