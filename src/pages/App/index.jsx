import { Container } from "./styles";

import { Card } from '../../components/Card';
import { Customize } from "../../components/Customize";
import { Search } from "../../components/Search";

export function App() {
  return(
    <Container>

      <p>Compartilhe seu #rocketcard</p>

      <Card />

      <Customize />

      <Search />

    </Container>
  )
}