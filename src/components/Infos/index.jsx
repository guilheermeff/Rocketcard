import { Container, List, Li } from "./styles";

import { FiMapPin, FiUsers, } from 'react-icons/fi';
import { BiBuildings, BiBookBookmark } from 'react-icons/bi';

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