import React from 'react';
import styled from 'styled-components';

type Top3UserProps = {
  medalEmoji: string;
  userId: string;
  userProfileImage: string;
};

const Top3User: React.FC<Top3UserProps> = ({
  medalEmoji,
  userId,
  userProfileImage,
}) => {
  return (
    <Top3UserContainer>
      <Medal>{medalEmoji}</Medal>
      <TopCircle>
        <UserProfileImage src={userProfileImage} alt="top3UserProfileImage" />
      </TopCircle>
      <UserId>{userId}</UserId>
    </Top3UserContainer>
  );
};

export default Top3User;

// 스타일 컴포넌트 정의

const Top3UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Medal = styled.div`
  font: var(--H4);
  margin-bottom: 5px;
`;

const TopCircle = styled.div`
  border-radius: 50%;

  margin-bottom: 5px;

  width: 156px;
  height: 156px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const UserId = styled.div`
  margin-top: 10px;
  font: var(--T2);
  color: var(--NS-White);
  text-align: center;
`;
