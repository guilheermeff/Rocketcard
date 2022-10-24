import styled from 'styled-components';

export const Container = styled.div`

  position: relative;

  > p {
    position: absolute;
    left: 467px;
  }

  > div {
    position: absolute;
    left: 366px;
    top: 40px;
  }

  > div:nth-child(3) {
    top: 400px;
    left: 975px;
  }

  > div:nth-child(4) {
    top: 190px;
    left: 954px;
  }
`;