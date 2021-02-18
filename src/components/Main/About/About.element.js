import styled from 'styled-components';
import { NavContainer } from '../../Navbar/Navbar.element';

export const AboutSection = styled.section`
  padding: 4rem 0;
`;

export const SectionTitle = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const Container = styled(NavContainer)`
  margin-top: 7rem;
  gap: 100px;
  padding-left: 10rem;
  position: relative;

  &::after {
    content: '';
    width: 2px;
    height: 400px;
    background-color: #c83a3a80;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -150px;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
    padding: 0;
    padding-right: 10rem;

    &::after {
      margin: 0;
      left: unset;
      right: 0;
    }
  }
`;

export const Title = styled.h2`
  color: #c83a3a;
  margin-bottom: 10px;
`;

export const BodyText = styled.p`
  font-size: 18px;
`;
