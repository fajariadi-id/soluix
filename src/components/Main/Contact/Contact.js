import React from 'react';
import { SectionTitle } from '../Value/Value.element';
import {
  ContactButton,
  ContactContainer,
  Input,
  SectionContact,
} from './Contact.element';

const Contact = () => {
  return (
    <SectionContact id='contact'>
      <SectionTitle style={{ color: 'white' }}>
        Get in touch with us!
      </SectionTitle>

      <form action='mailto:fajariadi.id@gmail.com' method='post'>
        <ContactContainer>
          <Input type='email' placeholder='Email Address' name='email' />
          <ContactButton type='submit'>SEND</ContactButton>
        </ContactContainer>
      </form>
    </SectionContact>
  );
};

export default Contact;
