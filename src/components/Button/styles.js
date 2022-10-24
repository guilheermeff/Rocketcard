import styled from 'styled-components';

export const Container = styled.button`

  background-color: #000000;
  color: #FFFFFF;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 15px;
  padding: 18px 46px;

  font-size: 15px;
  line-height: 22px;
`;