import React from 'react';
import { WhatsAppIcon, EmailIcon } from '../constants';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';


const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const whatsappNumber = '5583996271874';
  const emailAddress = 'cgkconsultoria@gmail.com';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento para serviços de consultoria geotécnica.`;

  return (
    <section id="contato" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-extrabold text-white mb-4">Pronto para Iniciar Seu Próximo Projeto?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Solicite uma análise técnica e garanta a segurança e viabilidade da sua obra. Estamos prontos para oferecer a melhor solução em engenharia geotécnica para você.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40 w-full md:w-auto transform-gpu ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <WhatsAppIcon />
            Contatar via WhatsApp
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className={`flex items-center justify-center gap-3 bg-gray-700 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 w-full md:w-auto transform-gpu ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '350ms' }}
          >
            <EmailIcon />
            Enviar um E-mail
          </a>
        </div>
        <div className={`mt-12 text-gray-400 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 delay-500' : 'opacity-0'}`}>
            <p className="text-lg">
                <strong>E-mail:</strong>{' '}
                <a href={`mailto:${emailAddress}`} className="hover:text-cyan-400 transition-colors duration-300">
                    {emailAddress}
                </a>
            </p>
            <p className="text-lg mt-2">
                <strong>Telefone:</strong>{' '}
                <a href={`tel:+${whatsappNumber}`} className="hover:text-cyan-400 transition-colors duration-300">
                    +55 (83) 99627-1874
                </a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;