import styled from 'styled-components';
import { isMobileOrTablet } from '@/hooks/Media';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 520px;
  height: 220px;
  display: flex;
  flex-direction: column;

  ${isMobileOrTablet} {
    width: 328px;
    height: 145px;
  }
`;

export const Title = styled.h2`
  margin-top: 40px;
  text-align: center;
  font: var(--N2);
  color: var(--NS-Black);
  margin-bottom: 16px;
  ${isMobileOrTablet} {
    height: 19px;
    font: var(--S1);
    margin-top: 24px;
    margin-bottom: 14px;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 35px 0px;

  ${isMobileOrTablet} {
    margin-left: 41.5px;
  }
`;

export const PasswordSection = styled.div<{ $color: string }>`
  width: 450px;
  height: 33px;
  border-bottom: 1.5px solid ${props => props.$color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${isMobileOrTablet} {
    width: 245px;
    height: 32px;
  }
`;

export const PasswordValidationMessage = styled.div<{ $color: string }>`
  font: var(--M1-3);
  margin: 0;
  color: ${props => props.$color};
`;
export const PButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;

  ${isMobileOrTablet} {
    margin-top: 14px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 64px 0px;
  width: 392px;
  height: 35px;
  ${isMobileOrTablet} {
    margin: 0px 47.25px 14px;
    height: 30px;
  }
`;

export const InputSection = styled.div<{ $color: string }>`
  width: 300px;
  height: 35px;
  border-bottom: 1.5px solid ${props => props.$color};
  margin-right: 8px;
  margin-top: 0;
  display: flex;
  justify-content: space-between;

   ${isMobileOrTablet} {
    width: 182.5px;
    height: 30px;
    border-bottom: 0.8px solid ${props => props.$color};
   
`;

export const DButtonContainer = styled.div`
  margin-top: 0;
  heigth: 20px;
`;

export const ChangeContainer = styled.div`
  display: flex;
`;

export const Input = styled.input<{ $color: string }>`
  flex-grow: 1;
  font: var(--M1-2);
  border: none;
  outline: none;
  margin-top: 0;
  padding: 0;
  height: 22px;
  margin-bottom: 11px;

  color: ${props => props.$color};

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
  heigth: 17.68px;
  margin-right: 0;
`;

export const ValidationMessage = styled.div<{ $color: string }>`
  font: var(--M1-3);
  margin: 0;
  color: ${props => props.$color};

  ${isMobileOrTablet} {
    font: var(--V1);
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 12px;
  ${isMobileOrTablet} {
    margin-top: 0px;
    gap: 11px;
  }
`;
