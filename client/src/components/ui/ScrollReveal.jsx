import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';



export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  className = '' 
}) => {
  const { isVisible, elementRef } = useScrollReveal({ delay });

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all duration-800 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};