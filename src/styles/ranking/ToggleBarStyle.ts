import styled from 'styled-components';

export const ToggleBarContainer = styled.div<{ $isOpen: boolean }>`
  margin-top: 70px;
  width: 600px;
  padding: 10px;
  border: 1px solid var(--NS-Gray); /* 테두리 색상 */
  margin-bottom: 10px;
  cursor: pointer;
  transition: height 0.3s ease-in-out;

  height: ${({ $isOpen }) => ($isOpen ? '764px;' : '40px')};
`;

export const ToggleBarHeader = styled.div`
  width: 231px;
  heigth: 30px;
  font-size: 16px;
  color: var(--NS-White);
  display: flex;
  align-items: center;
  border: 1px dashed var(--NS-White);
  border-radius: 20px;
  background-color: transparent;
  margin-left: 193px;
  justify-content: center;
  font: var(--M1-2);
  padding: 4px;
`;

export const ToggleBarContent = styled.div`
  width: 600px;
  height: 720px;
  margin-top: 10px;
  font-size: 14px;
  color: var(--NS-Black);
  background-color: var(--NS-White);
  padding: 10px;
  border-radius: 40px;
  margin-bottom: 22px;
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
`;

export const ToggleBarInput = styled.div`
  width: 385px;
  heigth: 603px;
  margin: 58.5px 107.5px;
  text-align: center;
  color: var(--Gray1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Bold = styled.span`
  font: var(--N2-1);
  display: inline;
  color: var(--NS-Black);
`;

export const Point = styled.span`
  display: inline;
  font: var(--LogoMini-4);
  color: var(--NS-Main1);
`;

export const Space = styled.div``;
