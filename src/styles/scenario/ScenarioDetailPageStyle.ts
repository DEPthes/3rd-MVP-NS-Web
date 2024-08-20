import styled from 'styled-components';
import { isMobile, isMobileOrTablet, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 91px;
  margin-bottom: 103px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  ${isTablet} {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1170px;
  margin-bottom: 20px;
  position: relative;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    flex-direction: column;
    align-items: center;
    width: 320px;
    margin-bottom: 10px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const ProfileCircle = styled.img`
  width: 156px;
  height: 156px;
  background-color: var(--NS-White);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  object-fit: cover;

  ${isMobileOrTablet} {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileNickname = styled.div`
  color: var(--NS-Black);
  font: var(--W1);
  width: 100%;
  height: 19px;
  margin-top: 6px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--W1);
    margin-top: 8px;
    margin-bottom: 10px;
    color: var(--NS-White);
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 41px;

  ${isMobileOrTablet} {
    transition: all 0.3s ease-in-out;
    margin-left: 0;
    text-align: center;
    align-items: center;
    min-height: 92px;
    background-color: var(--NS-White);
    background-color: #ffff;
    box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
  }

  ${isMobile} {
    width: 320px;
  }

  ${isTablet} {
    width: 728px;
  }
`;

export const Header = styled.div`
  color: var(--NS-White);
  margin-top: 40px;
  font: var(--LogoSmall);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    color: var(--NS-Main1);
    margin-top: 0;
    font: var(--Hy1);
    text-align: center;
    overflow-wrap: break-word;
  }
`;

export const TopicTitle = styled.div`
  color: var(--NS-White);
  font: var(--H4-1);
  margin-top: 3px;
  width: 608px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--W1);
    color: var(--NS-Main1);
    width: 100%;
    overflow-wrap: break-word;
    text-align: center;
    margin-top: 4px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 126px;
  cursor: pointer;
  margin-top: 7px;
  transition: all 0.3s ease-in-out;

  svg {
    width: 30px;
    height: 30px;

    ${isMobileOrTablet} {
      width: 16px;
      height: 16px;
    }
  }

  ${isMobileOrTablet} {
    margin-top: 6px;
  }
`;

export const LikeText = styled.div`
  font: var(--S1);
  color: var(--NS-White);
  margin-left: 5px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S3);
    color: var(--NS-Main5);
    margin-left: 5px;
  }
`;

export const PostBox = styled.div`
  background-color: #ffffff;
  border-radius: 40px;
  padding: 66px 70px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  background-color: var(--NS-White);
  position: relative;
  width: 1170px;
  min-height: 443px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
    min-height: 148px;
  }

  ${isTablet} {
    width: 728px;
    min-height: 131px;
  }

  ${isMobileOrTablet} {
    padding: 20px 21px;
    border-radius: 20px;
  }
`;

export const PostTitle = styled.div`
  text-align: center;
  font: var(--H3);
  margin-bottom: 29px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-bottom: 11px;
    font: var(--W1);
  }
`;

export const PostContent = styled.div`
  font: var(--T4);
  color: var(--NS-Black);
  max-width: 1013px;
  min-height: 224px;
  margin-bottom: 91px;
  margin-right: 87px;
  margin-left: 70px;
  text-align: center;
  overflow-wrap: break-word;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 100%;
    padding: 0 20px;
    min-height: 51px;
    margin-bottom: 10px;
    margin-right: 0;
    margin-left: 0;
    font: var(--Hy4);
  }
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 20px;
  cursor: pointer;
  margin-bottom: 19px;
  height: 30px;
  margin-right: 26px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    position: static;
    margin-bottom: 10px;
    margin-top: 11px;
    height: 0;
    margin-right: 0;
  }

  img {
    width: 30px;
    height: 30px;

    ${isMobileOrTablet} {
      width: 16px;
      height: 16px;
    }
  }
`;

export const LikeCount = styled.div`
  margin-left: 5px;
  color: var(--NS-Main1);
  font: var(--S1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--T5-B);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 1170px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    flex-direction: row;
    align-items: center;
    width: 320px;
    height: 30px;
    margin-top: 10px;
    justify-content: center;
  }
`;
