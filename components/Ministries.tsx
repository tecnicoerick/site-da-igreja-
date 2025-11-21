import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, User, Baby, HandHeart, Shield, HeartHandshake, BookOpen, Flame, Sparkles, X, Clock, UserCheck, Camera, Plus, Image as ImageIcon } from 'lucide-react';
import { Ministry, Member } from '../types';

const ministriesData: Ministry[] = [
  {
    id: '1',
    title: 'Louvor e Adoração',
    description: 'Levitas dedicados a conduzir a igreja em adoração profunda e genuína.',
    fullDescription: 'O Ministério de Louvor da ADMFO tem como missão preparar o ambiente para a manifestação do Espírito Santo através da música. Não somos apenas músicos, somos adoradores comprometidos com a santidade e a excelência.',
    image: 'https://picsum.photos/seed/music/800/600',
    icon: 'music',
    leader: 'Pb. Gabriel Souza',
    schedule: 'Ensaios: Quintas às 19h30 e Domingos às 17h00',
    members: [
      { id: 'm1', name: 'Sarah Oliveira', role: 'Líder de Adoração', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { id: 'm2', name: 'Lucas Mendes', role: 'Tecladista', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { id: 'm3', name: 'Rebeca Lima', role: 'Vocal', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
      { id: 'm4', name: 'Matheus Silva', role: 'Baterista', photo: 'https://randomuser.me/api/portraits/men/85.jpg' },
      { id: 'm5', name: 'Pr. Gabriel Souza', role: 'Ministro de Louvor', photo: 'https://randomuser.me/api/portraits/men/22.jpg' }
    ],
    gallery: [
      'https://picsum.photos/seed/worship1/600/400',
      'https://picsum.photos/seed/worship2/600/400',
      'https://picsum.photos/seed/worship3/600/400',
    ]
  },
  {
    id: '2',
    title: 'Jovens Fortes',
    description: 'Uma geração eleita, apaixonada por Cristo e pronta para fazer a diferença.',
    fullDescription: 'Nosso propósito é levantar uma juventude que não se corrompe, mas que influencia a sociedade com os valores do Reino de Deus.',
    image: 'https://picsum.photos/seed/youth/800/600',
    icon: 'user',
    leader: 'DCP. Marcos Vinicius',
    schedule: 'Culto de Jovens: Sábados às 19h30',
    members: [
        { id: 'j1', name: 'Marcos Vinicius', role: 'Líder Geral', photo: 'https://randomuser.me/api/portraits/men/11.jpg' },
        { id: 'j2', name: 'Júlia Costa', role: 'Secretária', photo: 'https://randomuser.me/api/portraits/women/12.jpg' }
    ],
    gallery: ['https://picsum.photos/seed/youth1/600/400']
  },
  {
    id: '3',
    title: 'Ministério Infantil',
    description: 'Ensinando o caminho do Senhor com amor, alegria e criatividade para os pequenos.',
    image: 'https://picsum.photos/seed/kids/800/600',
    icon: 'baby',
    leader: 'Tia Amanda',
    schedule: 'Cultinho: Domingos às 18h00',
    gallery: ['https://picsum.photos/seed/kids1/600/400']
  },
  {
    id: '4',
    title: 'Ação Social',
    description: 'Estendendo a mão a quem precisa, levando alimento físico e espiritual.',
    image: 'https://picsum.photos/seed/help/800/600',
    icon: 'hand'
  },
  {
    id: '5',
    title: 'Grupo de Irmãs',
    description: 'Mulheres de oração que sustentam a igreja com intercessão, amor e comunhão.',
    image: 'https://picsum.photos/seed/sisters/800/600',
    icon: 'sisters'
  },
  {
    id: '6',
    title: 'Grupo de Varões',
    description: 'Homens de coragem, pilares da igreja, servindo com dedicação e força no Reino.',
    image: 'https://picsum.photos/seed/men/800/600',
    icon: 'men'
  },
  {
    id: '7',
    title: 'Mulheres de Provérbios',
    description: 'Sabedoria e graça para edificar o lar e influenciar a sociedade segundo a Palavra.',
    image: 'https://picsum.photos/seed/wisdom/800/600',
    icon: 'proverbs'
  },
  {
    id: '8',
    title: 'Homens que Oram',
    description: 'Buscando a face de Deus incansavelmente para romper barreiras espirituais.',
    image: 'https://picsum.photos/seed/menpraying/800/600',
    icon: 'prayingmen'
  },
  {
    id: '9',
    title: 'Dança Libertais-vos',
    description: 'Expressando adoração e liberdade no Espírito através do movimento e da dança profética.',
    image: 'https://picsum.photos/seed/dance_worship/800/600',
    icon: 'dance',
    fullDescription: 'O Ministério de Dança Libertais-vos usa a arte do movimento para profetizar cura e libertação sobre a igreja.',
    leader: 'Pra. Helena',
    members: [
      { id: 'd1', name: 'Helena Silva', role: 'Coreógrafa', photo: 'https://randomuser.me/api/portraits/women/90.jpg' }
    ],
    gallery: ['https://picsum.photos/seed/dance1/600/400']
  }
];

const iconMap: Record<string, React.ReactNode> = {
  music: <Music size={24} />,
  user: <User size={24} />,
  baby: <Baby size={24} />,
  hand: <HandHeart size={24} />,
  sisters: <HeartHandshake size={24} />,
  men: <Shield size={24} />,
  proverbs: <BookOpen size={24} />,
  prayingmen: <Flame size={24} />,
  dance: <Sparkles size={24} />
};

const Ministries: React.FC = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [activeTab, setActiveTab] = useState<'about' | 'members' | 'gallery'>('about');
  
  // Estado local para simular adição de fotos
  const [localGallery, setLocalGallery] = useState<string[]>([]);

  const openModal = (ministry: Ministry) => {
    setSelectedMinistry(ministry);
    setLocalGallery(ministry.gallery || []);
    setActiveTab('about');
  };

  const closeModal = () => {
    setSelectedMinistry(null);
  };

  const handleAddPhoto = () => {
    // Simulação de upload
    const newPhoto = `https://picsum.photos/seed/${Math.random()}/600/400`;
    setLocalGallery([newPhoto, ...localGallery]);
    alert("Foto adicionada com sucesso! (Simulação)");
  };

  return (
    <section id="ministries" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-adm-gold font-bold uppercase tracking-widest mb-2">Nossos Grupos</h3>
          <h2 className="font-serif text-4xl text-adm-blue font-bold">Ministérios Ativos</h2>
          <div className="w-20 h-1 bg-adm-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ministriesData.map((min, idx) => (
            <motion.div
              key={min.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => openModal(min)}
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
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                  {min.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-adm-gold">
                   <Plus size={14} /> Ver Detalhes
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detalhes */}
      <AnimatePresence>
        {selectedMinistry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl relative z-10 flex flex-col"
            >
              {/* Header com Imagem */}
              <div className="h-48 relative bg-gray-900 shrink-0">
                <div 
                   className="absolute inset-0 bg-cover bg-center opacity-60"
                   style={{ backgroundImage: `url(${selectedMinistry.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-adm-gold hover:text-adm-blue transition-colors z-20"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-6 left-6 md:left-10 text-white">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="bg-adm-gold p-1.5 rounded text-adm-blue">
                        {iconMap[selectedMinistry.icon]}
                      </div>
                      <span className="text-adm-gold font-bold tracking-widest uppercase text-sm">Ministério</span>
                   </div>
                   <h2 className="font-serif text-3xl md:text-4xl font-bold">{selectedMinistry.title}</h2>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex border-b border-gray-200 px-6 md:px-10 bg-gray-50 shrink-0">
                {[
                  { id: 'about', label: 'Sobre' },
                  { id: 'members', label: 'Integrantes' },
                  { id: 'gallery', label: 'Galeria' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-4 font-medium text-sm md:text-base relative transition-colors ${
                      activeTab === tab.id 
                        ? 'text-adm-blue font-bold' 
                        : 'text-gray-500 hover:text-adm-blue'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-adm-gold rounded-t-full" 
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-10 overflow-y-auto">
                <AnimatePresence mode='wait'>
                  {activeTab === 'about' && (
                    <motion.div 
                      key="about"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-adm-blue mb-3 font-serif">Propósito e Visão</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {selectedMinistry.fullDescription || selectedMinistry.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-adm-blue/5 p-6 rounded-xl border border-adm-blue/10">
                           <div className="flex items-center gap-3 mb-3 text-adm-blue">
                              <UserCheck className="w-6 h-6" />
                              <h4 className="font-bold">Liderança</h4>
                           </div>
                           <p className="text-gray-700 font-medium">
                             {selectedMinistry.leader || "Liderança em transição"}
                           </p>
                        </div>

                        <div className="bg-adm-gold/10 p-6 rounded-xl border border-adm-gold/20">
                           <div className="flex items-center gap-3 mb-3 text-adm-blue">
                              <Clock className="w-6 h-6" />
                              <h4 className="font-bold">Horários e Ensaios</h4>
                           </div>
                           <p className="text-gray-700 font-medium">
                             {selectedMinistry.schedule || "Consulte a agenda geral da igreja."}
                           </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'members' && (
                    <motion.div 
                      key="members"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                         <h3 className="text-xl font-bold text-adm-blue font-serif">Nossa Equipe</h3>
                         <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                           {selectedMinistry.members?.length || 0} Integrantes
                         </span>
                      </div>

                      {selectedMinistry.members && selectedMinistry.members.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {selectedMinistry.members.map((member) => (
                            <div key={member.id} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                               <img 
                                 src={member.photo} 
                                 alt={member.name} 
                                 className="w-16 h-16 rounded-full object-cover border-2 border-adm-gold"
                               />
                               <div>
                                 <h4 className="font-bold text-gray-800">{member.name}</h4>
                                 <p className="text-sm text-adm-blue font-medium">{member.role}</p>
                               </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 text-gray-400">
                          <User size={48} className="mx-auto mb-3 opacity-20" />
                          <p>A lista de integrantes deste ministério está sendo atualizada.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'gallery' && (
                    <motion.div 
                      key="gallery"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                       <div className="flex justify-between items-center mb-6">
                         <h3 className="text-xl font-bold text-adm-blue font-serif">Galeria de Fotos</h3>
                         <button 
                            onClick={handleAddPhoto}
                            className="flex items-center gap-2 bg-adm-gold text-adm-blue px-4 py-2 rounded-lg font-bold hover:bg-adm-blue hover:text-white transition-colors text-sm"
                         >
                           <Camera size={18} />
                           Adicionar Foto
                         </button>
                      </div>

                      {localGallery.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                           {localGallery.map((img, idx) => (
                             <div key={idx} className="aspect-video rounded-lg overflow-hidden relative group">
                                <img 
                                  src={img} 
                                  alt={`Gallery ${idx}`} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                           ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                          <ImageIcon size={48} className="mx-auto mb-3 opacity-20" />
                          <p>Nenhuma foto adicionada à galeria ainda.</p>
                          <button onClick={handleAddPhoto} className="mt-4 text-adm-gold hover:underline">
                            Clique para adicionar a primeira foto
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Ministries;