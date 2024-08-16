import styled from 'styled-components';

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

  position: relative;
`;

export const Title = styled.h2`
  margin-top: 40px;
  text-align: center;
  font: var(--N2);
  color: var(--NS-Black);
  margin-bottom: 16px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 64px 0px;

  }
`;

export const PasswordSection = styled.div<{ color: string }>`
  width: 405px;
  height: 35px;
  border-bottom: 1.5px solid ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 64px 0px;
  width: 392px;
  height: 35px;
`;

export const InputSection = styled.div<{ color: string }>`
  width: 300px;
  height: 35px;
  border-bottom: 1.5px solid ${props => props.color};
  margin-right: 4px;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DButtonContainer = styled.div`
  margin-top: 0;
  heigth: 35px;
`;

export const ChangeContainer = styled.div`
  display: flex;
`;

export const Input = styled.input<{ color: string }>`
  flex-grow: 1;
  font: var(--M2-2);
  border: none;
  outline: none;
  margin-top: 0;
  padding-bottom: 5px;

  color: ${props => props.color};

  &::placeholder {
    color: ${props => props.color}; // placeholder 색상도 동일하게 변경
    font: var(T3-1);
  }
`;

export const Icon = styled.img`
  width: 18.09px;
  heigth: 17.68px;
  margin-right: 0;
`;

export const ValidationMessage = styled.div<{ color: string }>`
  font: var(--M2);
  margin: 0 0px 0px;
  color: ${props => props.color};
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 12px;
`;
