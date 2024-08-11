import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 29px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  background-color: var(--NS-White);
  transition: all 0.3s ease-in-out;

  ${isMobileOrTablet} {
    padding: 12px 20px;
    box-shadow: 0px 0px 14.38px rgba(94, 114, 235, 0.5);
  }
`;

export const Input = styled.input`
  font: var(--Input);
  color: var(--NS-Black);
  border: none;
  width: 100%;
  padding-right: 10px;

  ${isMobileOrTablet} {
    font: var(--Input-B);
  }

  &::placeholder {
    color: var(--NS-Main2);
  }
`;
