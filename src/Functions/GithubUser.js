export function githubUSer(username) {

  const endPoint = `https://api.github.com/users/${username}`;

  return fetch(endPoint)
  .then(data => data.json())
  .then(data => {
    
    const { login, followers, following, public_repos, location } = data;

    return {
      login,
      followers,
      following,
      public_repos,
      location
    }
  })
}