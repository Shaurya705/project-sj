import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-background-light bg-grid-pattern">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-text-muted font-medium">
            <span>Services</span>
            <span>&gt;</span>
            <span className="text-text-dark">IT Health Check</span>
          </div>

          {/* Badge */}
          <div className="inline-block bg-blue-100 text-primary-accent text-xs font-bold px-3 py-1 rounded-full tracking-wider">
            IT HEALTH CHECK
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-text-dark leading-tight">
            <span className="scribble-underline">Know Exactly</span> <br />
            <span className="scribble-underline">Where Your IT</span> <br />
            <span className="scribble-underline">Stands.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            A <span className="font-bold text-text-dark">2-3 week assessment</span> giving <span className="font-bold text-text-dark">healthcare leaders clear, actionable insight</span> into <span className="font-bold text-text-dark">their technology</span> - minus the jargon.
          </p>

          {/* CTA */}
          <button className="group bg-primary-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2">
            Take Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* The large background card */}
          <div className="bg-gradient-to-b from-blue-200/50 to-blue-50/50 rounded-[3rem] p-6 md:p-10 shadow-sm w-full max-w-[500px]">
             {/* The Image with white border */}
             <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="IT Assessment Checklist" 
              className="rounded-[2rem] w-full h-auto object-cover shadow-2xl border-4 border-white aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
