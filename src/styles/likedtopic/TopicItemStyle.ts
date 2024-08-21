import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const TopicItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--NS-White);
  border-radius: 40px;
  margin-top: 20px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  height: 151px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 328px;
  }

  ${isTablet} {
    width: 728px;
  }

  ${isMobileOrTablet} {
    margin-top: 10px;
    border-radius: 20px;
    height: 72px;
  }
`;

export const TextField = styled.div`
  margin: 31px 0 23px 46px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    height: auto;
    margin: 16px auto 16px 20px;
  }

  ${isMobile} {
    width: 328px;
  }

  ${isTablet} {
    width: 728px;
  }
`;

export const TopicTitle = styled.h3`
  margin-top: 0;
  font: var(--H3);
  color: var(--NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S3);
    margin-top: 0px;
  }
`;

export const TopicDate = styled.p`
  margin-top: -5px;
  margin-bottom: 11px;
  font: var(--S1-1);
  color: var(--Gray1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S2-2);
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

export const PostCount = styled.h3`
  color: var(--NS-Black);
  height: 28px;
  margin-top: 11px;
  font: var(--T4);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S3);
    margin-top: 8px;
  }
`;

export const LikesContainer = styled.div`
  font: var(--M1-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-right: 18px;
  }

  img {
    width: 30px;
    height: 30px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      width: 16px;
      height: 16px;
    }
  }
`;

export const TopicLikes = styled.p`
  color: var(--NS-Main1);
  font: var(--S1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--T5-B);
  }
`;
