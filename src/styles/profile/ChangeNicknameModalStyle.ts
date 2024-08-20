import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 520px;
  padding: 35px 0;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 328px;
    padding: 24px 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font: var(--N2);
  color: var(--NS-Black);
  margin-bottom: 24px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    font: var(--S1);
    margin-bottom: 14px;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 450px;

  ${isMobileOrTablet} {
    width: 245px;
  }
`;

export const PasswordSection = styled.div<{ $color: string }>`
  border-bottom: 1.5px solid ${props => props.$color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

export const PButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-top: 14px;
    gap: 9px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const InputSection = styled.div<{ $color: string }>`
  border-bottom: 1.5px solid ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    border-bottom: 0.8px solid ${props => props.$color};
  }
`;

export const DButtonContainer = styled.div`
  margin-top: 0;
  transition: all 0.3s ease-in-out;
`;

export const ChangeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  transition: all 0.3s ease-in-out;
`;

export const Input = styled.input<{ $color: string }>`
  flex-grow: 1;
  font: var(--M1-2);
  border: none;
  outline: none;
  padding-right: 10px;
  margin-bottom: 11px;
  color: ${props => props.$color};
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: ${props => props.$color};
    font: var(--M2-2);
  }

  ${isMobileOrTablet} {
    font: var(--P-S1);
    margin-bottom: 5.6px;
  }
`;

export const Icon = styled.img`
  width: 18.09px;
  height: 17.68px;
  margin-bottom: 11px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    width: 9px;
    height: 9px;
    margin-bottom: 5.6px;
  }
`;

export const ValidationMessage = styled.div<{ $color: string }>`
  font: var(--M1-3);
  color: ${props => props.$color};
  transition: all 0.3s ease-in-out;
  margin-top: 2px;
  width: 100%;

  ${isMobileOrTablet} {
    font: var(--V1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    margin-top: 14px;
    gap: 9px;
  }
`;
