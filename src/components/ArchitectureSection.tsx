import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureSection = () => {
  const features = [
    {
      title: "Atomic Thought Process",
      description: "Our breakthrough approach meticulously isolates and optimizes elemental cognitive building blocks, creating programmable intelligence that outperforms generic models.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      title: "Flexible Deployment",
      description: "Deploy wherever makes sense for your business—your private cloud, enterprise data center, or edge devices. Maintain full control over your data and deployment strategy.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "10-100x Efficiency",
      description: "Our AI models deliver exceptional performance with less compute, memory, and energy—revolutionizing what's possible with enterprise AI deployments.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-dark/95 py-24" id="architecture">
      <div className="container mx-auto max-w-[1400px] px-6">
        {/* Architecture Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Revolutionizing Enterprise AI
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nanominds creates hyper-efficient AI by deconstructing intelligence into its most fundamental components—the atomic units of thought. Our breakthrough approach meticulously isolates and optimizes these elemental cognitive building blocks.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary px-8 py-3">
                Explore Architecture
              </button>
              <button className="btn-outline px-8 py-3">
                View Documentation
              </button>
            </div>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl backdrop-blur-sm border border-blue-500/10" />
            {/* Add your architecture visualization here */}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-blue-500/10 rounded-xl p-6 group hover:border-blue-500/30 transition-all duration-300"
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

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "10-100x", label: "More Efficient" },
            { value: "95%", label: "Less Compute" },
            { value: "12ms", label: "Average Latency" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection; 