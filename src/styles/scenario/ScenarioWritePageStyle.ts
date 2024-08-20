import styled from 'styled-components';
import { isMobile, isMobileOrTablet, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;
  margin-bottom: 112px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  ${isTablet} {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const TopicBox = styled.div`
  background-color: var(--NS-White);
  border-radius: 40px;
  padding: 29px 20px 16px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  min-height: 160px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
    min-height: 92px;
    border-radius: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${isTablet} {
    width: 728px;
    min-height: 92px;
    border-radius: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TopicHeader = styled.div`
  color: var(--NS-Main1);
  font: var(--LogoSmall);
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    font: var(--Hy1);
  }

  ${isTablet} {
    font: var(--Hy1);
  }
`;

export const Topic = styled.div`
  margin-top: 3px;
  color: var(--NS-Main1);
  font: var(--T1-1);
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    margin-top: 5px;
    font: var(--P-T1);
  }

  ${isTablet} {
    margin-top: 5px;
    font: var(--P-T1);
  }
`;

export const LikeContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    width: 30px; /* 기본 크기 (데스크탑용) */
    height: 30px;

    ${isMobileOrTablet} {
      width: 16px; /* 모바일 및 테블릿에서 크기 줄이기 */
      height: 16px;
    }
  }

  ${isMobile} {
    margin-top: 7px;
  }

  ${isTablet} {
    margin-top: 6px;
  }
`;

export const LikeText = styled.div`
  font: var(--S1);
  color: var(--NS-Main5);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--Hy2);
  }
`;

export const NewTopicBox = styled.div`
  background-color: var(--NS-White);
  border-radius: 40px;
  padding: 45px 0;
  text-align: center;
  margin-top: 20px;
  width: 1170px;
  height: 443px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  background-color: var(—NS-Black);
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 320px;
    height: 300px;
    border-radius: 20px;
    margin-top: 10px;
    padding: 16px 0;
  }

  ${isTablet} {
    width: 728px;
    height: 230px;
    border-radius: 20px;
    margin-top: 10px;
    padding: 16px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  text-align: center;
  font: var(--H3);
  transition: all 0.3s ease-in-out;
  padding-bottom: 12px;

  ${isMobileOrTablet} {
    font: var(--P-T1);
    padding-bottom: 11px;
  }
`;

export const Separator = styled.hr`
  border: 1.5px dashed var(--NS-Main2);
  width: 90%;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    border: 1px dashed var(--NS-Main2);
  }
`;

export const TextArea = styled.textarea`
  padding-top: 17px;
  width: 90%;
  height: 80%;
  border: none;
  font: var(--T3);
  text-align: center;
  resize: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-T2);
    padding-top: 11px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 14px;
    margin-top: 10px;
  }
`;
