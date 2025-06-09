const fetchUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error('Usuário não encontrado');
  return response.json();
};

const fetchRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
  if (!response.ok) throw new Error('Erro ao buscar repositórios');
  const repos = await response.json();
  return repos.filter(repo => !repo.fork);
};

const fetchGitHubData = async (username) => {
  const [user, repos] = await Promise.all([
    fetchUser(username),
    fetchRepos(username)
  ]);
  return { user, repos };
};

export default {
  fetchUser,
  fetchRepos,
  fetchGitHubData
};