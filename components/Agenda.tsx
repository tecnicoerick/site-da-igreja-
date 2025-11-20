import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Mapa de meses para auxiliar na lógica do calendário
const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
const fullMonthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const events = [
  { 
    id: 1,
    day: 10, 
    monthIndex: 7, // Agosto (0-based)
    title: 'Santa Ceia do Senhor', 
    time: '18:00', 
    location: 'Templo Principal', 
    category: 'Comunhão',
    description: 'Um tempo precioso de comunhão e renovação da aliança com Cristo.'
  },
  { 
    id: 2,
    day: 24, 
    monthIndex: 7, // Agosto
    title: 'Congresso de Jovens', 
    time: '19:00', 
    location: 'Nave da Igreja', 
    category: 'Jovens',
    description: 'Dois dias de muito louvor e palavra direcionada à juventude.'
  },
  { 
    id: 3,
    day: 7, 
    monthIndex: 8, // Setembro
    title: 'Vigília da Resposta', 
    time: '23:00', 
    location: 'Templo Principal', 
    category: 'Oração',
    description: 'Madrugada de clamor e intercessão pelas causas impossíveis.'
  },
  { 
    id: 4,
    day: 15, 
    monthIndex: 8, // Setembro
    title: 'Batismo nas Águas', 
    time: '09:00', 
    location: 'Chácara ADMFO', 
    category: 'Celebração',
    description: 'A celebração pública da fé dos novos convertidos.'
  },
];

const Agenda: React.FC = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // Inicia o calendário em Agosto para mostrar os eventos de exemplo (pode ser alterado para new Date())
  const [currentDate, setCurrentDate] = useState(new Date(new Date().getFullYear(), 7, 1));

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (increment: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1);
    setCurrentDate(newDate);
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Padding for empty days at start
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-14"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEvent = events.find(e => e.day === day && e.monthIndex === currentDate.getMonth());
      
      days.push(
        <div key={day} className={`h-10 md:h-14 border border-gray-100 rounded-lg flex flex-col items-center justify-center relative transition-colors ${hasEvent ? 'bg-adm-blue/5 font-bold text-adm-blue cursor-pointer hover:bg-adm-blue/10' : 'hover:bg-gray-50 text-gray-600'}`}>
          <span className="text-sm">{day}</span>
          {hasEvent && (
            <div className="w-1.5 h-1.5 bg-adm-gold rounded-full mt-1"></div>
          )}
          {hasEvent && (
             <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 bg-gray-900 text-white text-xs p-2 rounded opacity-0 hover:opacity-100 z-10 pointer-events-none transition-opacity text-center">
               {hasEvent.title}
             </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <section id="agenda" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CalendarDays className="text-adm-gold w-6 h-6" />
            <h3 className="text-adm-gold font-bold uppercase tracking-widest">Próximos Eventos</h3>
          </div>
          <h2 className="font-serif text-4xl text-adm-blue font-bold">Agenda ADMFO</h2>
          <div className="w-20 h-1 bg-adm-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Fique por dentro de tudo o que vai acontecer em nossa igreja. Participe e traga sua família.
          </p>
        </div>

        {/* Lista de Cards (Visualização Principal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {events.slice(0, 4).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex group border border-gray-100 hover:border-adm-gold/30 transition-all duration-300"
            >
              <div className="bg-adm-blue text-white p-6 flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] border-r-4 border-adm-gold group-hover:bg-adm-blueLight transition-colors">
                <span className="text-3xl font-bold font-serif">{event.day < 10 ? `0${event.day}` : event.day}</span>
                <span className="text-sm uppercase tracking-wider font-medium text-adm-gold">{monthNames[event.monthIndex]}</span>
              </div>

              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-adm-gold uppercase tracking-wider bg-adm-gold/10 px-2 py-1 rounded">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-adm-blue mb-2 group-hover:text-adm-goldLight transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-adm-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-adm-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão para abrir Modal */}
        <div className="text-center">
          <button 
            onClick={() => setIsCalendarOpen(true)}
            className="inline-flex items-center gap-2 text-adm-blue font-bold hover:text-adm-gold transition-colors border-b-2 border-transparent hover:border-adm-gold pb-1"
          >
            Ver calendário completo <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Modal do Calendário Completo */}
      <AnimatePresence>
        {isCalendarOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsCalendarOpen(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden"
            >
              {/* Header do Modal */}
              <div className="bg-adm-blue p-6 flex justify-between items-center text-white">
                <div>
                   <h3 className="font-serif text-2xl font-bold">Calendário Eclesiástico</h3>
                   <p className="text-sm text-adm-gold">Planejamento Anual</p>
                </div>
                <button 
                  onClick={() => setIsCalendarOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Corpo do Calendário */}
              <div className="p-6">
                {/* Navegação de Mês */}
                <div className="flex justify-between items-center mb-6">
                  <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-gray-100 rounded-full text-adm-blue">
                    <ChevronLeft size={24} />
                  </button>
                  <h4 className="text-xl font-bold text-adm-blue uppercase tracking-wide">
                    {fullMonthNames[currentDate.getMonth()]} <span className="text-gray-400">{currentDate.getFullYear()}</span>
                  </h4>
                  <button onClick={() => changeMonth(1)} className="p-2 hover:bg-gray-100 rounded-full text-adm-blue">
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Grid Dias da Semana */}
                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                    <div key={i} className="text-xs font-bold text-gray-400">{d}</div>
                  ))}
                </div>

                {/* Grid Dias */}
                <div className="grid grid-cols-7 gap-2">
                  {renderCalendarGrid()}
                </div>

                {/* Legenda */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                   <div className="w-2 h-2 bg-adm-gold rounded-full"></div>
                   <span>Dias com eventos programados</span>
                </div>
                
                {/* Lista de Eventos do Mês Selecionado */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <h5 className="font-bold text-adm-blue mb-3">Eventos em {fullMonthNames[currentDate.getMonth()]}:</h5>
                  <ul className="space-y-2">
                     {events.filter(e => e.monthIndex === currentDate.getMonth()).length > 0 ? (
                        events.filter(e => e.monthIndex === currentDate.getMonth()).map(e => (
                          <li key={e.id} className="flex items-center gap-3 text-sm p-2 hover:bg-gray-50 rounded">
                             <span className="font-bold bg-adm-blue text-white w-6 h-6 flex items-center justify-center rounded text-xs">{e.day}</span>
                             <div className="flex-1">
                               <span className="font-semibold text-gray-800 block">{e.title}</span>
                               <span className="text-gray-500 text-xs">{e.time} - {e.location}</span>
                             </div>
                          </li>
                        ))
                     ) : (
                       <p className="text-gray-400 italic text-sm text-center py-2">Nenhum evento cadastrado para este mês.</p>
                     )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Agenda;