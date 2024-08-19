import React, { useState, useEffect } from 'react';
import * as S from '@/styles/scenario/SenarioDetailPageStyle';
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
import { useNavigate, useParams } from 'react-router-dom';
import { getThemePast } from '@/apis/theme/getThemePast';

const SenarioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<TTodayThemeResponse | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [isSaveModalVisible, setIsSaveModalVisible] = useState<boolean>(false);
  const [isSaveCompleteModalVisible, setIsSaveCompleteModalVisible] =
    useState<boolean>(false);
  const [isPostModalVisible, setIsPostModalVisible] = useState<boolean>(false);
  const [isPostCompleteModalVisible, setIsPostCompleteModalVisible] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleUnauthorized = useHandleUnauthorized();

  useEffect(() => {
    const fetchTopic = async () => {
      if (id) {
        const data: TTodayThemeResponse | undefined = await getThemePast(
          parseInt(id),
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
    };

    fetchTopic();
  }, [handleUnauthorized, id]);

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
    setIsSaveModalVisible(true);
  };

  const handleModalSave = async () => {
    if (!topic) return;

    const draftData: TPostDraftRequest = {
      title,
      content: text,
      themeId: topic.themeId,
    };

    const response = await postDraft(draftData, handleUnauthorized);
    if (response?.check) {
      setIsSaveCompleteModalVisible(true);
    } else {
      console.error('임시 저장 실패:', response);
    }

    setIsSaveModalVisible(false);
  };

  const handlePost = () => {
    if (title.trim() === '' || text.trim() === '') return;
    setIsPostModalVisible(true);
  };

  const handleModalPost = async () => {
    if (!topic || !id) return;

    const postData: TPostDraftRequest = {
      title,
      content: text,
      themeId: parseInt(id),
    };

    const response = await postPublish(postData, handleUnauthorized);

    if (response?.check) {
      setIsPostCompleteModalVisible(true);
    } else {
      console.error('게시 실패:', response);
    }

    setIsPostModalVisible(false);
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
          isDisabled={title.trim() === '' || text.trim() === ''}
        />
        <DarkButton
          text="게시"
          onClick={handlePost}
          isDisabled={isPostDisabled}
        />
      </S.ButtonContainer>
      {isSaveModalVisible && (
        <BackDrop
          children={
            <S.ModalContainer>
              <S.ModalTitle>상상력 임시저장</S.ModalTitle>
              <S.ModalText2Black>
                게시글을 임시 저장하시겠습니까? <br />
                <span>
                  (임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수
                  있습니다.)
                </span>
              </S.ModalText2Black>
              <S.ModalBtn>
                <DarkButton text="임시저장" onClick={handleModalSave} />
                <LightButton
                  text="취소"
                  onClick={() => () => setIsSaveModalVisible(false)}
                />
              </S.ModalBtn>
            </S.ModalContainer>
          }
          isOpen={isSaveModalVisible}
        />
      )}
      {isSaveCompleteModalVisible && (
        <BackDrop
          children={
            <S.ModalContainer>
              <S.ModalTitle>임시저장 완료!</S.ModalTitle>
              <S.ModalTextBlack2>
                (임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
              </S.ModalTextBlack2>
              <DarkButton
                text="확인"
                onClick={() => setIsPostCompleteModalVisible(false)}
              />
            </S.ModalContainer>
          }
          isOpen={isSaveCompleteModalVisible}
        />
      )}
      {isPostModalVisible && (
        <BackDrop
          children={
            <S.ModalContainer>
              <S.ModalTitle>상상력 게시</S.ModalTitle>
              <S.ModalTextBlack>상상력을 게시하시겠습니까?</S.ModalTextBlack>
              <S.ModalBtn>
                <DarkButton text="게시" onClick={handleModalPost} />
                <LightButton
                  text="취소"
                  onClick={() => setIsPostModalVisible(false)}
                />
              </S.ModalBtn>
            </S.ModalContainer>
          }
          isOpen={isPostModalVisible}
        />
      )}
      {isPostCompleteModalVisible && (
        <BackDrop
          children={
            <S.ModalContainer>
              <S.ModalTitle>상상력 게시 완료!</S.ModalTitle>
              <S.ModalTextBlack>N력 +5 상승!</S.ModalTextBlack>
              <DarkButton
                text="확인"
                onClick={() => {
                  setIsPostCompleteModalVisible(false);
                  navigate(`/scenario/topic/${id}`);
                  window.scroll({ top: 0, behavior: 'smooth' });
                }}
              />
            </S.ModalContainer>
          }
          isOpen={isPostCompleteModalVisible}
        />
      )}
    </S.Container>
  );
};

export default SenarioDetailPage;
