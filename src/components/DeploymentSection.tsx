import React from 'react';
import { motion } from 'framer-motion';

const DeploymentSection = () => {
  const deploymentOptions = [
    {
      title: "Private Cloud",
      description: "Deploy in your secure cloud environment with full control over data and resources. Perfect for enterprises requiring maximum security and compliance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Edge Devices",
      description: "Scale down to resource-constrained environments without compromising performance. Ideal for IoT devices and local processing needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      features: ["Local Processing", "Minimal Resources", "Real-time Response"]
    },
    {
      title: "Hybrid Setup",
      description: "Combine cloud and edge deployments for optimal performance. Perfect for organizations needing both centralized processing and distributed intelligence.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-dark py-24" id="deployment">
      <div className="container mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Deploy Anywhere
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible deployment options that adapt to your infrastructure needs while maintaining enterprise-grade performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((option, i) => (
            <motion.div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 group hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center text-blue-400 mb-6 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {option.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {option.description}
              </p>
              
              {/* Performance Metrics */}
              <div className="pt-6 border-t border-blue-500/10">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Resource Usage</span>
                  <span className="text-green-400">Optimized</span>
                </div>
                <div className="mt-2 h-1 bg-black/40 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-green-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="btn-primary px-8 py-3">
            Start Deployment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentSection; 