import backgroundImage from '@/assets/images/Background.svg';
import background2Image from '@/assets/images/Background2.svg';
import BackgroundMobile from '@/assets/images/BackgroundMobile.svg';
import BackgroundTablet from '@/assets/images/BackgroundTablet.svg';
import { isMobile } from '@/hooks/Media';
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
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    background-image: url(${BackgroundMobile});
  }

  @media (min-width: 580px) and (max-width: 910px) {
    background-image: url(${BackgroundTablet});
  }
`;
