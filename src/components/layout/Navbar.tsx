
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { RecycleIcon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lista de links de navegação
  const navLinks = [
    { title: "Início", path: "/" },
    { title: "Mapa de Coleta", path: "/mapa" },
    { title: "Educação Ambiental", path: "/educacao" },
    { title: "Sugerir Ponto", path: "/sugerir" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Verifica se o link atual é o ativo
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-recicla-900/90 backdrop-blur-md border-b border-recicla-100 dark:border-recicla-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <RecycleIcon className="h-8 w-8 text-recicla-500" />
            <span className="text-xl font-bold text-recicla-800 dark:text-recicla-100">
              Recicla<span className="text-recicla-500">Já</span>
            </span>
          </Link>

          {/* Links de navegação para desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  isActive(link.path)
                    ? "text-white bg-recicla-500"
                    : "text-recicla-700 hover:text-recicla-900 dark:text-recicla-200 dark:hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Button className="ml-4 bg-recicla-500 hover:bg-recicla-600">
              Participar
            </Button>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden">
            <button
              className="text-recicla-700 dark:text-recicla-200 hover:text-recicla-500 dark:hover:text-recicla-500"
              onClick={toggleMenu}
              aria-label="Menu principal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden py-2 pb-4 border-t border-recicla-100 dark:border-recicla-800">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-base font-medium transition-colors
                  ${
                    isActive(link.path)
                      ? "text-white bg-recicla-500"
                      : "text-recicla-700 hover:bg-recicla-100 dark:text-recicla-200 dark:hover:bg-recicla-800/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-recicla-500 hover:bg-recicla-600">
                  Participar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
