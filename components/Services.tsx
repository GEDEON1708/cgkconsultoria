import React from 'react';
import { DrillIcon, SoilIcon, ReportIcon, GeologyIcon } from '../constants';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
    <div className="bg-gray-700 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-cyan-400 mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  
  const servicesData = [
    {
      icon: <DrillIcon />,
      title: 'Sondagem de Solo (SPT)',
      description: 'Executamos sondagens à percussão (SPT) para determinar as características do subsolo, fornecendo dados essenciais para fundações seguras e econômicas.'
    },
    {
      icon: <SoilIcon />,
      title: 'Classificação de Solos',
      description: 'Realizamos a classificação tátil-visual e laboratorial dos solos (MCT, SUCS), identificando suas propriedades e comportamento para otimizar o projeto de engenharia.'
    },
    {
      icon: <GeologyIcon />,
      title: 'Investigação Geotécnica',
      description: 'Realizamos a caracterização geológica de solos e rochas, com elaboração de boletins de sondagem e relatórios técnicos completos para uma análise precisa do subsolo.'
    },
    {
      icon: <ReportIcon />,
      title: 'Laudos e Relatórios Técnicos',
      description: 'Elaboramos relatórios técnicos detalhados e laudos geotécnicos completos, em conformidade com as normas ABNT, para subsidiar suas decisões de projeto.'
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold text-white">Nossos Serviços Especializados</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços geotécnicos para atender às necessidades específicas de cada obra.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
             <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + index * 150}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
