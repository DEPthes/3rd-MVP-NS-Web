import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Section id="service">
          <Service>N력 키우기란?</Service>
        </Section>
        <Section id="usage">
          <Usage>이용 방법</Usage>
        </Section>
        <Footer>
          <img src="/src/assets/icons/☞.svg" alt="right-icon" />
          <StyledButton onClick={() => navigate('/scenario')}>
            나였다면
          </StyledButton>
          <img src="/src/assets/icons/☜.svg" alt="left-icon" />
        </Footer>
      </Content>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font: var(--T2);
`;

const Content = styled.div`
  padding-top: 80px; /* Adjust this if there is a fixed header height */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Section = styled.div`
  margin: 5rem 0 50rem 0;
`;

const Service = styled.div`
  width: 11.3rem;
  height: 2.3rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #5e72eb;
  padding: 0.1rem 0.5rem;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const Usage = styled.div`
  width: 6rem;
  height: 2.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #5e72eb;
  padding: 0.02rem 0.05rem;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  margin: 10rem 0;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledButton = styled.button`
  width: 6.37rem;
  height: 2.75rem;
  background-color: #ffffff;
  color: #5e72eb;
  border: 3px solid #5e72eb;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 28px 10px 28px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
