
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="mb-4">&copy; {new Date().getFullYear()} CGK Consultoria. Todos os direitos reservados.</p>
        <div className="mb-4">
            <p><strong>Catherine Irina Kashomona Consultoria</strong></p>
            <p>CREA-PB: 16090098-0</p>
            <p>cgkconsultoria@gmail.com | +55 (83) 99627-1874</p>
        </div>
        <p>
          Desenvolvido por{' '}
          <a 
            href="https://okapi-code-forge.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Okapi Code Forge
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
