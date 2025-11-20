import React, { useState, useEffect } from 'react';
import { Menu, X, Church } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Ministérios', href: '#ministries' },
    { name: 'Cultos', href: '#live' },
    { name: 'Devocional IA', href: '#devotional' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-adm-blue/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-adm-gold p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Church className="text-adm-blue w-6 h-6" />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-wide ${scrolled ? 'text-white' : 'text-white'}`}>
            ADMFO
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white hover:text-adm-gold font-medium transition-colors duration-200 text-sm tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-adm-blue border-t border-adm-blueLight overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-adm-gold block text-center py-2 border-b border-adm-blueLight last:border-0 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;