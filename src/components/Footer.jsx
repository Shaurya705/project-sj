import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1929] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          {/* Left Column: Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-primary-dark font-bold text-sm">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wide leading-tight">WENDIGO</span>
                <span className="text-gray-400 text-xs tracking-wider leading-tight">ADVISORS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Fractional CIO Services & Strategic IT Advisory for Healthcare Organizations
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-gray-600 rounded flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-gray-600 rounded flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-gray-600 rounded flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-gray-600 rounded flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Section: 2x2 Grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-x-16 gap-y-8">
            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-xs tracking-wider uppercase text-white">SERVICES</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fractional CIO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CIO360™ Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IT Health Check</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 text-xs tracking-wider uppercase text-white">RESOURCES</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog/Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare IT Guides</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold mb-4 text-xs tracking-wider uppercase text-white">ABOUT</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-xs tracking-wider uppercase text-white">CONTACT</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Phone</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-gray-500">
          © Copyright 2025. All Rights Reserved by Wendigo Advisors.
        </div>
      </div>
    </footer>
  );
};

export default Footer;