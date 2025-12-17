import React from 'react';

const Process = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-50 text-primary-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
            HOW IT WORKS?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            A <span className="scribble-underline">Simple, Non-Disruptive</span> <span className="scribble-underline">3-Week</span> <br />
            <span className="scribble-underline">Process</span>
          </h2>
          <p className="text-text-muted">
            <span className="font-bold text-text-dark">Fast</span>, <span className="scribble-underline">structured</span>, and <span className="font-bold text-text-dark">low-friction</span>.
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Lines */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 800">
            {/* Line from Week 1 to Week 2 */}
            <path d="M 300 200 Q 500 200 700 350" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" fill="none"/>
            {/* Line from Week 2 to Week 3 */}
            <path d="M 700 450 Q 500 500 300 600" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" fill="none"/>
          </svg>

          <div className="relative grid md:grid-cols-2 gap-x-32 gap-y-16">
            {/* Week 1 - Top Left */}
            <div className="relative z-10">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-sm font-bold text-text-dark mb-4">WEEK 1</div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-text-dark mb-3">Discovery</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Interviews, document review, initial scans, early insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Week 2 - Top Right (with margin top) */}
            <div className="relative z-10 md:mt-32">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-sm font-bold text-text-dark mb-4">WEEK 2</div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-text-dark mb-3">Deep Analysis</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Security testing, compliance review, infrastructure analysis, vendor/cost evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Week 3 - Bottom Left */}
            <div className="relative z-10 md:mt-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-sm font-bold text-text-dark mb-4">WEEK 3</div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-text-dark mb-3">Reporting</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Executive summary, full findings, risk matrix, remediation roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;