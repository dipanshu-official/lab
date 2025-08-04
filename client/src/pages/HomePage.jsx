import React from 'react';
import { Header } from '../components/sections/Header';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter antialiased">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
      <Contact />
    </div>
  );
};