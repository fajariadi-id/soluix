import React from 'react';
import { aboutUs } from '../../../assets/data/data';
import {
  SectionTitle,
  AboutSection,
  Container,
  BodyText,
  Title,
} from './About.element';

const About = () => {
  return (
    <AboutSection id='about'>
      <SectionTitle>About Us</SectionTitle>

      {aboutUs.map(({ title, body, img }, idx) => (
        <Container key={idx}>
          <div>
            <Title>{title}</Title>
            <BodyText>{body}</BodyText>
          </div>

          <img src={img} alt={title} />
        </Container>
      ))}
    </AboutSection>
  );
};

export default About;
