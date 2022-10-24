import { Container, Inner } from "./styles";

import { Infos } from '../Infos';

import logo from "../../assets/logo.svg";

export function Card() {
  return(
    <Container>
      <Inner>
        <header>
          <div>
            <img src={logo} alt="imagem da logomarca rocketseat" />
          </div>
          <h1>guilheermeff</h1>
        </header>

        <main>
          <img src="https://github.com/guilheermeff.png" alt="imagem de perfil do usuário" />

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