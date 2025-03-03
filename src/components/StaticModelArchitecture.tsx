import React from 'react';

const StaticModelArchitecture = () => {
  const features = [
    {
      title: "Model Orchestration",
      description: "Seamlessly coordinate specialized tiny models to create powerful, efficient intelligent systems",
      points: [
        "Dynamic model composition",
        "Intelligent task routing",
        "Cross-model communication",
        "Optimized resource allocation"
      ]
    },
    {
      title: "Domain Specialization",
      description: "Purpose-built tiny models that excel in specific domains while maintaining minimal computational footprint",
      points: [
        "Domain-specific architectures",
        "Focused knowledge encoding",
        "Efficient inference paths",
        "Minimal resource requirements"
      ]
    },
    {
      title: "Neural Architecture",
      description: "Advanced neural pathways that enable efficient communication and collaboration between specialized models",
      points: [
        "Adaptive neural routing",
        "Lightweight connections",
        "Distributed processing",
        "Scalable architecture"
      ]
    },
    {
      title: "Intelligent Synthesis",
      description: "Combine outputs from multiple specialized models to generate comprehensive, nuanced solutions",
      points: [
        "Multi-model integration",
        "Context-aware fusion",
        "Adaptive aggregation",
        "Coherent output generation"
      ]
    }
  ];

  const stats = [
    { value: "10-100x", label: "More Efficient" },
    { value: "0.2ms", label: "Response Time" },
    { value: "99.8%", label: "Accuracy" },
    { value: "5%", label: "Resource Usage" }
  ];

  return (
    <div 
      className="relative bg-dark/95 py-24" 
      id="architecture"
      style={{
        transform: 'none !important',
        animation: 'none !important',
        transition: 'none !important',
        willChange: 'auto',
        isolation: 'isolate'
      }}
    >
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Advanced Model Architecture
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A revolutionary approach to AI that combines specialized tiny models into powerful, efficient systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative bg-black/40 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 hover:border-blue-500/30 transition-colors duration-300"
              style={{
                transform: 'none !important',
                animation: 'none !important',
                transition: 'none !important'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 bg-black/40 rounded-lg border border-blue-500/10 flex items-center justify-center text-blue-400">
                  <div className="w-6 h-6 border-2 border-current rounded" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.points.map((point, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-400">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/50 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-bl-xl pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-20" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-black/20 backdrop-blur-sm border border-blue-500/10 rounded-xl p-6 text-center"
              style={{
                transform: 'none !important',
                animation: 'none !important',
                transition: 'none !important'
              }}
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticModelArchitecture; 