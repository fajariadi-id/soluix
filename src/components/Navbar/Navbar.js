import React, { useEffect, useRef, useState } from 'react';
import logoPrimary from '../../assets/images/logo-primary.png';
import logoSecondary from '../../assets/images/logo-secondary.png';
import { navLinks } from '../../assets/data/data';
import { LinkContainer, Links, Nav, NavContainer } from './Navbar.element';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);

  const nav = useRef(null);

  useEffect(() => {
    const navHeight = nav.current.clientHeight;
    const scrollNav = () => {
      window.pageYOffset > navHeight ? setChangeNav(true) : setChangeNav(false);
    };

    window.addEventListener('scroll', scrollNav);
    return () => {
      window.removeEventListener('scroll', scrollNav);
    };
  }, []);
  return (
    <Nav ref={nav} bgColor={changeNav}>
      <NavContainer>
        <a href='#'>
          <img src={changeNav ? logoSecondary : logoPrimary} alt='logo IDR' />
        </a>

        <LinkContainer>
          {navLinks.map(({ name }, idx) => (
            <Links color={changeNav} key={idx}>
              <a href={`#${name.toLowerCase().split(' ').join('-')}`}>{name}</a>
            </Links>
          ))}
        </LinkContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
