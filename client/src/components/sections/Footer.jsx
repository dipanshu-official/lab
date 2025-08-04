import React from 'react';
import { Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Contact Me</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
            <textarea
              placeholder="Purpose"
              rows={3}
              className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col justify-between">
          <div className="flex justify-center md:justify-end space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/company/pathology-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/pathology.official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/Pathology_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500"
            >
              <span className="sr-only">Twitter (X)</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDyWgKPWtZQ3Com-YzPTUgA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500"
            >
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center md:text-right text-sm text-slate-500">
            &copy; {currentYear} Pathology. All rights reserved. Product by Diagnoshuttle Private Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};
