import React from 'react';
import {
  BodyText,
  Card,
  CardContainer,
  Container,
  Icon,
  IconContainer,
  SectionTitle,
  Title,
  ValueSection,
} from './Value.element';
import { values } from '../../../assets/data/data';

const Value = () => {
  return (
    <ValueSection>
      <Container>
        <SectionTitle>Our Values</SectionTitle>

        <CardContainer>
          {values.map((value, idx) => (
            <Card key={idx}>
              <IconContainer>{<value.icon style={Icon} />}</IconContainer>

              <Title>{value.title}</Title>
              <BodyText>{value.body}</BodyText>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </ValueSection>
  );
};

export default Value;
