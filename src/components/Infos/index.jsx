import { useState } from 'react';
import { Container, List, Li, Button, Box } from "./styles";

import { FiMapPin, FiUsers, FiSearch } from 'react-icons/fi';
import { BiBuildings, BiBookBookmark } from 'react-icons/bi';

import getUSer from '../../Functions/GithubUser';

export function Input() {

  const [username, setUsername] = useState({});

  function handleSearch() {
    const user = getUSer(username);
    return user;
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