// Realistic Hummingbird Flight Animation with Enhanced Wing Flapping
document.addEventListener('DOMContentLoaded', () => {
    // Get the hummingbird element
    const hummingbird = document.querySelector('.logo-hummingbird');
    if (!hummingbird) return;
    
    const neuralLogo = document.querySelector('.neural-logo');
    if (!neuralLogo) return;
    
    // Create a style element for our animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes wingFlap {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-25deg); }
        }
        
        @keyframes secondaryWingFlap {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-15deg); }
        }
        
        .animated-hummingbird {
            position: absolute !important;
            width: 40px !important;
            height: 40px !important;
            z-index: 10 !important;
        }
        
        /* Wing animation styles */
        .animated-hummingbird #wing {
            animation: wingFlap 0.05s infinite alternate linear;
            transform-origin: 20px 16px;
        }
        
        .animated-hummingbird .secondaryWing {
            animation: secondaryWingFlap 0.05s infinite alternate linear;
            transform-origin: 18px 16px;
        }
    `;
    document.head.appendChild(style);
    
    // Load the SVG into the page to make it accessible for animation
    fetch(hummingbird.src)
        .then(response => response.text())
        .then(svgContent => {
            // Create a temporary div to hold the SVG content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = svgContent;
            const svgElement = tempDiv.querySelector('svg');
            
            if (!svgElement) {
                console.error('SVG element not found in loaded content');
                return;
            }
            
            // Add necessary animation classes
            svgElement.classList.add('animated-hummingbird');
            
            // Set dimensions explicitly to ensure visibility
            svgElement.setAttribute('width', '40');
            svgElement.setAttribute('height', '40');
            
            // Replace the image with the inline SVG
            hummingbird.parentNode.replaceChild(svgElement, hummingbird);
            console.log('SVG replaced successfully');
            
            // Wait briefly for the DOM to settle
            setTimeout(() => {
                // Check if the SVG elements were properly injected
                const wing = document.querySelector('.animated-hummingbird #wing');
                const secondaryWing = document.querySelector('.animated-hummingbird .secondaryWing');
                
                if (wing) {
                    console.log('Wing element found, applying animation');
                    wing.style.animation = 'wingFlap 0.05s infinite alternate linear';
                    wing.style.transformOrigin = '20px 16px';
                } else {
                    console.error('Wing element not found in injected SVG');
                }
                
                if (secondaryWing) {
                    console.log('Secondary wing found, applying animation');
                    secondaryWing.style.animation = 'secondaryWingFlap 0.05s infinite alternate linear';
                    secondaryWing.style.transformOrigin = '18px 16px';
                }
                
                // Create flying animation
                setTimeout(createFlyingAnimation, 500);
            }, 100);
        })
        .catch(error => console.error('Error loading SVG:', error));
    
    // Create flying animation between neural nodes
    function createFlyingAnimation() {
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
        
        // Add flight animation styles
        const flyingStyle = document.createElement('style');
        flyingStyle.textContent = `
            @keyframes flyBetweenNodes {
                ${keyframes}
            }
            
            .flying-hummingbird {
                animation: flyBetweenNodes 15s infinite ease-in-out !important;
            }
        `;
        document.head.appendChild(flyingStyle);
        
        // Start the flight animation
        const animatedBird = document.querySelector('.animated-hummingbird');
        if (animatedBird) {
            console.log('Starting flight animation');
            animatedBird.classList.add('flying-hummingbird');
            
            // When flying, make wings flap faster
            const wing = document.querySelector('.animated-hummingbird #wing');
            if (wing) {
                wing.style.animationDuration = '0.04s';
            }
        } else {
            console.error('Animated hummingbird not found for flight animation');
        }
    }
});