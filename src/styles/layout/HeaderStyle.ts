import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  z-index: 10;
  margin: 70px 100px 0;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  user-select: none;

  ${isMobile} {
    margin: 30px 16px 0;
  }

  ${isTablet} {
    margin: 30px 36px 0;
  }

  @media (min-width: 1210px) and (max-width: 1400px) {
    margin: 60px 80px 0;
  }
`;

export const NavMain = styled(NavLink)`
  text-decoration: none;
  font: var(--Logo);
  color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  ${isMobile}, ${isTablet} {
    font: var(--LogoMini);
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: 60px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    gap: 40px;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font: var(--T2);
  color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  &.active {
    text-decoration: underline var(--NS-White) 2px;
    text-underline-offset: 4px;
    color: var(--NS-White);
  }
`;

export const NavLinksMain = styled.div<{ $isActive: boolean }>`
  font: var(--T2);
  color: var(--NS-White);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: ${({ $isActive }) =>
    $isActive ? 'underline var(--NS-White) 2px' : 'none'};
  text-underline-offset: ${({ $isActive }) => ($isActive ? '4px' : 'none')};
`;

export const HamNav = styled.div`
  height: 100%;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 200px;
    gap: 50px;
    padding-left: 40px;
  }

  ${isTablet} {
    width: 300px;
    gap: 70px;
    padding-left: 68px;
  }

  > svg {
    position: absolute;
    top: 46px;
    left: 20px;

    ${isTablet} {
      top: 78px;
      left: 28px;
    }
  }
`;

export const HamNavLinks = styled(NavLink)`
  color: var(--Gray1);
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &.active {
    color: var(--NS-Black);
  }

  ${isMobile} {
    font: var(--W1);
  }

  ${isTablet} {
    font: var(--T3-1);
  }
`;

export const HamNavLinksMain = styled.div<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? 'var(--NS-Black)' : 'var(--Gray1)')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    font: var(--W1);
  }

  ${isTablet} {
    font: var(--T3-1);
  }
`;
