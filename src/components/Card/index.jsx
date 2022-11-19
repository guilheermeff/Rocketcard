import { Container, Inner } from "./styles";
import { Infos } from '../Infos';
import { Avatar } from "../Avatar";
import logo from "../../assets/logo.svg";

export function Card() {

  const user = localStorage.getItem('@Rocketcard:login');

  return(
    <Container id="frame">
      <Inner>
        <header>
          <div>
            <img src={logo} alt="imagem da logomarca rocketseat" />
          </div>
          <h1>{user}</h1>
        </header>

        <main>
          <Avatar />

          <Infos />
        </main>

        <footer>
          <img src={logo} alt="imagem da logomarca rocketseat" />
          <span>ROCKETCARD</span>
        </footer>
      </Inner>
    </Container>
  )
}