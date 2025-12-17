import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const deliverables = [
  {
    title: "Executive Summary",
    description: "Top risks, priorities, recommendations.",
  },
  {
    title: "Scorecard",
    description: "Security, compliance, infrastructure, operations.",
  },
  {
    title: "Full Findings Report",
    description: "Detailed analysis and evidence.",
  },
  {
    title: "90-Day Roadmap",
    description: "Milestones, KPIs, responsibilities.",
  },
];

const Deliverables = () => {
  return (
    <section className="py-24 px-4 bg-background-light bg-grid-pattern">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-block bg-blue-100 text-primary-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
            YOUR DELIVERABLES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-400">Clear</span> <br />
            <span className="scribble-underline text-text-dark">Documentation</span> <br />
            <span className="text-gray-400">You</span> <span className="scribble-underline text-text-dark">Can Act On.</span>
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Fast, <span className="scribble-underline">structured</span>, and <span className="scribble-underline">low-friction</span>.
          </p>
          <button className="bg-primary-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2">
            Book an Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Content - Vertical Steps */}
        <div className="relative space-y-6">
          {/* Vertical Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-blue-400"></div>

          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center shrink-0 shadow-sm z-10 mt-1">
                <Check className="w-6 h-6 text-primary-accent stroke-[3]" />
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow w-full">
                <h3 className="text-lg font-bold text-text-dark mb-1">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;