import styled from 'styled-components';

export const ValueSection = styled.section`
  min-height: calc(100vh - 66px); // 66px -> nav height
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: calc(100vh / 2);
    background-color: #972020;
  }
`;

export const SectionTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 3rem;
`;

export const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1170px;
  z-index: 1;
  padding: 2rem 5rem 5rem;
  border-radius: 10px;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const Card = styled.div`
  text-align: center;
  width: 100%;
  max-width: 300px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

export const BodyText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
`;

export const IconContainer = styled.div`
  background-color: white;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const Icon = {
  color: '#c83a3a',
  border: '3px solid #c83a3a',
  borderRadius: '10px',
  padding: '10px',
  fontSize: '4rem',
};
