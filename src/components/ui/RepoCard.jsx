import React, { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Calendar, Code } from 'lucide-react';

const RepoCard = ({ repo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efeito de background animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {repo.name}
            </h3>
          </div>
          <div className="flex space-x-2">
            {repo.html_url && (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-700 hover:bg-blue-600 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-700 hover:bg-green-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-4 h-12 overflow-hidden">
          {repo.description || 'Sem descrição disponível'}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          
          {repo.language && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
              {repo.language}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center text-xs text-slate-500">
          <Calendar className="w-3 h-3 mr-1" />
          Atualizado em {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;