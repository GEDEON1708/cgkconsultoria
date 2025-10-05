import React from 'react';
import { UserPlaceholderIcon } from '../constants';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="sobre" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/3 w-full flex justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="rounded-full w-64 h-64 md:w-80 md:h-80 p-4 object-cover border-4 border-cyan-500 shadow-lg bg-gray-700 flex items-center justify-center">
              <UserPlaceholderIcon className="w-32 h-32 text-gray-500" />
            </div>
          </div>
          <div className={`lg:w-2/3 w-full text-center lg:text-left transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-4xl font-extrabold text-white mb-4">Sobre a CGK Consultoria</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A CGK Consultoria, sigla de Catherine Irina Kashomona Consultoria, nasceu da paixão pela engenharia geotécnica e do compromisso com a excelência. Liderada pela Engenheira Civil Catherine, nossa missão é fornecer análises de solo precisas e confiáveis, que sirvam como alicerce para projetos de construção seguros, eficientes e inovadores.
            </p>
            <div className="bg-gray-700 p-6 rounded-lg inline-block shadow-md">
              <h3 className="text-xl font-bold text-cyan-400">Catherine Irina Kashomona</h3>
              <p className="text-gray-300 mt-1">Engenheira Civil</p>
              <p className="text-md text-cyan-300 font-semibold mt-2 tracking-wider">CREA-PB: 16090098-0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
