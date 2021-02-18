import styled from 'styled-components';
import { NavContainer } from '../../Navbar/Navbar.element';

export const HeaderComponent = styled.header`
  overflow: hidden;
`;

export const Container = styled(NavContainer)`
  min-height: calc(100vh - 66px); // 66px -> navbar height
  align-items: flex-start;
  gap: 100px;
  padding-top: 10rem;
`;

export const Title = styled.h1`
  font-size: 58px;
  font-weight: 400;
`;

export const BodyText = styled.p`
  margin: 20px 0;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;
