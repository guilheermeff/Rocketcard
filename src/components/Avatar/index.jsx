import { Container } from './styles';

export function Avatar() {

  const username = localStorage.getItem('@Rocketcard:login');
  const source = `https://github.com/${username}.png`;

  return(
    <Container src={source} >

    </Container>
  )
}