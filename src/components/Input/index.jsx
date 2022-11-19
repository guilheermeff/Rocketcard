import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { Box, Button } from './styles';
import getUser from '../../Functions/GithubUser'

export function Input() {

  const [name, setUsername] = useState('');

  function handleSearch() {
    getUser(name);
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