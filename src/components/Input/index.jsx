import { Container, Button } from './styles';

import { FiSearch } from 'react-icons/fi';

export function Input() {
  return(
    <Container>
      <input type="text" placeholder="Username"/>
      <Button>
        <FiSearch />
      </Button>
    </Container>
  )
}