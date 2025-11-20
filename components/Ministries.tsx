import React from 'react';
import { motion } from 'framer-motion';
import { Music, User, Baby, HandHeart } from 'lucide-react';
import { Ministry } from '../types';

const ministries: Ministry[] = [
  {
    id: '1',
    title: 'Louvor e Adoração',
    description: 'Levitas dedicados a conduzir a igreja em adoração profunda e genuína.',
    image: 'https://picsum.photos/seed/music/800/600',
    icon: 'music'
  },
  {
    id: '2',
    title: 'Jovens Fortes',
    description: 'Uma geração eleita, apaixonada por Cristo e pronta para fazer a diferença.',
    image: 'https://picsum.photos/seed/youth/800/600',
    icon: 'user'
  },
  {
    id: '3',
    title: 'Ministério Infantil',
    description: 'Ensinando o caminho do Senhor com amor, alegria e criatividade para os pequenos.',
    image: 'https://picsum.photos/seed/kids/800/600',
    icon: 'baby'
  },
  {
    id: '4',
    title: 'Ação Social',
    description: 'Estendendo a mão a quem precisa, levando alimento físico e espiritual.',
    image: 'https://picsum.photos/seed/help/800/600',
    icon: 'hand'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  music: <Music size={24} />,
  user: <User size={24} />,
  baby: <Baby size={24} />,
  hand: <HandHeart size={24} />
};

const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-adm-gold font-bold uppercase tracking-widest mb-2">Nossos Grupos</h3>
          <h2 className="font-serif text-4xl text-adm-blue font-bold">Ministérios Ativos</h2>
          <div className="w-20 h-1 bg-adm-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((min, idx) => (
            <motion.div
              key={min.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${min.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-adm-blue via-adm-blue/70 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-3 bg-adm-gold/90 p-2 w-fit rounded-lg text-adm-blue">
                  {iconMap[min.icon]}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{min.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {min.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;