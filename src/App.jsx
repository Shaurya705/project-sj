import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Deliverables from './components/Deliverables';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-dark selection:bg-blue-100 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Deliverables />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
