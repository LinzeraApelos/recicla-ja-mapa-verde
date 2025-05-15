
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, RecycleIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-recicla-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Informações da Empresa */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <RecycleIcon className="h-8 w-8 text-recicla-400" />
              <span className="text-xl font-bold text-white">
                Recicla<span className="text-recicla-400">Já</span>
              </span>
            </div>
            <p className="mt-4 text-recicla-200 text-sm">
              Promovendo a sustentabilidade e a consciência ambiental através da educação e ações práticas de reciclagem.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-recicla-100">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-recicla-300 hover:text-recicla-100 transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/mapa" className="text-recicla-300 hover:text-recicla-100 transition-colors text-sm">
                  Mapa de Coleta
                </Link>
              </li>
              <li>
                <Link to="/educacao" className="text-recicla-300 hover:text-recicla-100 transition-colors text-sm">
                  Educação Ambiental
                </Link>
              </li>
              <li>
                <Link to="/sugerir" className="text-recicla-300 hover:text-recicla-100 transition-colors text-sm">
                  Sugerir Ponto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato - Simplificado */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-recicla-100">Contato</h3>
            <address className="not-italic text-sm text-recicla-300">
              <p>antoniognascjunior@gmail.com</p>
              <p className="mt-2">Brasília, DF</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-recicla-300 hover:text-recicla-100 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-recicla-300 hover:text-recicla-100 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-recicla-300 hover:text-recicla-100 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-recicla-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-recicla-400">
            &copy; {new Date().getFullYear()} ReciclaJá. Todos os direitos reservados. Antônio Gomes Aluno UNIP
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-recicla-500">
              Desenvolvido com ♥ para um planeta mais sustentável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
