
import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: <Recycle className="h-8 w-8 text-recicla-500" />,
      title: "Promover a Reciclagem",
      description: "Incentivar práticas sustentáveis de descarte e reciclagem, conectando pessoas a pontos de coleta."
    },
    {
      icon: <Leaf className="h-8 w-8 text-recicla-500" />,
      title: "Educar para Sustentabilidade",
      description: "Disponibilizar conteúdo educativo sobre reciclagem, processos sustentáveis e impacto ambiental."
    },
    {
      icon: <Globe className="h-8 w-8 text-recicla-500" />,
      title: "Preservar o Meio Ambiente",
      description: "Contribuir para a redução de resíduos em aterros e na natureza, protegendo nossos ecossistemas."
    },
  ];

  return (
    <section className="section-container bg-white dark:bg-recicla-900/30">
      <h2 className="section-title text-recicla-800 dark:text-white">Nossa Missão</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {missions.map((mission, index) => (
          <div 
            key={index} 
            className="card-eco p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 p-3 rounded-full bg-recicla-50 dark:bg-recicla-800">
              {mission.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-recicla-700 dark:text-recicla-100">
              {mission.title}
            </h3>
            <p className="text-recicla-600 dark:text-recicla-300">
              {mission.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-recicla-700 dark:text-recicla-200 max-w-2xl mx-auto">
          O ReciclaJá nasceu da necessidade de facilitar o acesso à informação sobre reciclagem e pontos de coleta. Nossa visão é um mundo onde reciclar seja parte integrante do dia a dia de todos.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
