import React, { useState } from 'react';
import githubService from '../services/githubService';

const useGitHub = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubData = async (username) => {
    try {
      setLoading(true);
      setError(null);
      
      const { user, repos } = await githubService.fetchGitHubData(username);
      
      setUser(user);
      setRepos(repos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setUser(null);
    setRepos([]);
    setError(null);
    setLoading(false);
  };

  return {
    user,
    repos,
    loading,
    error,
    fetchGitHubData,
    reset
  };
};

export default useGitHub;