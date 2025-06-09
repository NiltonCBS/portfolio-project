import React, { useState } from 'react';
import useGitHub from './hooks/useGitHub';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import Footer from './components/sections/Footer';
import UsernameInput from './components/pages/UsernameInput';
import LoadingPage from './components/pages/LoadingPage';
import ErrorPage from './components/pages/ErrorPage';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  const [username, setUsername] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const { user, repos, loading, error, fetchGitHubData, reset } = useGitHub();

  const handleSubmitUsername = (githubUsername) => {
    setUsername(githubUsername);
    fetchGitHubData(githubUsername);
  };

  const handleChangeUser = () => {
    setUsername('');
    setInputUsername('');
    reset();
  };

  const handleRetry = () => {
    handleChangeUser();
  };

  // Renderização condicional baseada no estado
  if (!username) {
    return (
      <UsernameInput
        inputUsername={inputUsername}
        setInputUsername={setInputUsername}
        onSubmit={handleSubmitUsername}
      />
    );
  }

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} onRetry={handleRetry} />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection user={user} />
      <StatsSection user={user} repos={repos} />
      <ProjectsSection repos={repos} />
      <ContactSection user={user} />
      <Footer 
        user={user} 
        username={username} 
        onChangeUser={handleChangeUser} 
      />
    </div>
  );
};

export default App;