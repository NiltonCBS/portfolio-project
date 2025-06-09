import React from 'react';
import { Github } from 'lucide-react';

const Footer = ({ user, username, onChangeUser }) => (
  <footer className="bg-slate-800 py-8">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-slate-400">
        © 2025 {user?.name || username}. Utilizando React e TailwindCSS.
      </p>
    </div>
  </footer>
);

export default Footer;