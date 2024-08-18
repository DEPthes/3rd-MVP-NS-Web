import styled from 'styled-components';
import { isMobileOrTablet, isMobile, isTablet } from '@/hooks/Media';

export const Top3UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${isMobile} {
    width: 64px;
    height: 111px;
    max-with: 500px;
  }

  ${isTablet} {
    width: 96.1px;
    height: 111px;
    max-with: 500px;
  }
`;

export const Medal = styled.div`
  font: var(--H4);
  margin-bottom: 5px;

  ${isMobile} {
    margin-bottom: 8px;
    height: 16px;
    font: var(--S1-2);
  }

  ${isTablet} {
    margin-bottom: 8px;
    height: 16px;
    font: var(--S1-2);
  }
`;

export const TopCircle = styled.div`
  border-radius: 50%;
  width: 156px;
  height: 156px;
  background-color: var(--NS-White);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #749df5;

  ${isMobileOrTablet} {
    width: 64px;
    height: 64px;
    margin-bottom: 4px;
  }
`;

export const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserId = styled.div`
  margin-top: 6px;
  font: var(--T2);
  color: var(--NS-White);
  text-align: center;
  height: 28px;

  ${isMobileOrTablet} {
    margin-top: 4px;
    height: 19px;
    font: var(--T13);
    position: relative;
    width: auto;
    white-space: nowrap;
  }
`;

export const Point = styled.div`
  margin-top: 6px;
  font: var(--T3-3);
  color: var(--NS-White);
  text-align: center;
  height: 28px;
`;
