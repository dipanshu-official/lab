import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-800">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Optimize Your Lab?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-4 text-lg leading-6 text-sky-100">
            Connect with our team to learn more about Pathology LIS and how it can revolutionize your diagnostic operations.
          </p>
        </ScrollReveal>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <ScrollReveal delay={200}>
            <a 
              href="mailto:hello@pathology.in" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-emerald-700 bg-white hover:bg-emerald-50 transform transition-transform hover:scale-105 animate-subtle-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
            >
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </a>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <a 
              href="tel:+918929759545" 
              className="inline-flex items-center justify-center px-8 py-4 border border-emerald-500 rounded-xl shadow-sm text-base font-medium text-white hover:bg-emerald-600 transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-emerald-500"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Us (+91 8929759545)
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};