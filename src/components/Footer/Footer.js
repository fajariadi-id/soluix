import React from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { footerLinks } from '../../assets/data/data';
import logo from '../../assets/images/logo-footer.png';
import { Copy, FooterContainer, Links, Title } from './Footer.element';

const Footer = () => {
  return (
    <footer style={{ padding: '5rem' }}>
      <FooterContainer>
        <img src={logo} alt='logo' />

        {footerLinks.map(({ title, links }, index) => (
          <div key={index}>
            <Title>{title}</Title>
            <ul>
              {links.map(({ name }, index) => (
                <Links key={index}>
                  <a href='#!'>{name}</a>
                </Links>
              ))}
            </ul>
          </div>
        ))}
      </FooterContainer>

      <hr style={{ margin: '50px 0' }} />

      <FooterContainer>
        <Copy>
          Copyright &copy; 2020 IDR Inovasi Digital Ritel, Inc. All rights
          reserved.
        </Copy>

        <FaYoutube style={{ color: '#D44040', cursor: 'pointer' }} />
        <FaLinkedinIn style={{ color: '#D44040', cursor: 'pointer' }} />
        <FaInstagram style={{ color: '#D44040', cursor: 'pointer' }} />
        <FaTwitter style={{ color: '#D44040', cursor: 'pointer' }} />
      </FooterContainer>
    </footer>
  );
};

export default Footer;
