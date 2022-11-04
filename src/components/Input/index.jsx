import GithubUser from '../../Functions/GithubUser';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import { Box, Button } from './styles';

export function Input() {

  const [name, setUsername] = useState('');

  function handleSearch() {

    localStorage.removeItem("user");

    const user = name;

    GithubUser.getuser(user).then(data => {
      localStorage.setItem("user", JSON.stringify(data));
    });
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