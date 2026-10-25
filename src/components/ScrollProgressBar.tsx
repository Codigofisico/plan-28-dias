import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#FFC542] via-[#FFF3B0] to-[#D89E25] shadow-[0_0_8px_rgba(255,197,66,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
