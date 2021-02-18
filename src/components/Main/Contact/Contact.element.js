import styled from 'styled-components';
import { BtnComponent } from '../../Button/Button';
import { Container } from '../Team/Team.element';

export const SectionContact = styled.section`
  background-color: #972020;
  padding: 50px 0 100px;
`;

export const ContactContainer = styled(Container)`
  position: unset;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  width: calc(100% - 100px); // 100px -> width button
  max-width: 500px;
  height: 50px;
  font-family: inherit;
`;

export const ContactButton = styled(BtnComponent)`
  background-color: white;
  color: black;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffffcc;
  }
`;
