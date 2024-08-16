import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  ${isMobile} {
    width: 328px;
    margin-top: 60px;
  }

  ${isTablet} {
    width: 728px;
    margin-top: 16px;
    margin-bottom: 30px;
  }
`;

export const EmptyMessageContainer = styled.div`
  width: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${isMobile} {
    width: 328px;
    heigth: 206px;
  }

  ${isTablet} {
    width: 263px;
    height: 206px;
  }
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  margin: 0;
`;

export const Message = styled.h2<{ smallfont: boolean }>`
  width: auto;
  margin-left: 29px;
  font: var(--T2);
  color: var(--NS-White);
  white-space: pre-line;
  text-align: center;

  ${isMobileOrTablet} {
    //font: var(--P-T1);
    margin: 0;
    font: ${props => (props.smallfont ? 'var(--P-T3)' : 'var(--P-T1)')};
  }

  ${isTablet} {
    margin-top: 8px;
  }
`;

export const ButtonContainer = styled.div`
  width: 450px;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 62px;

  ${isMobile} {
    margin-top: 32px;
  }

  ${isTablet} {
    margin-top: 56px;
    margin-bottom: 0;
  }

  ${isMobileOrTablet} {
    width: 328px;
    height: 38px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 40px;
  border: none;
  font: var(--T2-2);
  color: var(--NS-White);
  background-color: var(--NS-Main1);
  cursor: pointer;
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);

  ${isMobileOrTablet} {
    width: 328px;
    height: 38px;
    border-radius: 28px;
    font: var(--P-T2);
  }
`;
