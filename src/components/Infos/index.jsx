
import { Container, List, Li } from "./styles";

import { FiMapPin, FiUsers} from 'react-icons/fi';
import { BiBuildings, BiBookBookmark } from 'react-icons/bi';

export function Infos() {

  const following = localStorage.getItem("@Rocketcard:following");
  const followers = localStorage.getItem("@Rocketcard:followers");
  const location = localStorage.getItem("@Rocketcard:location");
  const public_repos = localStorage.getItem("@Rocketcard:public_repos");

  return(
    <Container>
      <List>
        <Li> <FiUsers />{following} seguindo </Li>
        <Li> <FiUsers />{followers} seguidores </Li>
        <Li> <BiBookBookmark />{public_repos} repositórios </Li>
        <Li> <BiBuildings /> @Rocketseat </Li>
        <Li> <FiMapPin /> {location} </Li>
      </List>
    </Container>
  )
}