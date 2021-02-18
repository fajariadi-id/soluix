import styled from 'styled-components';
import { Card, Container, ValueSection } from '../Value/Value.element';

export const SectionProduct = styled(ValueSection)`
  /* min-height: calc(100vh - 66px); // 66px -> nav height */

  &::before {
    height: unset;
  }
`;

export const ProductContainer = styled(Container)`
  box-shadow: unset;
`;

export const ProductCard = styled(Card)`
  padding: 50px 10px;
  border-radius: 10px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  margin-bottom: 20px;
`;
