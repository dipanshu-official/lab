import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Is there a free trial available for Pathology?",
      answer: "Yes, Pathology offers a 5-day free trial of the software. This allows labs to explore its features and evaluate its suitability for their needs before making a purchase."
    },
    {
      id: 2,
      question: "Is Pathology a cloud-based software?",
      answer: "Yes, Pathology is a complete online software solution. It offers the convenience of cloud-based access, allowing labs to access their data securely from anywhere, anytime."
    },
    {
      id: 3,
      question: "Do I need any specific hardware to run this software?",
      answer: "No, you can easily run this software on any browser of your choice. Pathology is designed to be web-based and compatible across various devices."
    },
    {
      id: 4,
      question: "Can I customize the reports sent through Pathology?",
      answer: "Yes, Pathology offers extensive customization options for reports. You can tailor them according to your lab's branding and specific requirements, providing a professional and personalized touch."
    },
    {
      id: 5,
      question: "Is the data of Pathology customers fully encrypted?",
      answer: "Yes, the data of Pathology customers is fully encrypted using industry-standard security protocols. This ensures the security and privacy of sensitive information, providing peace of mind to lab owners and their patients."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.id} delay={index * 100}>
                <div className="bg-slate-50 rounded-xl shadow-md p-6 cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div 
                    className="flex justify-between items-center text-slate-800 font-semibold text-lg"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <Plus 
                      className={`transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-45' : ''
                      }`} 
                    />
                  </div>
                  {openFaq === faq.id && (
                    <div className="mt-4 text-slate-600 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};