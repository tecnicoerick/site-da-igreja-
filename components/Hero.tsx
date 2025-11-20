import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/church_worship/1920/1080',
    subtitle: 'Bem-vindo à Presença de Deus',
    title: 'Igreja ADMFO',
    description: 'Uma família unida pela fé, movida pelo amor e dedicada a levar a palavra de Cristo a todas as nações.',
    buttonText: 'Assistir Culto',
    buttonLink: '#live',
    secondaryButtonText: 'Visite-nos',
    secondaryButtonLink: '#contact',
    isEvent: false
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/communion/1920/1080',
    subtitle: '10 de Agosto • 18:00',
    title: 'Santa Ceia do Senhor',
    description: 'Venha renovar sua aliança com Deus. Um tempo precioso de comunhão, arrependimento e gratidão pelo sacrifício de Jesus.',
    buttonText: 'Ver Detalhes',
    buttonLink: '#agenda',
    isEvent: true
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/youth_concert/1920/1080',
    subtitle: '24 de Agosto • 19:00',
    title: 'Congresso de Jovens',
    description: 'Uma geração eleita e apaixonada. Serão dois dias de muito louvor, adoração e uma palavra que vai transformar sua vida.',
    buttonText: 'Inscreva-se',
    buttonLink: '#contact',
    isEvent: true
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/fire_prayer/1920/1080',
    subtitle: '07 de Setembro • 23:00',
    title: 'Vigília da Resposta',
    description: 'Madrugada de clamor e poder. Traga sua causa impossível e venha buscar a face de Deus conosco.',
    buttonText: 'Localização',
    buttonLink: '#contact',
    isEvent: true
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Troca a cada 6 segundos
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Slider */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url("${slides[current].image}")`, 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl">
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Badge/Subtitle */}
            <div className={`inline-block mb-4 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20 ${slides[current].isEvent ? 'bg-adm-gold/20 text-adm-gold' : 'bg-white/10 text-gray-200'}`}>
               <span className="font-medium tracking-[0.2em] uppercase text-xs md:text-sm flex items-center gap-2">
                  {slides[current].isEvent && <Calendar size={14} />}
                  {slides[current].subtitle}
               </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-lg">
              {slides[current].isEvent ? (
                slides[current].title
              ) : (
                <>Igreja <span className="text-adm-gold">ADMFO</span></>
              )}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
              {slides[current].description}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={slides[current].buttonLink}
                className="px-8 py-4 bg-adm-gold text-adm-blue font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
              >
                {slides[current].buttonText}
              </a>
              
              {slides[current].secondaryButtonText && (
                <a 
                  href={slides[current].secondaryButtonLink}
                  className="px-8 py-4 border border-white/50 bg-white/5 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white hover:text-adm-blue transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {slides[current].secondaryButtonText}
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 text-white/50 hover:bg-adm-gold hover:text-adm-blue hover:scale-110 transition-all duration-300 border border-white/10 backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 text-white/50 hover:bg-adm-gold hover:text-adm-blue hover:scale-110 transition-all duration-300 border border-white/10 backdrop-blur-sm"
        aria-label="Próximo"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === current 
                ? 'bg-adm-gold w-8' 
                : 'bg-white/40 hover:bg-white'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} className="opacity-70 hover:text-adm-gold transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;