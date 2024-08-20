import styled from 'styled-components';
import { isMobileOrTablet, isMobile, isTablet } from '@/hooks/Media';

export const Top3UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${isTablet} {
    width: 96.1px;
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

export const UserProfileImage = styled.img`
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
  border: 1px solid var(--NS-Main2);
  object-fit: cover;
  cursor: pointer;

  ${isMobileOrTablet} {
    width: 64px;
    height: 64px;
  }
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
    font: var(--V7);
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ${isMobile} {
    width: 70px;
  }
`;

export const Point = styled.div`
  width: 45px;
  height: 28px;
  margin-top: -4px;
  font: var(--V4);
  color: var(--NS-White);
  text-align: center;
  height: 28px;

  ${isMobileOrTablet} {
    font: var(--V8);
    margin-top: 1px;
  }
`;
