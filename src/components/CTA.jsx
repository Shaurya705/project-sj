import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-blue-500/40 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-white/30">
              FROM A CEO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to bring clarity to your IT?
            </h2>
            <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto">
              Let's talk about your challenges, identify your risks, and give you a clear path forward — no jargon, no pressure.
            </p>
            <button className="bg-white text-primary-accent hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;