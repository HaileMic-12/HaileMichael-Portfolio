import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Expand cursor when hovering over clickable elements
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide default cursor on desktop */
        @media (min-width: 769px) {
          body, a, button {
            cursor: none !important;
          }
        }
        /* Disable custom cursor on mobile to prevent ghosting */
        @media (max-width: 768px) {
          .custom-cursor-wrapper {
            display: none !important;
          }
        }
      `}</style>

      <motion.div
        className="custom-cursor-wrapper"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 8),
          y: mousePosition.y - (isHovering ? 24 : 8),
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '48px' : '16px',
          height: isHovering ? '48px' : '16px',
          backgroundColor: isHovering ? 'rgba(192, 132, 87, 0.2)' : '#C08457',
          border: isHovering ? '1px solid #C08457' : 'none',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;