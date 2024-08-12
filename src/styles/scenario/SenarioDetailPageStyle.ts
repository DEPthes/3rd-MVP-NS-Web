import styled from 'styled-components';
import { isMobile, isMobileOrTablet, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopicBox = styled.div`
  background-color: var(--NS-White);
  border-radius: 40px;
  padding: 29px 20px 16px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  width: 1170px;
  min-height: 160px;
  ${isMobile}{
	width:320px;
	min-height: 92px;
  }
  ${isTablet}{
	width:728px;
	min-height:200px;
  }
`;

export const TopicHeader = styled.div`
  color: var(--NS-Main1);
  font: var(--LogoSmall);
  ${isMobileOrTablet}{
	font:var(--Hy1);

  }

`;

export const Topic = styled.div`
  margin-top: 1.8px;
  color: var(--NS-Main1);
  font: var(--T1-1);
  ${isMobileOrTablet}{
	margin-top: 4px;
	font:var(--P-T1);

  }
`;

export const LikeContainer = styled.div`
  margin-top: 1.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  ${isMobile}{
	margin-top: 6px;
	align-items: center;
  justify-content: center;
  display: flex;

  }
`;

export const LikeText = styled.div`
  font: var(--S1);
  color: var(--NS-Main5);
  ${isMobileOrTablet}{
	font:var(--Hy2);

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
  ${isMobile}{
	width:320px;
	min-height:300px;
  }
  ${isTablet}{
	width:728px;
	min-height:200px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  text-align: center;
  font: var(--H3);
  ${isMobileOrTablet}{
	font:var(--P-T1);
  }

`;

export const Separator = styled.hr`
  border: 1.5px dashed var(--NS-Main2);
  width: 90%;
  margin-top: 12px;
  margin-bottom: 17px;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 80%;
  border: 1px solid var(--NS-White);
  font: var(--T3);
  text-align: center;
  resize: none;
  outline: none;
  ${isMobileOrTablet}{
	font:var(--P-T2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--NS-White);
  padding: 40px 0;
  text-align: center;
  width: 520px;
`;

export const ModalTitle = styled.h2`
  font: var(--M1);
  color: var(--NS-Black);
`;

export const ModalText2Black = styled.p`
  font: var(--M1-1);
  color: var(--NS-Black);
  margin: 16px 0;
`;

export const ModalTextBlack = styled.p`
  font: var(--M1-1);
  color: var(--NS-Black);
  margin: 24px 0 30px;
`;

export const ModalTextBlack2 = styled.p`
  font: var(--M1-1);
  color: var(--NS-Black2);
  margin: 24px 0 30px;
`;

export const ModalBtn = styled.div`
  display: flex;
  gap: 12px;
`;
