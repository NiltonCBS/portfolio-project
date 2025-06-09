import React from 'react';

const ErrorPage = ({ error, onRetry }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="text-red-500 text-xl mb-4">Erro: {error}</div>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
      >
        Tentar Novamente
      </button>
    </div>
  </div>
);

export default ErrorPage;