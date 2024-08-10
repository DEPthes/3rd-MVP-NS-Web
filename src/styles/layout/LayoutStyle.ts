import backgroundImage from '@/assets/images/Background.svg';
import background2Image from '@/assets/images/Background2.svg';
import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

export const Main = styled.main<{ type: number }>`
  background-image: ${({ type }) =>
    type === 1 ? `url(${backgroundImage})` : `url(${background2Image})`};
  background-position: top;
  background-repeat: no-repeat;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  ${isMobileOrTablet} {
    background-image: none;
  }
`;
