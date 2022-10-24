import styled from 'styled-components';

export const Container = styled.div`

  width: fit-content;

  position: relative;
  top: -140px;
  left: 21px;
`;

export const List = styled.ul`

  list-style: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INFOS};
  width: fit-content;
  padding: 30px 20px;

  border-radius: 50px;
`;

export const Li = styled.li`
  
  display: flex;
  align-items: center;

  gap: 10px;
`;