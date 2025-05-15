
import React from 'react';
import { Map, BookOpen, Send } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Map className="h-8 w-8 text-recicla-500" />,
      title: "Localize pontos de coleta",
      description: "Use nosso mapa interativo para encontrar os pontos de coleta de materiais recicláveis mais próximos de você."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-recicla-500" />,
      title: "Aprenda sobre reciclagem",
      description: "Acesse nossos conteúdos educativos para aprender mais sobre reciclagem e práticas sustentáveis."
    },
    {
      icon: <Send className="h-8 w-8 text-recicla-500" />,
      title: "Sugira novos pontos",
      description: "Conhece um ponto de coleta que não está em nosso mapa? Sugira para que possamos incluí-lo."
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title text-recicla-800 dark:text-white">Como Funciona</h2>
      
      <div className="relative">
        {/* Linha conectora (visível apenas em desktop) */}
        <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-recicla-200 dark:bg-recicla-700" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Círculo com número */}
              <div className="relative z-10 mb-6 bg-white dark:bg-recicla-900 rounded-full p-6 border-2 border-recicla-200 dark:border-recicla-700">
                {step.icon}
                <div className="absolute -top-2 -right-2 bg-recicla-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-recicla-700 dark:text-recicla-100">
                {step.title}
              </h3>
              
              <p className="text-recicla-600 dark:text-recicla-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
