import { isMobile, isMobileOrTablet, isTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  transition: all 0.3s ease-in-out;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  transition: all 0.3s ease-in-out;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    object-fit: cover;
    border: 1px solid var(--NS-Main1);
  }

  > h3 {
    font: var(--S1);
    color: var(--NS-White);
    margin-top: 9px;
    text-align: center;
    white-space: nowrap;
  }

  > p {
    font: var(--N4);
    color: var(--NS-Main1);
    margin-top: 1px;
    text-align: center;
    white-space: nowrap;
  }
`;

export const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1030px;
  height: 151px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
  padding: 0 46px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
  }

  ${isTablet} {
    width: 728px;
  }

  ${isMobileOrTablet} {
    height: 76px;
    border-radius: 20px;
    padding: 0 20px;
  }
`;

export const PostLeftWrap = styled.div`
  width: 93%;
  transition: all 0.3s ease-in-out;

  > h3 {
    font: var(--H3);
    color: var(--NS-Black);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${isMobileOrTablet} {
      font: var(--P-S1);
    }
  }

  > p {
    font: var(--S1-1);
    color: var(--Gray1);

    ${isMobileOrTablet} {
      font: var(--P-S2-2);
    }
  }
`;

export const PostRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  svg {
    ${isMobileOrTablet} {
      margin-top: -11px;
    }
  }

  > h5 {
    font: var(--S1);
    color: var(--NS-Main1);

    ${isMobileOrTablet} {
      font: var(--T5-B);
      margin-top: -11px;
    }
  }
`;
