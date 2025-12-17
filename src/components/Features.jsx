import React from 'react';
import { ShieldCheck, FileCheck, Server, DollarSign, Settings, Target } from 'lucide-react';

const features = [
  {
    title: "Security",
    description: "We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap.",
    icon: ShieldCheck,
  },
  {
    title: "Compliance",
    description: "We assess your HIPAA compliance status and evaluate your audit readiness.",
    icon: FileCheck,
  },
  {
    title: "Infrastructure",
    description: "We examine system health, identify legacy risks, and analyze scalability for growth.",
    icon: Server,
  },
  {
    title: "Cost",
    description: "We review your technology spending to identify cost optimization opportunities.",
    icon: DollarSign,
  },
  {
    title: "Operations",
    description: "We evaluate IT team capabilities, incident management, and disaster recovery readiness.",
    icon: Settings,
  },
  {
    title: "Strategy",
    description: "We assess how your IT roadmap aligns with business goals and identify capability gaps.",
    icon: Target,
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background-light bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-primary-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
            WHAT YOU GET
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark">
            #6 <span className="scribble-underline">Critical Areas</span> We Examine.
          </h2>
          <p className="mt-6 text-text-muted max-w-2xl mx-auto">
            Every critical part of your <span className="font-bold text-text-dark">IT environment reviewed</span> and <span className="font-bold text-text-dark">explained clearly</span>.
          </p>
        </div>

        {/* Grid with custom layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Row 1: Security and Compliance */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-primary-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2 text-center">Security</h3>
            <p className="text-text-muted text-sm leading-relaxed text-center">We audit your Microsoft security score, expose gaps, and hand you a prioritized fix roadmap.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <FileCheck className="w-8 h-8 text-primary-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2 text-center">Compliance</h3>
            <p className="text-text-muted text-sm leading-relaxed text-center">We assess your HIPAA compliance status and evaluate your audit readiness.</p>
          </div>

          {/* Row 2: Infrastructure (full width) */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Server className="w-8 h-8 text-primary-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2 text-center">Infrastructure</h3>
            <p className="text-text-muted text-sm leading-relaxed text-center">We examine system health, identify legacy risks, and analyze scalability for growth.</p>
          </div>

          {/* Row 3: Operations (spanning 2 rows) and Cost + Strategy on right */}
          <div className="md:row-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Settings className="w-8 h-8 text-primary-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2 text-center">Operations</h3>
            <p className="text-text-muted text-sm leading-relaxed text-center">We evaluate IT team capabilities, incident management, and disaster recovery readiness.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <DollarSign className="w-8 h-8 text-primary-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2 text-center">Cost</h3>
            <p className="text-text-muted text-sm leading-relaxed text-center">We review your technology spending to identify cost optimization opportunities.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Target className="w-8 h-8 text-primary-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2 text-center">Strategy</h3>
            <p className="text-text-muted text-sm leading-relaxed text-center">We assess how your IT roadmap aligns with business goals and identify capability gaps.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;