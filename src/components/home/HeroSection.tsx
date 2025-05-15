
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { RecycleIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-recicla-50 to-recicla-100 dark:from-recicla-900 dark:to-recicla-800">
      {/* Círculos decorativos */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-recicla-200/50 rounded-full blur-3xl dark:bg-recicla-700/20"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-eco-blue-200/50 rounded-full blur-3xl dark:bg-eco-blue-900/20"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 text-sm font-medium bg-recicla-100 text-recicla-800 border border-recicla-200 dark:bg-recicla-800/50 dark:text-recicla-100 dark:border-recicla-700">
              <RecycleIcon className="mr-1 h-4 w-4" /> Pela sustentabilidade do nosso planeta
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-recicla-800 dark:text-white">
              Reciclar é cuidar do <span className="text-recicla-500">futuro</span>
            </h1>
            
            <p className="text-lg mb-8 text-recicla-700 dark:text-recicla-100 max-w-lg">
              Junte-se a nós para transformar o planeta através da reciclagem. Localize pontos de coleta, aprenda sobre sustentabilidade e faça parte da mudança.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-recicla-500 hover:bg-recicla-600 text-white">
                <Link to="/mapa">
                  Encontrar pontos de coleta
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-recicla-500 text-recicla-700 hover:bg-recicla-50 dark:text-white dark:hover:bg-recicla-900">
                <Link to="/educacao">
                  Aprender sobre reciclagem
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Reciclagem e sustentabilidade" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-0 -right-10 md:-right-20 w-24 h-24 bg-eco-blue-300 rounded-full blur-lg opacity-70 dark:opacity-20"></div>
            <div className="absolute bottom-10 -left-10 md:-left-20 w-32 h-32 bg-recicla-300 rounded-full blur-lg opacity-70 dark:opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
