import React from 'react';
import { Link } from 'react-router-dom';
import { header } from '../../../assets/data/data';
import Button from '../../Button/Button';
import {
  BodyText,
  Container,
  HeaderComponent,
  Image,
  Title,
} from './Header.element';

const Header = () => {
  return (
    <HeaderComponent>
      <Container>
        <div>
          <Title>{header.title}</Title>
          <BodyText>{header.body}</BodyText>
          <Link to='/about'>
            <Button text='Tentang Kami' />
          </Link>
        </div>

        <Image src={header.img} alt='' />
      </Container>
    </HeaderComponent>
  );
};

export default Header;
