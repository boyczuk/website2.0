import React, { useEffect, useRef } from 'react';
import './FallingLeaves.css';

const FallingLeaves: React.FC = () => {
  const leavesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spawnLeaf = () => {
      if (!leavesContainerRef.current) return;

      const leaf = document.createElement('div');
      leaf.className = 'leaf';

      const randomLeft = Math.random() * 100; // Random horizontal start position (0% to 100%)
      const randomDuration = 10 + Math.random() * 5; // Fall duration between 10s and 15s
      const randomDelay = Math.random() * 5; // Random delay before animation starts

      leaf.style.left = `${randomLeft}%`;
      leaf.style.setProperty('--random-duration', `${randomDuration}s`);
      leaf.style.setProperty('--random-delay', `${randomDelay}s`);

      leavesContainerRef.current.appendChild(leaf);

      setTimeout(() => {
        leavesContainerRef.current?.removeChild(leaf);
      }, (randomDuration + randomDelay) * 1000);
    };

    // Spawn leaves at regular intervals
    const interval = setInterval(() => {
      spawnLeaf();
    }, 300); // Spawn a leaf every 300ms

    return () => {
      clearInterval(interval);
      if (leavesContainerRef.current) {
        leavesContainerRef.current.innerHTML = ''; // Clear leaves on cleanup
      }
    };
  }, []);

  return <div ref={leavesContainerRef} className="falling-leaves-container"></div>;
};

export default FallingLeaves;
