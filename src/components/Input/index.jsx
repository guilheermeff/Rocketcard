import { Container, Button } from './styles';

import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import getUSer from '../../Functions/GithubUser';

export function Input() {

  const [username, setUsername] = useState(" ");

  function handleSearch() {
    const user = getUSer(username);
    console.log(user)
  }

  return(
    <Container>
      <input 
        type="text" 
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <FiSearch />
      </Button>
    </Container>
  )
}