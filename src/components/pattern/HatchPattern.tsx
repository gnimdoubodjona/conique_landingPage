import { useState } from 'react';

// Composant Pattern de Lignes Diagonales
export default function HatchPattern() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Pattern lignes diagonales gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 overflow-hidden">
        <div 
          className="h-full w-full"
          style={{
            backgroundColor: '#e5e5f7',
            opacity: 0.8,
            backgroundSize: '10px 10px',
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, #e5e5f7 0, #e5e5f7 50%)'
          }}
        />
        {/* Fade vers la droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white" />
      </div>
      
      {/* Pattern lignes diagonales droite */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 overflow-hidden">
        <div 
          className="h-full w-full"
          style={{
            backgroundColor: '#e5e5f7',
            opacity: 0.8,
            backgroundSize: '10px 10px',
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, #e5e5f7 0, #e5e5f7 50%)'
          }}
        />
        {/* Fade vers la gauche */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
      </div>

      {/* Fade du bas (optionnel) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}