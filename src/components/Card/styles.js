import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;

  max-width: 438px;
  height: 693px;

  background-color: black;
  border-radius: 50px;

`;

export const Inner = styled.div`

  width: 100%;

  max-width: 407px;
  height: 644px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 50px;

  > header {

    display: flex;
    align-items: center;
    gap: 20px;

    padding: 38px 33px;

    div {

      border: 1px solid #FFFFFF;
      border-radius: 50%;

      padding: 10px 16px;

      img {
        width: 30px;
      }
    }
    
    h1 {
      font-size: 24px;
    }
  }

  > main {

    overflow-y: hidden;
    overflow-x: hidden;
    max-height: 420px;

    img {
      border: 10px solid ${({ theme }) => theme.COLORS.PURPLE};
      border-radius: 50%;

      max-width: 372px;

      position: relative;
      left: 90px;
    }
  }

  > footer {

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    padding-right: 15px;
    padding-top: 15px;

    img {
      width: 28px;
    }

    span {
      font-size: 20px;
    }
  }
`;