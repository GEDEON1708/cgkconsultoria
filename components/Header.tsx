import React, { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/scrolling';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" onClick={smoothScrollTo} className="font-logo text-3xl font-semibold text-cyan-400 tracking-wider">
          CGK Consultoria
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={smoothScrollTo} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contato" onClick={smoothScrollTo} className="hidden md:inline-block bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition-transform duration-300 hover:scale-105">
          Orçamento
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => { smoothScrollTo(e); setIsMenuOpen(false); }} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#contato" onClick={(e) => { smoothScrollTo(e); setIsMenuOpen(false); }} className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition-transform duration-300 hover:scale-105">
              Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;