import React from 'react';
import { Quote } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Testimonials= () => {
  const testimonials = [
    {
      quote: "Pathology has been a game-changer for my lab. The automated report and bill sending features have saved me a lot of time and effort. I no longer worry about manually sending reports to patients, and it significantly cuts down on printing costs!",
      author: "Mr. Shubham Kumar",
      position: "Owner, Nidan Diagnostics",
      initials: "SK",
      color: "sky"
    },
    {
      quote: "As a healthcare professional, I highly recommend Pathology LIS software. Its standout feature is its ease of use. Whether you're a lab owner, technician, or doctor, the user-friendly design makes it simple to navigate and operate.",
      author: "Mr. Akshay Kumar",
      position: "Founder, Shwaas Diagnostics",
      initials: "AK",
      color: "emerald"
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-sky-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What our customers say
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Loved by Lab Owners and Healthcare Professionals Worldwide.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105">
                <Quote className={`w-8 h-8 text-${testimonial.color}-400 mb-4 opacity-75`} />
                <p className="text-slate-600 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full bg-${testimonial.color}-200 flex items-center justify-center text-${testimonial.color}-700 font-semibold text-lg`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-slate-800">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};