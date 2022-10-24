import { Container } from "./styles";

import changeFrameColor from '../../Functions/change.frame.color';

export function Button() {
  return(
    <Container
      onClick={changeFrameColor}
    >
      Gerar background
    </Container>
  )
}