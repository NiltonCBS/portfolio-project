import React from 'react';
import { Code, Star, GitFork, Smartphone } from 'lucide-react';

const StatsSection = ({ user, repos }) => {
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];

  const stats = [
    { label: 'Repositórios', value: user?.public_repos || 0, icon: Code },
    { label: 'Stars', value: totalStars, icon: Star },
    { label: 'Forks', value: totalForks, icon: GitFork },
    { label: 'Linguagens', value: languages.length, icon: Smartphone }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Estatísticas do GitHub
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-8 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-12 h-12 text-blue-400 group-hover:text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300 group-hover:text-white">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;