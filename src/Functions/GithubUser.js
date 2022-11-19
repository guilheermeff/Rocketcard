function getUser(username) {

  const endPoint = `https://api.github.com/users/${username}`;

  fetch(endPoint)
    .then(data => data.json())
    .then(data => {
    
    const { login, following, followers, location, public_repos } = data;

    localStorage.setItem("@Rocketcard:login", login);
    localStorage.setItem("@Rocketcard:following", following);
    localStorage.setItem("@Rocketcard:followers", followers);
    localStorage.setItem("@Rocketcard:location", location);
    localStorage.setItem("@Rocketcard:public_repos", public_repos);
  })

  setTimeout(() => location.reload(), 550);
}

export default getUser;