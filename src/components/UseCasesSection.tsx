import React from 'react';
import { motion } from 'framer-motion';

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Medical Intelligence",
      description: "A domain-specific AI system that analyzes medical images with specialist-level accuracy, deployable in hospital data centers for complex diagnostics or scaled down for bedside devices—providing consistent results across your healthcare network.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Financial Intelligence",
      description: "An efficient, task-specific AI that understands the language of finance, detecting fraud patterns in real-time using up to 95% less compute than traditional models while processing high volumes of transactions in your secure environment.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Manufacturing Intelligence",
      description: "A programmable AI platform that predicts equipment failures across your factory network—from centralized analysis of all production data to real-time monitoring on individual machines—providing seamless predictive maintenance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Legal Intelligence",
      description: "A domain-specific AI that processes thousands of contracts simultaneously in your data center, or analyzes individual documents on legal professionals' devices—identifying risks and inconsistencies with the expertise of a veteran attorney.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-dark py-24" id="use-cases">
      <div className="container mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            What Could You Build?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your industry with domain-specific AI that delivers unprecedented efficiency and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 group hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center text-blue-400 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300 shrink-0">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 