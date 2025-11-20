import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import LiveServices from './components/LiveServices';
import DevotionalAI from './components/DevotionalAI';
import Footer from './components/Footer';

function App() {
  
  // Smooth scroll for anchor links fix
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Ministries />
        <LiveServices />
        <DevotionalAI />
      </main>
      <Footer />
    </div>
  );
}

export default App;