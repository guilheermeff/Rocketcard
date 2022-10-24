import styled from 'styled-components';

export const Container = styled.input`

  background-color: #000000;
  color: #FFFFFF;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 15px;
  padding: 18px 46px;

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
`;

