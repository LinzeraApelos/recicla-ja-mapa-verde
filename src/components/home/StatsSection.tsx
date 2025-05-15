
import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "120+", label: "Pontos de coleta mapeados" },
    { value: "2.5K+", label: "Usuários ativos" },
    { value: "15+", label: "Materiais recicláveis identificados" },
    { value: "500+", label: "Toneladas de resíduos reciclados" },
  ];

  return (
    <section className="py-16 bg-recicla-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Nosso Impacto
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl xl:text-5xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-recicla-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
