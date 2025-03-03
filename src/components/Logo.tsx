import React from 'react';
import HummingbirdAnimation from './HummingbirdAnimation';

const Logo: React.FC = () => {
  return (
    <div className="custom-logo">
      <div className="neural-logo relative w-40 h-16">
        {/* Neural Network Background */}
        <div className="neural-network" />
        
        {/* Neural Connections */}
        <div className="neural-connection connection-1" style={{ width: '40px', transform: 'rotate(30deg)' }} />
        <div className="neural-connection connection-2" style={{ width: '25px', transform: 'rotate(-45deg)' }} />
        <div className="neural-connection connection-3" style={{ width: '35px', transform: 'rotate(15deg)' }} />
        <div className="neural-connection connection-4" style={{ width: '30px', transform: 'rotate(-30deg)' }} />
        
        {/* Hummingbird Animation */}
        <div className="absolute inset-0">
          <HummingbirdAnimation
            onSceneComplete={(sceneIndex) => {
              // Activate corresponding neural connection based on scene
              const connections = document.querySelectorAll('.neural-connection');
              connections.forEach((conn, i) => {
                if (i === sceneIndex) {
                  conn.classList.add('connection-active');
                  setTimeout(() => conn.classList.remove('connection-active'), 1000);
                }
              });
            }}
          />
        </div>
        
        {/* Logo Text */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pl-4">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            nanominds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo; 