import React from 'react';
import RepoCard from '../ui/RepoCard'; // Certifique-se de que o caminho está correto

const ProjectsSection = ({ repos }) => (
  <section className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Meus Projetos
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Uma seleção dos meus repositórios mais recentes e interessantes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

