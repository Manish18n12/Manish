import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CursorTrail: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Create a particle
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${e.clientX - size / 2}px`;
      particle.style.top = `${e.clientY - size / 2}px`;
      document.body.appendChild(particle);

      // Animate and remove
      const animation = particle.animate([
        { transform: 'scale(1)', opacity: 0.8 },
        { transform: 'scale(0)', opacity: 0 }
      ], {
        duration: 800,
        easing: 'ease-out'
      });

      animation.onfinish = () => particle.remove();
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Background Parallax Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-20"
          style={{
            x: useSpring(useMotionValue(0), springConfig),
            y: useSpring(useMotionValue(0), springConfig),
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10" />
        </motion.div>
      </div>
    </>
  );
};
