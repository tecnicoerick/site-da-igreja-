import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8 text-adm-gold" />,
    title: "Amor ao Próximo",
    description: "Cremos que o amor é a base de tudo. Acolhemos cada vida com carinho e dedicação."
  },
  {
    icon: <Users className="w-8 h-8 text-adm-gold" />,
    title: "Comunhão",
    description: "Somos mais que uma igreja, somos uma família que caminha unida em propósito."
  },
  {
    icon: <Globe className="w-8 h-8 text-adm-gold" />,
    title: "Missões",
    description: "Levando a palavra de Deus para além das quatro paredes, impactando o mundo."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-adm-gold font-bold uppercase tracking-widest mb-2">Nossa História</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-adm-blue font-bold mb-6">
              Há 20 anos transformando vidas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Igreja ADMFO nasceu de um sonho de ver vidas restauradas pelo poder do Espírito Santo. 
              Fundamentados na Palavra de Deus, buscamos ser um farol de esperança em nossa comunidade.
              Nossa missão é pregar o Evangelho genuíno, formar discípulos e servir ao próximo com excelência.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Seja você quem for, venha como estiver. Aqui você encontrará um lugar de paz, oração fervorosa e crescimento espiritual.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-2 p-3 bg-adm-blue/5 rounded-lg">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-adm-blue mb-1">{f.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://picsum.photos/seed/worship1/600/800" 
              alt="Worship" 
              className="rounded-lg shadow-xl translate-y-8" 
            />
            <img 
              src="https://picsum.photos/seed/prayer1/600/800" 
              alt="Prayer" 
              className="rounded-lg shadow-xl -translate-y-8" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;