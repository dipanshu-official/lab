import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavShadow, setShowNavShadow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavShadow(window.pageYOffset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Trial Header */}
      <div className="bg-sky-500 text-white text-center py-2 text-sm font-medium sticky top-0 z-50">
        Start Your 5-Day Free Trial of Pathology Lab Software Now!
        <button 
          onClick={() => scrollToSection('demo')}
          className="ml-2 inline-flex items-center text-white font-bold underline hover:no-underline transition-all"
        >
          START NOW <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className={`sticky top-8 z-40 glassmorphism-nav transition-shadow duration-300 ${showNavShadow ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
              </div>
              <div className="hidden md:block ml-4">
                <span className="text-2xl font-bold text-slate-800">
                  Pathology <span className="gradient-text">LAB</span>
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-slate-600 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50"
              >
                Get a Demo
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                
                type="button"
                className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-sky-500 hover:text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:bg-sky-100 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-600 hover:bg-sky-100 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-slate-600 hover:bg-sky-100 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                FAQs
              </button>
            </div>
            <div className="pt-4 pb-3 border-t border-slate-200">
              <div className="flex items-center px-5 gap-4">
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="w-full text-center bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get a Demo
                </button>
                 <button 
                  onClick={() => navigate('/login')}
                  className="w-full text-center bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};