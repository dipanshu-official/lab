import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    patientCount: "",
    labName: "",
    previousSoftware: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const patientCountOptions = [
    { value: "1-30", label: "1-30 Patient Per Day" },
    { value: "30-50", label: "30-50 Patient Per Day" },
    { value: "50-100", label: "50-100 Patient Per Day" },
    { value: "100-200", label: "100-200 Patient Per Day" },
    { value: "200-500", label: "200-500 Patient Per Day" },
    { value: "500+", label: "500+ Patient Per Day" },
  ];

  return (
    <header className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40 bg-gradient-to-br from-sky-50 via-emerald-50 to-white">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute left-[max(25rem,50%)] top-1/2 -translate-y-1/2 -translate-x-1/2"
          width="80rem"
          height="80rem"
          fill="none"
          viewBox="0 0 1280 1280"
        >
          <defs>
            <radialGradient
              id="radial-herobg"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(0 -553.95788 553.95788 0 640 640)"
            >
              <stop stopColor="#38bdf8"></stop>
              <stop offset="1" stopColor="#10b981" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
          <rect
            width="1280"
            height="1280"
            rx="640"
            fill="url(#radial-herobg)"
          ></rect>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            AI-Powered LIS Software
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Transform Your Lab with <br />
            <span className="gradient-text">Pathology Lab Software!</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
            Start Your 5-Day Free Trial of Our Pathology Lab Software Today,
            Just by Entering Your Name and Phone Number Below!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300} className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            id="demo"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                prefix="+91"
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <Select
                name="patientCount"
                value={formData.patientCount}
                onChange={handleInputChange}
                options={patientCountOptions}
                placeholder="Patient Count Per Day"
                required
              />

              <Input
                name="labName"
                placeholder="Lab Name"
                value={formData.labName}
                onChange={handleInputChange}
                required
              />

              <Input
                name="previousSoftware"
                placeholder="Previous Software (if any)"
                value={formData.previousSoftware}
                onChange={handleInputChange}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              showArrow
              className="animate-subtle-pulse"
            >
              GET A DEMO
            </Button>
          </form>
        </ScrollReveal>
      </div>

      <ScrollReveal
        delay={1100}
        className="mt-16 sm:mt-20 max-w-4xl mx-auto px-4"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-2">
          <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/G1E_uX746cM"
              title="Product Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        delay={1200}
        className="flex flex-col items-center justify-center mt-12 gap-4"
      >
        <p className="text-slate-500 text-sm">BACKED BY</p>
        <div className="h-10 w-auto bg-slate-300 rounded-md flex items-center justify-center text-slate-700 text-sm font-semibold px-4">
          100x Ventures Logo Placeholder
        </div>
      </ScrollReveal>
    </header>
  );
};
