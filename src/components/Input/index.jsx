import { Container, Button } from './styles';

import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import getUSer from '../../Functions/GithubUser';


function Input() {

  const [username, setUsername] = useState(" ");
  
  function handleSearch() {
    const user = getUSer(username);

    /* CONTINUAR AQUI 24/10!! */
  }

  return(
    <Container>
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
    </Container>
  )
}

export { Input }