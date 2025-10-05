import React from 'react';
import { smoothScrollTo } from '../utils/scrolling';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 p-4 md:p-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
          Engenharia Geotécnica de Precisão
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 animate-fade-in-up">
          Soluções completas em sondagem e classificação de solos para garantir a segurança e a viabilidade do seu projeto.
        </p>
        <a
          href="#servicos"
          onClick={smoothScrollTo}
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-transform duration-300 hover:scale-110 transform animate-bounce shadow-lg shadow-cyan-500/50"
        >
          Descubra como podemos ajudar
        </a>
      </div>
    </section>
  );
};

export default Hero;