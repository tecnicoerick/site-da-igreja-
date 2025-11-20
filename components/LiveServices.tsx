import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Play } from 'lucide-react';

const schedule = [
  { day: 'Domingo', time: '18:00', title: 'Culto da Família' },
  { day: 'Terça', time: '19:30', title: 'Ensino da Palavra' },
  { day: 'Quinta', time: '19:30', title: 'Culto da Vitória' },
  { day: 'Sexta', time: '22:00', title: 'Vigília de Oração (1ª do mês)' }
];

const LiveServices: React.FC = () => {
  return (
    <section id="live" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Schedule Card */}
          <div className="lg:w-1/3">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-adm-blue text-white p-8 rounded-2xl shadow-xl h-full"
             >
               <h3 className="text-adm-gold font-bold uppercase tracking-widest mb-2">Agenda Semanal</h3>
               <h2 className="font-serif text-3xl font-bold mb-8">Nossos Horários</h2>
               
               <div className="space-y-6">
                 {schedule.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0">
                     <div className="bg-white/10 p-2 rounded-lg">
                        <Calendar size={20} className="text-adm-gold" />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg">{item.day}</h4>
                       <p className="text-gray-300 text-sm flex items-center gap-1">
                         <Clock size={14} /> {item.time}
                       </p>
                       <p className="text-adm-gold mt-1 font-medium">{item.title}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
          </div>

          {/* Video Section */}
          <div className="lg:w-2/3">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
               <div className="text-left">
                  <h3 className="text-adm-gold font-bold uppercase tracking-widest mb-2">Ao Vivo</h3>
                  <h2 className="font-serif text-4xl font-bold text-adm-blue">Adore Conosco Online</h2>
                  <p className="text-gray-600 mt-2">
                    Não pode comparecer? Acompanhe nossos cultos transmitidos ao vivo pelo YouTube.
                  </p>
               </div>

               {/* YouTube Placeholder */}
               <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                 <img 
                    src="https://picsum.photos/seed/preaching/1280/720" 
                    alt="Live Stream Cover" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-adm-gold/90 rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                       <Play size={32} className="text-adm-blue fill-current" />
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded animate-pulse">
                   AO VIVO
                 </div>
               </div>

               <button className="w-full md:w-auto px-8 py-3 border-2 border-adm-blue text-adm-blue font-bold rounded-full hover:bg-adm-blue hover:text-white transition-all">
                 Ir para o Canal do YouTube
               </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveServices;