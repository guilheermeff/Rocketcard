class GithubUser {
  static getuser(username) {

      const endPoint = `https://api.github.com/users/${username}`;
  
      return fetch(endPoint)
              .then(data => data.json())
              .then(({ login, following, followers, location, public_repos }) => ({ login, following, followers, location, public_repos }))
  }
}

export default GithubUser;