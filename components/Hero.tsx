import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/seed/church_worship/1920/1080")', 
          filter: 'brightness(0.4)' 
        }}
      />
      
      {/* Animated Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-adm-gold font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Bem-vindo à Presença de Deus
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Igreja <span className="text-adm-gold">ADMFO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Uma família unida pela fé, movida pelo amor e dedicada a levar a palavra de Cristo a todas as nações.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#live"
              className="px-8 py-3 bg-adm-gold text-adm-blue font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            >
              Assistir Culto
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white hover:text-adm-blue transition-all duration-300"
            >
              Visite-nos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className="opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;