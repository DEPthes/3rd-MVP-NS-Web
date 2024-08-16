import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 144px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin: 0 30px;
    margin-top: 20px;
  }

  hr {
    width: 1170px;
    border: 1px dashed var(--NS-White);
    margin-bottom: 40px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      margin-bottom: 20px;
    }

    ${isMobile} {
      width: 320px;
    }

    ${isTablet} {
      width: 728px;
    }
  }

  span {
    color: var(--NS-Main1);
  }
`;

export const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  background-color: var(--NS-White);
  margin-top: 62px;
  margin-bottom: 58px;
  padding: 44px;
  width: 1170px;
  min-height: 199px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  color: var(--NS-Main1);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 4px;
    padding: 16px 37px;
    min-height: 70px;
    border-radius: 20px;
    margin-top: 14px;
    margin-bottom: 20px;
  }

  ${isMobile} {
    width: 320px;
  }

  ${isTablet} {
    width: 728px;
  }

  > h2 {
    font: var(--Y1);
    user-select: none;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--Y2);
    }
  }

  > h1 {
    font: var(--N1);
    text-align: center;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--W1);
    }
  }
`;

export const HeadText = styled.h2`
  text-align: center;
  user-select: none;
  font: var(--N2);
  color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--P-S1);
  }
`;

export const TodayText = styled.h3`
  margin-top: 82px;
  margin-bottom: 111px;
  font: var(--T1);
  color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-top: 14px;
    margin-bottom: 20px;
    font: var(--W1);
  }
`;

export const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 18px;
  margin-bottom: 57px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  > img {
    height: 302px;
    border-radius: 40px;
    box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      height: 196px;
      border-radius: 20px;
    }
  }

  > h4 {
    font: var(--N3);
    color: var(--NS-White);
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--W1);
    }
  }
`;

export const LongWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  margin: 114px 0;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    flex-direction: column;
    text-align: center;
    gap: 14px;
    margin: 14px 0 0;
  }

  img {
    width: 156px;
    height: 156px;
    border-radius: 100px;
    object-fit: cover;
    border: 1px solid var(--NS-Main2);
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      width: 100px;
      height: 100px;
    }
  }

  p {
    font: var(--S1);
    color: var(--NS-White);
    text-align: center;
    margin-top: 6px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--W1);
      margin-top: 8px;
    }
  }

  > h3 {
    font: var(--H3);
    color: var(--NS-White);
    margin-bottom: 19px;
    transition: all 0.3s ease-in-out;

    ${isMobileOrTablet} {
      font: var(--W1);
      margin-bottom: 20px;
    }
  }
`;

export const BestWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 68px;
  margin-bottom: 106px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const NoneContainer = styled.div<{ $isLast: boolean }>`
  font: var(--H3);
  color: var(--NS-Black);
  margin: ${({ $isLast }) => ($isLast ? '311px 0 335px' : '221px 0 225px')};

  ${isMobileOrTablet} {
    font: var(--W1);
    color: var(--NS-Black2);
  }

  ${isMobile} {
    margin: ${({ $isLast }) => ($isLast ? '14px 0 103px' : '14px 0 20px')};
  }

  ${isTablet} {
    margin: ${({ $isLast }) => ($isLast ? '14px 0 30px' : '14px 0 20px')};
  }
`;
