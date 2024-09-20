import React, { useEffect } from 'react';

const Scriptrd = () => {
  useEffect(() => {
    // Cria o elemento script
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/e8d24cad-4801-4cd9-a235-77843cb75a89-loader.js';
    script.async = true;

    // Adiciona o script ao body
    document.body.appendChild(script);

    // Remove o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Garante que o componente sempre retorne algo
  return <p>teste</p>;
};

export default Scriptrd;
