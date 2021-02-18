import styled from 'styled-components';

export const Nav = styled.nav`
  overflow: hidden;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ bgColor }) => (bgColor ? '#951F1F' : 'white')};
  z-index: 999;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkContainer = styled.ul`
  display: flex;
`;

export const Links = styled.li`
  margin-left: 50px;
  color: ${({ color }) => (color ? '#fff' : '#951F1F')};

  &:hover {
    color: ${({ color }) => (color ? '#fff' : '#951F1F')};
  }
`;
