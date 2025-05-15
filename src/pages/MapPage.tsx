
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Map, Info } from 'lucide-react';

const MapPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-recicla-800 dark:text-white mb-4">
            Mapa de Pontos de Coleta
          </h1>
          <p className="text-lg text-recicla-700 dark:text-recicla-200 max-w-3xl">
            Encontre facilmente pontos de coleta de materiais recicláveis próximos a você. Use o mapa interativo para navegar e descobrir para onde levar seus resíduos.
          </p>
        </header>
        
        <div className="bg-white dark:bg-recicla-900/50 p-4 md:p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div className="flex items-center text-recicla-700 dark:text-recicla-200">
              <Map className="mr-2 h-5 w-5 text-recicla-500" />
              <span>Visualize e explore os pontos de coleta disponíveis</span>
            </div>
            
            <Button asChild variant="outline" className="text-recicla-500 border-recicla-500">
              <Link to="/sugerir">
                Sugerir um novo ponto
              </Link>
            </Button>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-recicla-200 dark:border-recicla-800 mb-4">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1kyt47dSgutKywHwN5mET_25xH6sjnfmP&ehbc=2E312F&maptype=roadmap" 
              width="100%" 
              height="100%" 
              title="Mapa de Pontos de Coleta"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          
          <div className="flex items-center p-3 bg-recicla-50 dark:bg-recicla-800/50 rounded-lg">
            <Info className="h-5 w-5 mr-2 text-recicla-500" />
            <p className="text-sm text-recicla-700 dark:text-recicla-300">
              Este mapa é atualizado regularmente com novos pontos de coleta. Se você conhece algum ponto que não está listado, por favor, utilize o formulário para sugerir sua adição.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card-eco p-5">
            <h3 className="text-lg font-semibold mb-2 text-recicla-700 dark:text-recicla-100">
              Legenda do Mapa
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-recicla-700 dark:text-recicla-200">Coleta de Plástico</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-recicla-700 dark:text-recicla-200">Coleta de Papel</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-recicla-700 dark:text-recicla-200">Coleta de Metal</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-recicla-700 dark:text-recicla-200">Coleta de Vidro</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-recicla-700 dark:text-recicla-200">Coleta de Eletrônicos</span>
              </li>
            </ul>
          </div>
          
          <div className="card-eco p-5">
            <h3 className="text-lg font-semibold mb-2 text-recicla-700 dark:text-recicla-100">
              Como utilizar
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-recicla-700 dark:text-recicla-200">1. Navegue pelo mapa aproximando ou afastando</li>
              <li className="text-recicla-700 dark:text-recicla-200">2. Clique nos marcadores para ver detalhes</li>
              <li className="text-recicla-700 dark:text-recicla-200">3. Utilize a busca para encontrar locais específicos</li>
              <li className="text-recicla-700 dark:text-recicla-200">4. Verifique os horários e materiais aceitos</li>
            </ul>
          </div>
          
          <div className="card-eco p-5">
            <h3 className="text-lg font-semibold mb-2 text-recicla-700 dark:text-recicla-100">
              Dicas importantes
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-recicla-700 dark:text-recicla-200">• Limpe os materiais antes de levar para reciclagem</li>
              <li className="text-recicla-700 dark:text-recicla-200">• Separe os diferentes tipos de materiais</li>
              <li className="text-recicla-700 dark:text-recicla-200">• Verifique o horário de funcionamento dos pontos</li>
              <li className="text-recicla-700 dark:text-recicla-200">• Alguns pontos oferecem compensação pelos materiais</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
