import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Loader2, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateDevotional } from '../services/geminiService';
import { DevotionalState } from '../types';

const DevotionalAI: React.FC = () => {
  const [state, setState] = useState<DevotionalState>({
    topic: '',
    content: '',
    loading: false,
    error: null,
  });

  const handleGenerate = async () => {
    if (!state.topic.trim()) return;

    setState(prev => ({ ...prev, loading: true, error: null, content: '' }));
    
    const result = await generateDevotional(state.topic);
    
    setState(prev => ({
      ...prev,
      loading: false,
      content: result
    }));
  };

  const presetTopics = ["Esperança", "Ansiedade", "Família", "Gratidão", "Fé", "Sabedoria"];

  return (
    <section id="devotional" className="py-20 bg-gradient-to-br from-adm-blue to-blue-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-adm-gold rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Panel: Controls */}
          <motion.div 
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-adm-gold w-8 h-8" />
              <h3 className="text-adm-gold font-bold uppercase tracking-widest">Devocional IA</h3>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Uma Palavra de Deus Para Seu Coração Hoje
            </h2>
            <p className="text-blue-200 mb-8">
              Use nossa inteligência artificial integrada para gerar uma reflexão bíblica personalizada baseada no que você está sentindo ou precisando agora.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <label className="block text-sm font-medium mb-2 text-adm-gold">Sobre o que você quer ler?</label>
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  value={state.topic}
                  onChange={(e) => setState({ ...state, topic: e.target.value })}
                  placeholder="Ex: Paz em meio à tempestade..."
                  className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-adm-gold"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <button 
                  onClick={handleGenerate}
                  disabled={state.loading}
                  className="bg-adm-gold text-adm-blue p-3 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.loading ? <Loader2 className="animate-spin" /> : <Send />}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {presetTopics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => setState({ ...state, topic })}
                    className="text-xs px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Result */}
          <motion.div 
            className="lg:w-2/3 w-full min-h-[400px] bg-white text-adm-blue rounded-2xl shadow-2xl p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {!state.content && !state.loading && (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                <BookOpen size={64} className="mb-4 opacity-20" />
                <p>Digite um tema ou escolha uma sugestão para receber seu devocional.</p>
              </div>
            )}

            {state.loading && (
              <div className="h-full flex flex-col items-center justify-center text-center text-adm-blue">
                <Loader2 size={48} className="animate-spin mb-4 text-adm-gold" />
                <p className="font-medium animate-pulse">Consultando as Escrituras e gerando reflexão...</p>
              </div>
            )}

            {state.content && !state.loading && (
              <div className="prose prose-blue max-w-none">
                 <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                    <div className="bg-adm-blue text-white p-2 rounded-full">
                      <BookOpen size={20} />
                    </div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Palavra do Dia</span>
                 </div>
                 <div className="prose-headings:font-serif prose-headings:text-adm-blue prose-p:text-gray-700 prose-blockquote:border-l-adm-gold prose-blockquote:text-adm-blue/80 prose-blockquote:font-serif prose-blockquote:italic">
                  <ReactMarkdown>{state.content}</ReactMarkdown>
                 </div>
                 <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 italic">Gerado por IA sob supervisão pastoral da ADMFO.</p>
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevotionalAI;