
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-recicla-600 to-recicla-500 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Faça parte da mudança. Comece a reciclar hoje!
        </h2>
        
        <p className="text-lg mb-8 text-recicla-100 max-w-2xl mx-auto">
          Pequenas ações individuais geram grandes impactos coletivos. Encontre os pontos de coleta mais próximos e comece a contribuir para um planeta mais sustentável.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-white text-recicla-700 hover:bg-recicla-50">
            <Link to="/mapa">
              Encontrar pontos de coleta
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-white text-recicla-700 bg-white hover:bg-recicla-50">
            <Link to="/sugerir">
              Sugerir novo ponto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
