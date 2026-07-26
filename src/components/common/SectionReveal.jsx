import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * SectionReveal — Animates children into view when scrolled into viewport.
 * Props:
 *   delay   — stagger delay in seconds (default 0)
 *   dir     — 'up' | 'left' | 'right' (default 'up')
 *   amount  — how much of the element must be visible (default 0.15)
 */
export const SectionReveal = ({ children, delay = 0, dir = 'up', amount = 0.15, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });

  const offsets = {
    up:    { y: 32, x: 0 },
    left:  { y: 0,  x: -32 },
    right: { y: 0,  x: 32 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[dir] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
