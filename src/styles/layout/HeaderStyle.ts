import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 10;
  margin: 70px 100px 0;
  justify-content: space-between;
`;

export const NavMain = styled(NavLink)`
  text-decoration: none;
  font: var(--Logo);
  color: var(--NS-White);
`;

export const Nav = styled.div`
  display: flex;
  gap: 60px;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font: var(--T2);
  color: var(--NS-White);

  &.active {
    text-decoration: underline var(--NS-White) 2px;
    text-underline-offset: 4px;
    color: var(--NS-White);
  }
`;
