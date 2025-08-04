import React from 'react';
import { ArrowRight } from 'lucide-react';



export const Button= ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl focus:ring-emerald-400',
    secondary: 'bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg focus:ring-sky-400',
    outline: 'border border-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-5 h-5 ml-2" />}
    </button>
  );
};