// Hummingbird Flight Animation
document.addEventListener('DOMContentLoaded', () => {
    // Get the hummingbird element and its container
    const hummingbird = document.querySelector('.logo-hummingbird');
    if (!hummingbird) return;
    
    const neuralLogo = document.querySelector('.neural-logo');
    if (!neuralLogo) return;
    
    // Define the node positions to fly to (relative to the logo container)
    const nodes = [
        { x: 20, y: '50%' },  // Starting position (left side)
        { x: 60, y: '20%' },  // Top node
        { x: 85, y: '70%' },  // Bottom node
        { x: 110, y: '40%' }, // Middle node
        { x: 140, y: '30%' }, // Right node
        { x: 20, y: '50%' }   // Back to starting position
    ];
    
    // Create the keyframes for the flight path
    let keyframes = '';
    nodes.forEach((node, index) => {
        const percent = (index / (nodes.length - 1)) * 100;
        keyframes += `
            ${percent}% {
                left: ${node.x}px;
                top: ${node.y};
                transform: translateY(-50%) ${index % 2 ? 'rotate(5deg)' : 'rotate(-5deg)'};
            }
        `;
    });
    
    // Create a style element to hold our animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes flyBetweenNodes {
            ${keyframes}
        }
        
        .flying-hummingbird {
            animation: flyBetweenNodes 12s infinite ease-in-out, wingFlap 0.2s infinite alternate ease-in-out !important;
        }
        
        @keyframes wingFlap {
            from { transform: translateY(-50%) scale(1); }
            to { transform: translateY(-50%) scale(1.05) rotate(2deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Start the animation after a delay
    setTimeout(() => {
        hummingbird.classList.add('flying-hummingbird');
    }, 3000);
});