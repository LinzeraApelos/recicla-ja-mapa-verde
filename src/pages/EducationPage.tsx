
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const EducationPage = () => {
  const educationTopics = [
    {
      title: "Por que reciclar é importante?",
      description: "Entenda o impacto ambiental positivo da reciclagem e como ela contribui para a sustentabilidade global.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Como separar corretamente os resíduos",
      description: "Aprenda a identificar e separar diferentes tipos de materiais recicláveis para facilitar o processo de reciclagem.",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "O ciclo da reciclagem",
      description: "Conheça o caminho que os materiais recicláveis percorrem, desde o descarte até a transformação em novos produtos.",
      image: "https://images.unsplash.com/photo-1550051229-29febcc09ff1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const materialGuides = [
    {
      material: "Papel e Papelão",
      tips: "Limpe de resíduos, remova fitas adesivas e grampos, mantenha seco.",
      color: "bg-blue-500"
    },
    {
      material: "Plásticos",
      tips: "Enxágue para remover resíduos, separe por tipo quando possível, remova tampas.",
      color: "bg-red-500"
    },
    {
      material: "Vidro",
      tips: "Enxágue bem, separe por cor quando solicitado, cuidado com vidros quebrados.",
      color: "bg-green-500"
    },
    {
      material: "Metal",
      tips: "Enxágue latas, amasse para economizar espaço, separe tampas metálicas.",
      color: "bg-yellow-500"
    },
    {
      material: "Eletrônicos",
      tips: "Nunca descarte no lixo comum, remova pilhas e baterias, encontre pontos específicos de coleta.",
      color: "bg-purple-500"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-recicla-800 dark:text-white mb-4">
            Educação Ambiental
          </h1>
          <p className="text-lg text-recicla-700 dark:text-recicla-200 max-w-3xl mx-auto">
            Aprenda mais sobre reciclagem, sustentabilidade e como suas ações podem fazer a diferença para um planeta mais saudável.
          </p>
        </header>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-recicla-700 dark:text-recicla-100">
            Tópicos Informativos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationTopics.map((topic, index) => (
              <div key={index} className="card-eco overflow-hidden">
                <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-recicla-700 dark:text-recicla-100">{topic.title}</h3>
                  <p className="text-recicla-600 dark:text-recicla-300 mb-4">{topic.description}</p>
                  <Button variant="outline" className="w-full border-recicla-500 text-recicla-500 hover:bg-recicla-50 dark:hover:bg-recicla-900">
                    Ler mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16 bg-recicla-50 dark:bg-recicla-900/50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-recicla-700 dark:text-recicla-100">
            Guia de Materiais Recicláveis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialGuides.map((guide, index) => (
              <Card key={index} className="dark:bg-recicla-800/50">
                <div className={`h-2 ${guide.color} rounded-t-lg`}></div>
                <CardHeader>
                  <CardTitle className="text-recicla-700 dark:text-recicla-100">
                    {guide.material}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-recicla-600 dark:text-recicla-300">
                    {guide.tips}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-recicla-700 dark:text-recicla-100">
            Dicas para Redução de Resíduos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-eco p-6">
              <h3 className="text-xl font-semibold mb-4 text-recicla-700 dark:text-recicla-100">
                No dia a dia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Use sacolas reutilizáveis ao fazer compras</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Evite produtos com embalagens excessivas</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Prefira produtos duráveis em vez de descartáveis</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Utilize garrafas de água reutilizáveis</span>
                </li>
              </ul>
            </div>
            
            <div className="card-eco p-6">
              <h3 className="text-xl font-semibold mb-4 text-recicla-700 dark:text-recicla-100">
                Mudanças de hábitos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Pratique a compostagem de resíduos orgânicos</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Repare e reutilize itens em vez de substituí-los</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Doe itens que não usa mais em vez de descartá-los</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-recicla-100 dark:bg-recicla-800 text-recicla-600 dark:text-recicla-300 flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <span className="text-recicla-600 dark:text-recicla-300">Planeje compras para reduzir desperdício de alimentos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="text-center p-10 bg-recicla-500 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-4">
            Quer aprender mais sobre sustentabilidade?
          </h2>
          <p className="mb-6 text-recicla-100 max-w-2xl mx-auto">
            Transforme conhecimento em ação. Explore nosso mapa interativo para começar a praticar a reciclagem correta nos pontos de coleta próximos a você.
          </p>
          <Button asChild className="bg-white text-recicla-700 hover:bg-recicla-100">
            <Link to="/mapa">
              Ver mapa de pontos de coleta
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default EducationPage;
