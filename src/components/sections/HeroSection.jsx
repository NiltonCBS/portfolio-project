import React from 'react';
import { Github, User, Briefcase, Mail, MapPin } from 'lucide-react';
import ContactSection from './ContactSection'; // Importando o componente de contato

const HeroSection = ({ user }) => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    {/* Background animado */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>

    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <img
          src={user?.avatar_url || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-2xl animate-pulse"
        />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
        {user?.name || 'Desenvolvedor'}
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
        {user?.bio || 'Transformando ideias em código e criando experiências digitais incríveis'}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8 text-slate-400">
        {user?.location && (
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{user.location}</span>
          </div>
        )}
        {user?.email && (
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{user.email}</span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>{user?.public_repos || 0} repositórios</span>
        </div>
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href={user?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span>Ver GitHub</span>
          </div>
        </a>
        
        <a
          href= "#ContactSection"
          className="group px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5" />
            <span>Contato</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;