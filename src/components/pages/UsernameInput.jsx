import React from 'react';
import { Github } from 'lucide-react';

const UsernameInput = ({ onSubmit }) => {
  const fixedUsername = "NiltonCBS";

  const handleSubmit = (e) => {
    e.preventDefault?.();
    onSubmit(fixedUsername);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center mb-8">
          <Github className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">GitHub Portfolio</h1>
          <p className="text-slate-400">Portfólio do GitHub de NiltonCBS</p>
        </div>
        
        <div className="space-y-4">
          <div className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white flex items-center justify-center">
            <Github className="w-5 h-5 mr-2 text-blue-400" />
            <span className="font-medium">{fixedUsername}</span>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Gerar Portfólio
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsernameInput;