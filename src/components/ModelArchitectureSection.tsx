import React from 'react';

const StaticSvgIcon = ({ children }: { children: React.ReactNode }) => (
  <div 
    style={{ 
      transform: 'none !important',
      animation: 'none !important',
      transition: 'none !important',
      willChange: 'auto',
      isolation: 'isolate',
      position: 'relative',
      display: 'inline-block'
    }}
  >
    {children}
  </div>
);

interface StaticContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  [key: string]: any;
}

const StaticContainer = ({ children, className = '', id, ...props }: StaticContainerProps) => (
  <div 
    className={className}
    id={id}
    {...props}
    style={{ 
      transform: 'none !important',
      animation: 'none !important',
      transition: 'none !important',
      willChange: 'auto',
      isolation: 'isolate',
      position: 'relative'
    }}
  >
    {children}
  </div>
);

const ModelArchitectureSection = () => {
  const architectureFeatures = [
    {
      title: "Model Orchestration",
      description: "Seamlessly coordinate specialized tiny models to create powerful, efficient intelligent systems",
      points: [
        "Dynamic model composition",
        "Intelligent task routing",
        "Cross-model communication",
        "Optimized resource allocation"
      ],
      icon: (
        <StaticSvgIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform-gpu">
            <rect x="4" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 10h8M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </StaticSvgIcon>
      )
    },
    {
      title: "Domain Specialization",
      description: "Purpose-built tiny models that excel in specific domains while maintaining minimal computational footprint",
      points: [
        "Domain-specific architectures",
        "Focused knowledge encoding",
        "Efficient inference paths",
        "Minimal resource requirements"
      ],
      icon: (
        <StaticSvgIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform-gpu">
            <rect x="4" y="4" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="4" y="10" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="4" y="16" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </StaticSvgIcon>
      )
    },
    {
      title: "Neural Architecture",
      description: "Advanced neural pathways that enable efficient communication and collaboration between specialized models",
      points: [
        "Adaptive neural routing",
        "Lightweight connections",
        "Distributed processing",
        "Scalable architecture"
      ],
      icon: (
        <StaticSvgIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform-gpu">
            <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 10h4v4h-4z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </StaticSvgIcon>
      )
    },
    {
      title: "Intelligent Synthesis",
      description: "Combine outputs from multiple specialized models to generate comprehensive, nuanced solutions",
      points: [
        "Multi-model integration",
        "Context-aware fusion",
        "Adaptive aggregation",
        "Coherent output generation"
      ],
      icon: (
        <StaticSvgIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform-gpu">
            <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </StaticSvgIcon>
      )
    }
  ];

  const codeSnippet = `from nanominds.core import MicroArchitect, KnowledgeDistiller
from nanominds.optimizer import BinaryQuantizer, SynapticPruner
import nanominds.domains as domains

def create_efficient_model(domain="medical_imaging", task="anomaly_detection", deployment="hybrid"):
    # 1. Extract domain and task-specific atomic thought patterns
    atomic_thought_units = domains.extract_cognitive_primitives(domain, task)
    
    # 2. Design optimized architecture based on deployment scenario
    if deployment == "hybrid":
        # Create architecture that can scale from data center to edge
        model_architecture = ArchitectDesigner.create_scalable(
            atomic_units=atomic_thought_units,
            scaling_range={"min_complexity": 0.05, "max_complexity": 1.0},
            intelligence_threshold=0.97,  # 97% of full model capability
            efficiency_priority=0.8  # High priority on efficiency
        )
        
    # 3. Compose atomic thought units into efficient cognitive structures
    efficient_model = KnowledgeDistiller.transfer(
        source="foundation_model_v3",
        target_architecture=model_architecture,
        thought_units=atomic_thought_units,
        programmable_interfaces=["api", "sdk", "enterprise_connect"]
    )
    
    # 4. Apply advanced efficiency techniques with adaptive scaling
    optimized_model = SynapticPruner.optimize(
        model=efficient_model,
        quantization=AdaptiveQuantizer(precision="dynamic"),
        compute_reduction="breakthrough",  # Achieve exceptional efficiency
        deployment_profile={
            "datacenter": {"performance": "high", "efficiency": "balanced"},
            "edge": {"performance": "balanced", "efficiency": "maximum"}
        }
    )
    
    return optimized_model  # An enterprise-ready, domain-specific AI with breakthrough efficiency`;

  return (
    <StaticContainer className="relative bg-gradient-to-b from-dark/95 to-black/95 py-32 xl:py-40" id="architecture">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <StaticContainer className="container relative mx-auto max-w-[1600px] px-6 xl:px-12">
        {/* Code Terminal Section */}
        <StaticContainer className="mb-32">
          <div className="relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur-xl border border-blue-500/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-blue-500/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-sm text-gray-400 font-mono">nanominds_core.py</span>
            </div>
            {/* Terminal Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm xl:text-base font-mono animate-typing">
                <code className="language-python text-blue-300 opacity-0 animate-fade-in">
                  {codeSnippet}
                </code>
              </pre>
            </div>
            {/* Execution Output */}
            <div className="border-t border-blue-500/10 bg-black/40 p-4">
              <div className="font-mono text-sm space-y-1">
                <div className="text-green-400 opacity-0 animate-fade-in-delay-1">{'>>'} Initializing NanoMinds Core...</div>
                <div className="text-blue-400 opacity-0 animate-fade-in-delay-2">{'>>'} Loading domain primitives...</div>
                <div className="text-purple-400 opacity-0 animate-fade-in-delay-3">{'>>'} Optimizing neural pathways...</div>
                <div className="text-blue-400 opacity-0 animate-fade-in-delay-4">{'>>'} Applying synaptic pruning...</div>
                <div className="text-green-400 opacity-0 animate-fade-in-delay-5">{'>>'} Model optimization complete!</div>
                <div className="text-emerald-400 mt-2 opacity-0 animate-fade-in-delay-6">
                  Result: Model optimization successful
                  <br />
                  Efficiency: Breakthrough reduction in compute achieved
                  <br />
                  Performance: Exceptional accuracy maintained
                </div>
              </div>
            </div>
          </div>
        </StaticContainer>

        <StaticContainer className="text-center mb-20 xl:mb-28">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 xl:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Advanced Model Architecture
          </h2>
          <p className="text-gray-300 text-lg md:text-xl xl:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            A revolutionary approach to AI that combines specialized tiny models into powerful, efficient systems.
          </p>
        </StaticContainer>

        <StaticContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
          {architectureFeatures.map((feature, i) => (
            <StaticContainer
              key={i}
              className="group relative bg-black/40 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 xl:p-10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <StaticContainer className="flex items-center mb-6 xl:mb-8">
                <StaticContainer className="relative w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-black/60 to-black/40 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-500 shadow-lg">
                  {feature.icon}
                </StaticContainer>
                <StaticContainer className="ml-5 flex-1">
                  <h3 className="text-2xl xl:text-3xl font-semibold text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {feature.title}
                  </h3>
                </StaticContainer>
              </StaticContainer>

              <p className="text-gray-300 text-base xl:text-lg leading-relaxed mb-8 font-light">
                {feature.description}
              </p>

              <ul className="space-y-4">
                {feature.points.map((point, index) => (
                  <li key={index} className="flex items-start text-base xl:text-lg text-gray-400 group/item">
                    <span className="mr-3 mt-1.5 text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300">
                      <StaticSvgIcon>
                        <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M3.5 6L5.5 8L8.5 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </StaticSvgIcon>
                    </span>
                    <span className="group-hover/item:text-gray-300 transition-colors duration-300">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced gradient overlays */}
              <StaticContainer className="absolute top-0 right-0 w-48 h-48 xl:w-64 xl:h-64 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-tr-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div />
              </StaticContainer>
              <StaticContainer className="absolute bottom-0 left-0 w-48 h-48 xl:w-64 xl:h-64 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-bl-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div />
              </StaticContainer>
            </StaticContainer>
          ))}
        </StaticContainer>

        <StaticContainer className="relative h-px w-full my-24 xl:my-32">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </StaticContainer>

        <StaticContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
          {[
            { value: "Breakthrough", label: "Efficiency", sublabel: "Redefining what's possible" },
            { value: "Lightning", label: "Response", sublabel: "Think at the speed of light" },
            { value: "Unmatched", label: "Accuracy", sublabel: "Precision in every task" },
            { value: "Minimal", label: "Footprint", sublabel: "Maximum impact, minimal resources" }
          ].map((stat, i) => (
            <StaticContainer
              key={i}
              className="group relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-blue-500/10 rounded-xl p-8 xl:p-10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-200 font-medium mb-1 xl:text-lg">
                {stat.label}
              </div>
              <div className="text-sm xl:text-base text-gray-400 font-light">
                {stat.sublabel}
              </div>
              {/* Stat card gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </StaticContainer>
          ))}
        </StaticContainer>
      </StaticContainer>
    </StaticContainer>
  );
};

export default ModelArchitectureSection; 