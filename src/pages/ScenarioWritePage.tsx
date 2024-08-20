import React, { useState, useEffect } from 'react';
import * as S from '@/styles/scenario/ScenarioWritePageStyle';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import LightButton from '@components/button/LightButton';
import DarkButton from '@components/button/DarkButton';
import BackDrop from '@/components/layout/BackDrop';
import { getToday } from '@/apis/theme/getToday';
import { TTodayThemeResponse, TPostDraftRequest } from '@/types/mytype';
import { postDraft } from '@/apis/board/postDraft';
import { postPublish } from '@/apis/board/postPublish';
import { postLike } from '@/apis/theme/postLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { useNavigate, useLocation } from 'react-router-dom';
import { getThemePast } from '@/apis/theme/getThemePast';
import DraftModal from '@/components/modal/DraftModal';
import DraftSuccessModal from '@/components/modal/DraftSuccessModal';
import PostModal from '@/components/modal/PostModal';
import PostSuccessModal from '@/components/modal/PostSuccessModal';
import { getBoard } from '@/apis/board/getBoard';

const ScenarioWritePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [topic, setTopic] = useState<TTodayThemeResponse | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [titleSave, setTitleSave] = useState<string>('');
  const [textSave, setTextSave] = useState<string>('');
  const [boardId, setBoardId] = useState(state.boardId ?? null); //null이 아니면 임시저장된 글
  const [isDraftModal, setIsDraftModal] = useState<boolean>(false);
  const [isDraftSuccessModal, setIsDraftSuccessModal] =
    useState<boolean>(false);
  const [isPostModal, setIsPostModal] = useState<boolean>(false);
  const [isPostSuccessModal, setIsPostSuccessModal] = useState<boolean>(false);

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
          console.error('오늘의 주제를 불러오지 못했습니다.');
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

      if (state.boardId) {
        const response = await getBoard(state.boardId, handleUnauthorized);
        if (response) {
          if (!response.published && !response.owner) {
            console.log(response);
            navigate('/404');
            window.scroll({ top: 0, behavior: 'smooth' });
          } else {
            setTitle(response.boardTitle);
            setTitleSave(response.boardTitle);
            setText(response.boardContent);
            setTextSave(response.boardContent);
          }
        } else {
          navigate('/404');
          window.scroll({ top: 0, behavior: 'smooth' });
          console.error('게시글을 불러오지 못했습니다.');
        }
      }
    };

    fetchTopic();
  }, [handleUnauthorized, navigate, state]);

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

  const handleSave = () => {
    if (title.trim() === '') return;
    setIsDraftModal(true);
  };

  const handleModalSave = async () => {
    if (!topic) return;

    const draftData: TPostDraftRequest = {
      title,
      content: text,
      themeId: topic.themeId,
      ...(boardId !== null && { boardId }),
    };

    const response = await postDraft(draftData, handleUnauthorized);
    if (response?.check) {
      setBoardId(response.information.boardId);
      setTitleSave(title);
      setTextSave(text);
      setIsDraftSuccessModal(true);
    } else {
      console.error('임시 저장 실패:', response);
    }

    setIsDraftModal(false);
  };

  const handlePost = () => {
    if (title.trim() === '' || text.trim() === '') return;
    setIsPostModal(true);
  };

  const handleModalPost = async () => {
    if (!topic || !state.themeId) return;

    const postData: TPostDraftRequest = {
      title,
      content: text,
      themeId: parseInt(state.themeId),
      ...(boardId !== null && { boardId }),
    };

    const response = await postPublish(postData, handleUnauthorized);

    if (response?.check) {
      setIsPostSuccessModal(true);
    } else {
      console.error('게시 실패:', response);
    }

    setIsPostModal(false);
  };

  const isPostDisabled =
    title.trim() === '' || text.trim() === '' || text.length < 100;

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
        <LightButton
          text="임시저장"
          onClick={handleSave}
          isDisabled={
            title.trim() === '' ||
            text.trim() === '' ||
            (titleSave === title && textSave === text)
          }
        />
        <DarkButton
          text="게시"
          onClick={handlePost}
          isDisabled={isPostDisabled}
        />
      </S.ButtonContainer>
      {isDraftModal && (
        <BackDrop
          children={
            <DraftModal
              handleConfirmModal={handleModalSave}
              handleCloseModal={() => setIsDraftModal(false)}
            />
          }
          isOpen={isDraftModal}
        />
      )}
      {isDraftSuccessModal && (
        <BackDrop
          children={
            <DraftSuccessModal
              handleConfirmModal={() => setIsDraftSuccessModal(false)}
            />
          }
          isOpen={isDraftSuccessModal}
        />
      )}
      {isPostModal && (
        <BackDrop
          children={
            <PostModal
              handleConfirmModal={handleModalPost}
              handleCloseModal={() => setIsPostModal(false)}
            />
          }
          isOpen={isPostModal}
        />
      )}
      {isPostSuccessModal && (
        <BackDrop
          children={
            <PostSuccessModal
              handleConfirmModal={() => {
                setIsPostSuccessModal(false);
                navigate(`/scenario/topic/${state.themeId}`);
                window.scroll({ top: 0, behavior: 'smooth' });
              }}
            />
          }
          isOpen={isPostSuccessModal}
        />
      )}
    </S.Container>
  );
};

export default ScenarioWritePage;
