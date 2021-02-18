import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
  return <BtnComponent>{text}</BtnComponent>;
};

export const BtnComponent = styled.button`
  background-color: #951f1f;
  color: white;
  padding: 10px 30px;
  font-family: inherit;
  font-weight: bold;
  border: none;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
`;

export default Button;
