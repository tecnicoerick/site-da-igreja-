import React from 'react';
import { Church, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-adm-blue text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="bg-adm-gold p-2 rounded-full">
                 <Church className="text-adm-blue w-6 h-6" />
               </div>
               <span className="font-serif text-2xl font-bold tracking-wide">ADMFO</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Uma igreja comprometida com a Verdade Bíblica e com o amor ao próximo. Venha fazer parte desta família.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-gray-400 hover:text-adm-gold transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-adm-gold transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-adm-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
             <h4 className="font-serif text-lg font-bold mb-6 text-adm-gold">Navegação</h4>
             <ul className="space-y-3 text-gray-300">
                <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#ministries" className="hover:text-white transition-colors">Ministérios</a></li>
                <li><a href="#devotional" className="hover:text-white transition-colors">Devocionais</a></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="font-serif text-lg font-bold mb-6 text-adm-gold">Contato</h4>
             <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                   <MapPin className="w-5 h-5 text-adm-gold shrink-0 mt-1" />
                   <span>Rua das Oliveiras, 123<br/>Jardim Esperança, SP</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="w-5 h-5 text-adm-gold shrink-0" />
                   <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="w-5 h-5 text-adm-gold shrink-0" />
                   <span>contato@admfo.com.br</span>
                </li>
             </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-48 bg-gray-800 rounded-lg overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/map/400/300" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <button className="bg-adm-gold text-adm-blue text-xs font-bold px-4 py-2 rounded-full hover:bg-white transition-colors">
                 Ver no Google Maps
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Igreja ADMFO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;