import { useState } from 'react';
import { Container, List, Li, Button, Box } from "./styles";

import { FiMapPin, FiUsers, FiSearch } from 'react-icons/fi';
import { BiBuildings, BiBookBookmark } from 'react-icons/bi';

import getUSer from '../../Functions/GithubUser';


export function Input() {

  const [name, setUsername] = useState('');

  function handleSearch() {
    const user = name;

    const userObject = getUSer(user);

    const public_repos = userObject.then(data => data.public_repos);
    const following = userObject.then(data => data.following);
    const followers = userObject.then(data => data.followers);
    const location = userObject.then(data => data.location);
    const login = userObject.then(data => data.login);

    console.log(login, following, followers, location, public_repos);
  }

  return(
    <Box>
      <input 
        type="text" 
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <Button 
        onClick={handleSearch}
      >
        <FiSearch />
      </Button>
    </Box>
  )
}

export function Infos() {
  return(
    <Container>
      <List>
        <Li> <FiUsers /> 1000 Seguidores </Li>
        <Li> <FiUsers /> 756 Seguindo </Li>
        <Li> <BiBookBookmark /> 55 Repositórios </Li>
        <Li> <BiBuildings /> @Rocketseat </Li>
        <Li> <FiMapPin /> Manaus </Li>
      </List>
    </Container>
  )
}