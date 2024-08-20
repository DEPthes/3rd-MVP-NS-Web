import React, { useState, useEffect } from 'react';
import * as S from '@/styles/scenario/ScenarioWritePageStyle';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import LightButton from '@components/button/LightButton';
import DarkButton from '@components/button/DarkButton';
import { getToday } from '@/apis/theme/getToday';
import { TTodayThemeResponse } from '@/types/mytype';
import { postLike } from '@/apis/theme/postLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { useLocation, useNavigate } from 'react-router-dom';
import { getThemePast } from '@/apis/theme/getThemePast';
import BackDrop from '@/components/layout/BackDrop';
import { putBoard } from '@/apis/board/putBoard';
import EditModal from '@/components/modal/EditModal';
import EditSuccessModal from '@/components/modal/EditSuccessModal';
import EditCancelModal from '@/components/modal/EditCancelModal';

const ScenarioEditPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [topic, setTopic] = useState<TTodayThemeResponse | null>(null);
  const [title, setTitle] = useState<string>(state.boardTitle);
  const [text, setText] = useState<string>(state.boardContent);
  const [isEditCancelModal, setIsEditCancelModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isEditSuccessModal, setIsEditSuccessModal] = useState<boolean>(false);

  const handleUnauthorized = useHandleUnauthorized();

  useEffect(() => {
    const fetchTopic = async () => {
      if (state.themeId) {
        const data: TTodayThemeResponse | undefined = await getThemePast(
          parseInt(state.themeId),
          handleUnauthorized,
        );
        if (data) {
          setTopic(data);
        } else {
          console.error('주제를 불러오지 못했습니다.');
        }
      } else {
        const data: TTodayThemeResponse | undefined = await getToday(
          handleUnauthorized,
        );
        if (data) {
          setTopic(data);
        } else {
          console.error('오늘의 주제를 불러오지 못했습니다.');
        }
      }
    };

    fetchTopic();
  }, [handleUnauthorized, state]);

  const handleLikeClick = async () => {
    if (!topic) return;

    try {
      // postLike 함수가 실제로 API를 호출하여 서버에 좋아요 상태를 반영한다
      const response = await postLike(topic.themeId, handleUnauthorized);
      if (response) {
        // 서버에서 반환된 응답 데이터에 따라 좋아요 상태를 업데이트한다
        setTopic(prevTopic => {
          if (prevTopic) {
            return {
              ...prevTopic,
              likedTheme: !topic.likedTheme,
            };
          }
          return prevTopic;
        });
      } else {
        console.error('좋아요 처리 실패');
      }
    } catch (error) {
      console.error('좋아요 요청 중 오류 발생:', error);
    }
  };

  const handlePost = () => {
    if (title.trim() === '' || text.trim() === '') return;
    setIsEditModal(true);
  };

  const handleModalPost = async () => {
    if (!topic || !state.themeId) return;

    const response = await putBoard(
      state.boardId,
      title,
      text,
      handleUnauthorized,
    );

    if (response?.check) {
      setIsEditSuccessModal(true);
    } else {
      console.error('게시 실패:', response);
    }

    setIsEditModal(false);
  };

  const isPostDisabled =
    title.trim() === '' ||
    text.trim() === '' ||
    text.length < 100 ||
    (state.boardTitle === title && state.boardContent === text);

  return (
    <S.Container>
      <S.TopicBox>
        <S.TopicHeader>오늘의 주제</S.TopicHeader>
        <S.Topic>{topic?.content}</S.Topic>
        <S.LikeContainer onClick={handleLikeClick}>
          {topic?.likedTheme ? (
            <Main5HeartFill width={30} />
          ) : (
            <Main5Heart width={30} />
          )}
          <S.LikeText>이 주제 좋아요</S.LikeText>
        </S.LikeContainer>
      </S.TopicBox>
      <S.NewTopicBox>
        <S.Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value.slice(0, 20))}
          placeholder="제목을 입력하세요 (최대 20자)"
        />
        <S.Separator />
        <S.TextArea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="여기에 자유롭게 텍스트를 입력하세요."
        />
      </S.NewTopicBox>
      <S.ButtonContainer>
        <LightButton text="취소" onClick={() => setIsEditCancelModal(true)} />
        <DarkButton
          text="수정완료"
          onClick={handlePost}
          isDisabled={isPostDisabled}
        />
      </S.ButtonContainer>
      {isEditCancelModal && (
        <BackDrop
          children={
            <EditCancelModal
              handleConfirmModal={() => navigate(-1)}
              handleCloseModal={() => setIsEditCancelModal(false)}
            />
          }
          isOpen={isEditCancelModal}
        />
      )}
      {isEditModal && (
        <BackDrop
          children={
            <EditModal
              handleConfirmModal={handleModalPost}
              handleCloseModal={() => setIsEditModal(false)}
            />
          }
          isOpen={isEditModal}
        />
      )}
      {isEditSuccessModal && (
        <BackDrop
          children={
            <EditSuccessModal
              handleConfirmModal={() => {
                setIsEditSuccessModal(false);
                navigate(`/scenario/topic/${state.themeId}`);
                window.scroll({ top: 0, behavior: 'smooth' });
              }}
            />
          }
          isOpen={isEditSuccessModal}
        />
      )}
    </S.Container>
  );
};

export default ScenarioEditPage;
