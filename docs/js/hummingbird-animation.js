// Realistic Hummingbird Flight Animation
document.addEventListener('DOMContentLoaded', () => {
    // Get the hummingbird element
    const hummingbird = document.querySelector('.logo-hummingbird');
    if (!hummingbird) return;
    
    const neuralLogo = document.querySelector('.neural-logo');
    if (!neuralLogo) return;
    
    // Load the SVG into the page to make it accessible for animation
    fetch(hummingbird.src)
        .then(response => response.text())
        .then(svgContent => {
            // Create a temporary div to hold the SVG content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = svgContent;
            const svgElement = tempDiv.querySelector('svg');
            
            // Add necessary animation classes
            svgElement.classList.add('animated-hummingbird');
            
            // Replace the image with the inline SVG
            hummingbird.parentNode.replaceChild(svgElement, hummingbird);
            
            // Now we can animate specific parts of the SVG
            const wing = svgElement.querySelector('#wing');
            if (wing) {
                // Add rapid wing flapping animation
                wing.style.animation = 'wingFlap 0.1s infinite alternate ease-in-out';
                wing.style.transformOrigin = '20px 16px';
            }
            
            // Start the flight path animation after a short delay
            setTimeout(() => {
                svgElement.classList.add('flying-hummingbird');
            }, 2000);
        })
        .catch(error => console.error('Error loading SVG:', error));
    
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
            position: absolute;
            width: 30px;
            height: 30px;
            z-index: 5;
            filter: drop-shadow(0 0 2px rgba(99, 102, 241, 0.5));
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            animation: flyBetweenNodes 15s infinite ease-in-out;
        }
        
        @keyframes wingFlap {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-20deg); }
        }
        
        /* Make the animation speed up during flight between nodes */
        .flying-hummingbird #wing {
            animation-duration: 0.08s !important;
        }
    `;
    document.head.appendChild(style);
});