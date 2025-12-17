import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-primary-dark text-white rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl border border-white/10 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-dark font-bold">
            W
          </div>
          <span className="font-bold text-lg tracking-wide">WENDIGO <span className="font-light text-gray-400 text-sm">ADVISORS</span></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
        </div>

        {/* Contact Button */}
        <button className="bg-primary-accent hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">
          Contact Us for Free
        </button>
      </nav>
    </div>
  );
};

export default Navbar;