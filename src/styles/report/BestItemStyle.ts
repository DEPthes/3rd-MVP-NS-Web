import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    object-fit: cover;
    border: 1px solid var(--NS-Main1);
  }

  > h3 {
    font: var(--S1);
    color: var(--NS-White);
    margin-top: 9px;
    text-align: center;
    white-space: nowrap;
  }

  > p {
    font: var(--N4);
    color: var(--NS-Main1);
    margin-top: 1px;
    text-align: center;
    white-space: nowrap;
  }
`;

export const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1030px;
  height: 151px;
  background-color: var(--NS-White);
  box-shadow: 0px 0px 20px rgba(94, 114, 235, 0.5);
  border-radius: 40px;
  padding: 31px 50px 23px 46px;
`;

export const PostLeftWrap = styled.div`
  width: 93%;

  > h3 {
    font: var(--H3);
    color: var(--NS-Black);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font: var(--S1-1);
    color: var(--Gray1);
  }
`;

export const PostRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h5 {
    font: var(--S1);
    color: var(--NS-Main1);
  }
`;
