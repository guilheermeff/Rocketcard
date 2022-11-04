import { useState } from 'react';
import { Container, List, Li } from "./styles";

import { FiMapPin, FiUsers} from 'react-icons/fi';
import { BiBuildings, BiBookBookmark } from 'react-icons/bi';

export function Infos() {

  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user)

  return(
    <Container>
      <List>
        <Li> <FiUsers /> Seguidores </Li>
        <Li> <FiUsers /> Seguindo </Li>
        <Li> <BiBookBookmark /> Repositórios </Li>
        <Li> <BiBuildings /> @Rocketseat </Li>
        <Li> <FiMapPin /></Li>
      </List>
    </Container>
  )
}