import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Title = styled.div`
  color: var(--NS-White);
  font: var(--H1);
  ${isMobileOrTablet}{
	margin-bottom: 24px;
	font: var(--Hy3);
  }
`;

export const TitleMini = styled.div`
  color: var(--NS-White);
  margin-bottom: 72px;
  font: var(--N2-1);

  @media (max-width: 768px) {//768이하일때 안보이게 하기!
    display: none;
  }
`;

export const TopicBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 17px;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 44px;
  margin-bottom: 63px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  background-color: var(—NS-White);
  width: 1170px;
  min-height: 186px;
  color: var(--NS-Main1);
  ${isMobileOrTablet}{
	width:328px ;
	min-height: 122px;
	border-radius: 20px;
  }
`;

export const TopicHeader = styled.div`
  font: var(--LogoSmall);
  ${isMobileOrTablet}{
	font: var(--Y2);
  }
`;

export const Topic = styled.div`
  font: var(--T1-1);
  ${isMobileOrTablet}{
	font: var(--P-T1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 37px;
  
 
  @media (max-width: 768px) {//미디어쿼리로 하는 게 더 간단하여 768이하일 경우 세로 정렬
    flex-direction: column;
    gap: 20px;
    align-items: center;
	width: 328px;
	height:38px;
	font:var(--P-S1);
	margin-top: -55px;
  }
`;


export const ActionButton = styled.button`
  background-color: var(--NS-Main1);
  color: var(--NS-White);
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  width: 450px;
  height: 60px;
  transition: background-color 0.3s;
  font: var(--T2);
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);

  &:hover {
    background-color: var(--NS-Main-Clicked);

  }
  ${isMobileOrTablet}{
		width: 328px;
		height:38px;
		font:var(--P-S1);
		margin-top: 20px;
	}
`;

export const AnotherButton = styled.button`
  background-color: var(--NS-Main2);
  color: var(--NS-White);
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  width: 450px;
  height: 60px;
  transition: background-color 0.3s;
  font: var(--T2);
  box-shadow: 0px 0px 14px rgba(63, 80, 184, 0.5);

  &:hover {
    background-color: var(--NS-Main1);
}
${isMobileOrTablet}{
		width: 328px;
		height:38px;
		font:var(--P-S1);
		margin-top: -10px;
	}
`;
