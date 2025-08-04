import React from 'react';
import { Activity, Users, Layout, Scale, Lock, Globe } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Features = () => {
  const features= [
    {
      icon: Activity,
      title: "Streamlined Lab Operations",
      description: "Easily manage patient registration, automate lab analysis, and generate QR coded reports for seamless access and sharing. Pathology integrates with WhatsApp, enabling automated communication and reducing manual efforts.",
      gradient: "from-sky-400 to-sky-600"
    },
    {
      icon: Users,
      title: "Enhanced Patient Experience",
      description: "Pathology provides a patient portal where patients can access and download their reports conveniently using their phone number for login. This empowers patients to stay informed about their health and view reports anytime.",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Layout,
      title: "User-Friendly Interface",
      description: "Pathology stands out for its user-friendly interface, making it accessible and intuitive for lab owners, technicians, and doctors. Users can quickly familiarize themselves and efficiently perform tasks without extensive training.",
      gradient: "from-rose-400 to-rose-600"
    },
    {
      icon: Scale,
      title: "Affordable & Scalable Solution",
      description: "Pathology is designed to be accessible to labs of all sizes, from small to large diagnostic centers. It's scalable, allowing you to add collection centers and expand your operations as your lab grows.",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Lock,
      title: "Secure Data Management",
      description: "Your data is fully encrypted with Pathology, ensuring the security and privacy of sensitive information. We provide secure data backups, disaster recovery options, and compliance with industry security standards.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Globe,
      title: "ABHA Integration",
      description: "Pathology is integrated with ABHA (Ayushman Bharat Health Account), enhancing its functionality and interoperability within the digital healthcare ecosystem. This ensures seamless data exchange and improved lab management processes.",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-base font-semibold text-sky-600 tracking-wide uppercase">Powerful Features</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Here's all the good stuff
            </p>
          </ScrollReveal>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <ScrollReveal key={index} delay={200 + index * 100} className="pt-6">
                <div className="flow-root bg-white rounded-2xl shadow-lg px-6 pb-8 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 card-hover-glow">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-slate-800 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};