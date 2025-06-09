import React from 'react';
import LoadingSpinner from '../ui/LoadingSpinner'; // Certifique-se de que o caminho está correto

const LoadingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-white mt-4">Carregando seu portfólio...</p>
    </div>
  </div>
);

export default LoadingPage;