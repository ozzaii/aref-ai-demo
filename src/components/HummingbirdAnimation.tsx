import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  onSceneComplete?: (sceneIndex: number) => void;
}

const HummingbirdAnimation: React.FC<Props> = ({ onSceneComplete }) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  // Scene durations in seconds
  const SCENE_DURATIONS = {
    HOVER: 3,
    FLIGHT: 5,
    CELEBRATION: 2,
  };

  // Neural node positions
  const nodes = [
    { x: 20, y: '50%' },  // Start
    { x: 60, y: '20%' },  // Top
    { x: 85, y: '70%' },  // Bottom
    { x: 110, y: '40%' }, // Middle
    { x: 140, y: '30%' }, // End
  ];

  // Scene 1: Hovering Animation
  const hoverAnimation = async () => {
    await controls.start({
      y: ['0%', '-5%', '0%'],
      transition: {
        duration: SCENE_DURATIONS.HOVER,
        ease: 'easeInOut',
        repeat: 1,
      },
    });
    onSceneComplete?.(0);
  };

  // Scene 2: Flight Animation
  const flightAnimation = async () => {
    // Create keyframes for the flight path
    const flightPath = nodes.map((node, index) => ({
      x: node.x,
      y: node.y,
      rotate: index % 2 ? 5 : -5,
    }));

    await controls.start({
      x: flightPath.map(p => p.x),
      y: flightPath.map(p => p.y),
      rotate: flightPath.map(p => p.rotate),
      transition: {
        duration: SCENE_DURATIONS.FLIGHT,
        times: nodes.map((_, i) => i / (nodes.length - 1)),
        ease: 'easeInOut',
      },
    });
    onSceneComplete?.(1);
  };

  // Scene 3: Celebration Animation
  const celebrationAnimation = async () => {
    await controls.start({
      scale: [1, 1.1, 1],
      rotate: [0, 360, 0],
      transition: {
        duration: SCENE_DURATIONS.CELEBRATION,
        ease: 'easeInOut',
      },
    });
    onSceneComplete?.(2);
  };

  // Run all scenes in sequence
  const runAnimation = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    try {
      // Scene 1: Hovering
      await hoverAnimation();
      
      // Scene 2: Flight between nodes
      await flightAnimation();
      
      // Scene 3: Celebration
      await celebrationAnimation();
      
      // Reset position
      await controls.start({
        x: nodes[0].x,
        y: nodes[0].y,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.5 },
      });
    } finally {
      isAnimating.current = false;
    }
  };

  useEffect(() => {
    runAnimation();
    
    // Start a new animation cycle every 15 seconds
    const interval = setInterval(runAnimation, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Neural Nodes */}
      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-blue-500 filter drop-shadow-glow"
          style={{
            left: `${node.x}px`,
            top: node.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Hummingbird */}
      <motion.div
        animate={controls}
        initial={{ x: nodes[0].x, y: nodes[0].y }}
        className="absolute w-10 h-10 z-10"
        style={{ transformOrigin: 'center' }}
      >
        <img
          src="/assets/hummingbird_icon.svg"
          alt="Animated hummingbird"
          className="w-full h-full filter drop-shadow-md"
        />
      </motion.div>
    </div>
  );
};

export default HummingbirdAnimation; 