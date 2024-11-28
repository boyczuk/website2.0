import React, { useEffect, useRef } from 'react';
import './FallingLeaves.css';

const FallingLeaves: React.FC = () => {
  const leavesContainerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const spawnLeaf = () => {
      if (!leavesContainerRef.current) return;

      const leaf = document.createElement('div'); 
      leaf.className = 'leaf';
      const randomLeft = Math.random() * 100; 
      const randomDuration = 10 + Math.random() * 5; 
      const randomDelay = Math.random() * 5;
      const randomRotation = Math.random() * 360 - 180;


      leaf.style.left = `${randomLeft}%`;
      leaf.style.animationDuration = `${randomDuration}s`;
      leaf.style.animationDelay = `${randomDelay}s`;
      leaf.style.transform = `rotate(${randomRotation}deg)`;

      leavesContainerRef.current.appendChild(leaf); 

      setTimeout(() => {
        leavesContainerRef.current?.removeChild(leaf);
        if (Math.random() > 0.7) spawnLeaf();
      }, (randomDuration + randomDelay) * 1000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.5) spawnLeaf(); 
    }, 1000); 

    return () => {
      clearInterval(interval);
      if (leavesContainerRef.current) {
        leavesContainerRef.current.innerHTML = ''; 
      }
    };
  }, []);

  return <div ref={leavesContainerRef} className="falling-leaves-container"></div>;
};

export default FallingLeaves;
