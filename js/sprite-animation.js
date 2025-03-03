// Advanced Sprite-based Hummingbird Animation with Neural Node Interaction
document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const framesCount = 3;
    const frameDuration = 25; // milliseconds per frame (40 fps)
    const basePath = 'assets/sprites/hummingbird-frame';
    const fileExt = '.svg';
    
    // Get the hummingbird container and neural nodes
    const logoContainer = document.querySelector('.neural-logo');
    if (!logoContainer) return;
    
    // Get neural nodes
    const neuralNodes = document.querySelectorAll('.neural-node');
    if (!neuralNodes.length) return;
    
    // Remove existing hummingbird image if present
    const existingHummingbird = document.querySelector('.logo-hummingbird');
    if (existingHummingbird) {
        existingHummingbird.remove();
    }
    
    // Create a div container for the hummingbird sprite
    const spriteContainer = document.createElement('div');
    spriteContainer.className = 'hummingbird-sprite-container';
    logoContainer.appendChild(spriteContainer);
    
    // Create image elements for all frames
    const frames = [];
    for (let i = 1; i <= framesCount; i++) {
        const frame = document.createElement('img');
        frame.src = `${basePath}${i}${fileExt}`;
        frame.alt = `Hummingbird animation frame ${i}`;
        frame.className = 'hummingbird-sprite';
        frame.style.display = 'none'; // Hide all frames initially
        spriteContainer.appendChild(frame);
        frames.push(frame);
    }
    
    // Show the first frame
    if (frames.length > 0) {
        frames[0].style.display = 'block';
    }
    
    // Create neural node glow effect when visited
    const nodeGlowStyle = document.createElement('style');
    nodeGlowStyle.textContent = `
        @keyframes visitedNodeGlow {
            0% { transform: scale(1); filter: drop-shadow(0 0 2px var(--accent-color)); }
            50% { transform: scale(1.8); filter: drop-shadow(0 0 8px var(--accent-color)); }
            100% { transform: scale(1); filter: drop-shadow(0 0 2px var(--accent-color)); }
        }
        
        .node-visited {
            animation: visitedNodeGlow 1s ease-out forwards;
        }
        
        @keyframes connectionActivate {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
        }
        
        .connection-active {
            animation: connectionActivate 1s ease-out forwards;
        }
    `;
    document.head.appendChild(nodeGlowStyle);
    
    // Function to cycle through animation frames - faster during flight
    let currentFrame = 0;
    let currentSpeed = frameDuration;
    function animateSprite() {
        // Hide all frames
        frames.forEach(frame => frame.style.display = 'none');
        
        // Show current frame
        frames[currentFrame].style.display = 'block';
        
        // Advance to next frame
        currentFrame = (currentFrame + 1) % framesCount;
    }
    
    // Start the animation loop
    const animationInterval = setInterval(animateSprite, currentSpeed);
    
    // Function to create an atomic thought particle
    function createAtomicThought(x, y) {
        const thought = document.createElement('div');
        thought.className = 'atomic-thought';
        thought.style.left = x + 'px';
        thought.style.top = y + 'px';
        logoContainer.appendChild(thought);
        
        // Remove the element after animation completes
        setTimeout(() => {
            thought.remove();
        }, 1000);
    }
    
    function visitNode(nodeIndex) {
        // Add visited class to the node
        neuralNodes[nodeIndex].classList.add('node-visited');
        
        // Activate connecting lines
        const connections = document.querySelectorAll('.neural-connection');
        if (connections.length > nodeIndex) {
            connections[nodeIndex].classList.add('connection-active');
        }
        
        // Create several atomic thought particles at this node
        const nodeRect = neuralNodes[nodeIndex].getBoundingClientRect();
        const logoRect = logoContainer.getBoundingClientRect();
        
        // Position relative to the logo container
        const nodeX = nodeRect.left - logoRect.left + 3; // center of node
        const nodeY = nodeRect.top - logoRect.top + 3;  // center of node
        
        // Create multiple thought particles with slight randomization
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const offsetX = Math.random() * 10 - 5;
                const offsetY = Math.random() * 10 - 5;
                createAtomicThought(nodeX + offsetX, nodeY + offsetY);
            }, i * 200);
        }
        
        // Remove the class after the animation completes
        setTimeout(() => {
            neuralNodes[nodeIndex].classList.remove('node-visited');
            if (connections.length > nodeIndex) {
                connections[nodeIndex].classList.remove('connection-active');
            }
        }, 1000);
    }
    
    // Position the hummingbird initially at the leftmost starting position (static)
    spriteContainer.style.position = 'absolute';
    spriteContainer.style.left = '20px';
    spriteContainer.style.top = '50%';
    spriteContainer.style.transform = 'translateY(-50%)';
    
    // Set slower wing flapping in static position
    clearInterval(animationInterval);
    currentSpeed = frameDuration * 1.5; // Slower at rest
    let staticAnimationInterval = setInterval(animateSprite, currentSpeed);
    
    // Start the flight animation after a delay
    setTimeout(() => {
        clearInterval(staticAnimationInterval);
        startFlightAnimation();
    }, 3000);
    
    // Flight path animation setup with precise timing for node interactions
    function startFlightAnimation() {
        // Return to normal wing flapping speed for flight
        clearInterval(animationInterval);
        currentSpeed = frameDuration;
        animationInterval = setInterval(animateSprite, currentSpeed);
        
        // Define the node positions to fly to (relative to the logo container)
        const nodes = [
            { x: 20, y: '50%', nodeIndex: -1 },     // Starting position (left side)
            { x: 60, y: '20%', nodeIndex: 0 },      // Node 1 (Top)
            { x: 85, y: '70%', nodeIndex: 1 },      // Node 2 (Bottom)
            { x: 110, y: '40%', nodeIndex: 2 },     // Node 3 (Middle)
            { x: 140, y: '30%', nodeIndex: 3 },     // Node 4 (Right)
            { x: 20, y: '50%', nodeIndex: -1 }      // Back to starting position
        ];
        
        // Create the keyframes for the flight path with varying speeds
        let keyframes = '';
        let animationTimings = [];
        const totalDuration = 15; // seconds
        
        nodes.forEach((node, index) => {
            if (index === 0) {
                animationTimings.push(0);
            } else {
                // Calculate distance from previous node
                const prevNode = nodes[index - 1];
                const dx = Math.abs(parseFloat(node.x) - parseFloat(prevNode.x));
                const dy = index % 2 ? 0.3 : 0.2; // Approximate vertical distance factor
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Calculate time proportional to distance (with min/max constraints)
                const segmentDuration = Math.max(0.5, Math.min(4, distance / 40));
                
                // Add to cumulative timing
                animationTimings.push(animationTimings[index - 1] + segmentDuration);
            }
        });
        
        // Normalize timings to total duration
        const totalTime = animationTimings[animationTimings.length - 1];
        animationTimings = animationTimings.map(time => (time / totalTime) * 100);
        
        // Create keyframes with the calculated timings
        nodes.forEach((node, index) => {
            const percent = animationTimings[index];
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
                animation: flyBetweenNodes ${totalDuration}s 1 ease-in-out !important;
            }
        `;
        document.head.appendChild(flyingStyle);
        
        // Start the flight animation
        spriteContainer.classList.add('flying-hummingbird');
        
        // Schedule node visits based on the animation timings
        nodes.forEach((node, index) => {
            if (node.nodeIndex >= 0) {
                // Calculate when to trigger the node visit effect
                const visitTime = (animationTimings[index] / 100) * totalDuration * 1000;
                
                // Schedule the visit
                setTimeout(() => {
                    visitNode(node.nodeIndex);
                    
                    // Speed up wing flapping during node visits
                    clearInterval(animationInterval);
                    currentSpeed = frameDuration * 0.6; // Faster during node visit
                    const newInterval = setInterval(animateSprite, currentSpeed);
                    
                    // Return to normal speed after the visit
                    setTimeout(() => {
                        clearInterval(newInterval);
                        currentSpeed = frameDuration;
                        animationInterval = setInterval(animateSprite, currentSpeed);
                    }, 1000);
                    
                }, visitTime);
            }
        });
        
        // After completing one full cycle, return to static position
        setTimeout(() => {
            // Remove the flying animation
            spriteContainer.classList.remove('flying-hummingbird');
            
            // Return to leftmost position
            spriteContainer.style.left = '20px';
            spriteContainer.style.top = '50%';
            spriteContainer.style.transform = 'translateY(-50%)';
            
            // Slow down wing flapping when back to resting position
            clearInterval(animationInterval);
            currentSpeed = frameDuration * 1.5; // Slower at rest
            animationInterval = setInterval(animateSprite, currentSpeed);
            
            // After a rest period, start another flight cycle
            setTimeout(startFlightAnimation, 5000);
        }, totalDuration * 1000);
    }
});