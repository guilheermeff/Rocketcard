import styled from 'styled-components';

export const Container = styled.div`

  width: fit-content;

  position: relative;
  top: -140px;
  left: 21px;

  background-image: linear-gradient( #000000, #464545);
  border-radius: 50px;
  opacity: 0.6;
`;

export const List = styled.ul`

  list-style: none;

  width: fit-content;
  padding: 30px 20px;
`;

export const Li = styled.li`
  
  display: flex;
  align-items: center;
  gap: 10px;

  color: #FFFFFF;
`;

export const Button = styled.button`

  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  border: 0;
  border-radius: 50px;

  > svg {
    font-size: 24px;
    color: #000000;
  }
`;

export const Box = styled.div`

  background-color: #000000;
  color: #FFFFFF;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 15px;

  padding: 16px 12px;

  display: flex;
  align-items: center;

  > input {

    background-color: transparent;
    border: 0;
    color: #FFFFFF;
    width: 200px;

    font-size: 15px;
    line-height: 22px;

    &::placeholder {
      color: #FFFFFF;
      letter-spacing: -0.02em;
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
`;