import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '@/styles/scenario/ScenarioDetailPageStyle';
import WhiteHeart from '@assets/icons/WhiteHeart.svg';
import WhiteHeartFill from '@assets/icons/WhiteHeartFill.svg';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import Main5Heart from '@assets/icons/Main5Heart.svg?react';
import Main5HeartFill from '@assets/icons/Main5HeartFill.svg?react';
import LightButton from '@/components/button/LightButton';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import { getBoard } from '@/apis/board/getBoard';
import { deleteBoard } from '@/apis/board/deleteBoard';
import { postLike } from '@/apis/theme/postLike';
import { boardLike } from '@/apis/board/boardLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { TBoardDetailResponse } from '@/types/mytype';
import BackDrop from '@/components/layout/BackDrop';
import DeleteModal from '@/components/modal/DeleteModal';
import DeleteFailModal from '@/components/modal/DeleteFailModal';

const ScenarioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<TBoardDetailResponse | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isDeleteFail, setIsDeleteFail] = useState<boolean>(false);
  const navigate = useNavigate();

	const { isMobileOrTablet } = useNSMediaQuery();
	const handleUnauthorized = useHandleUnauthorized();

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const response = await getBoard(parseInt(id), handleUnauthorized);
        if (response) {
          if (!response.published && !response.owner) {
            navigate('/404');
            window.scroll({ top: 0, behavior: 'smooth' });
          } else {
            setPost(response);
          }
        } else {
          navigate('/404');
          window.scroll({ top: 0, behavior: 'smooth' });
          console.error('게시글을 불러오지 못했습니다.');
        }
      }
    };

    fetchPost();
  }, [id, handleUnauthorized, navigate]);

	const handleBackClick = () => {
		navigate(-1);
	};

  const handleEditClick = () => {
    const path = post?.published ? `/scenario/edit` : `/scenario/write`;

    navigate(path, {
      state: {
        boardTitle: post?.boardTitle,
        boardContent: post?.boardContent,
        themeId: post?.themeId,
        boardId: id,
        published: post?.published,
      },
    });

    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = () => {
    if (post?.owner) {
      setIsDeleteModalOpen(true);
    } else {
      setIsDeleteFail(true);
    }
  };

  const handleConfirmDelete = async () => {
    if (id) {
      const deleteSuccess = await deleteBoard(parseInt(id), handleUnauthorized);
      if (deleteSuccess) {
        navigate(`/topic/${post?.themeId}`); // 삭제 후 해당 주제로 이동
        window.scroll({ top: 0, behavior: 'smooth' });
      } else {
        setIsDeleteFail(true);
      }
    }
    setIsDeleteModalOpen(false);
  };

	const handleCancelDelete = () => {
		setIsDeleteModalOpen(false);
	};

	const handleWhiteHeartClick = async () => {
		if (!post || !post.themeId) {
			console.error('Invalid themeId:', post ? post.themeId : 'Post is null');
			return;
		}

		try {
			const response = await postLike(post.themeId, handleUnauthorized);
			if (response) {
				setPost(prevPost => {
					if (prevPost) {
						return {
							...prevPost,
							likedTheme: !post.likedTheme,
						};
					}
					return prevPost;
				});
			} else {
				console.error('주제 좋아요 실패');
			}
		} catch (error) {
			console.error('주제 좋아요 요청 중 오류 발생:', error);
		}
	};

	const handleBlueHeartClick = async () => {
		if (!post || !id) return;

		try {
			const response = await boardLike(parseInt(id), handleUnauthorized);
			if (response) {
				setPost(prevPost => {
					if (prevPost) {
						return {
							...prevPost,
							likedBoard: !post.likedBoard,
						};
					}
					return prevPost;
				});
			} else {
				console.error('게시글 좋아요 실패');
			}
		} catch (error) {
			console.error('게시글 좋아요 요청 중 오류 발생:', error);
		}
	};

	const handleProfileClick = () => {
		navigate(`/profile/${post?.userId}`); // 타인의 프로필 페이지로 이동하기
		window.scroll({ top: 0, behavior: 'smooth' });
	};

  return (
    <S.Container>
      <S.HeaderSection>
        <S.ProfileContainer>
          <S.ProfileCircle
            src={post?.imageUrl}
            alt=""
            onClick={handleProfileClick}
          />
          <S.ProfileNickname>{post?.nickname}</S.ProfileNickname>
          {/* 작성자 닉네임 */}
        </S.ProfileContainer>
        <S.ProfileInfo>
          <S.Header>주제</S.Header>
          <S.TopicTitle>{post?.themeContent}</S.TopicTitle> {/* 주제 제목 */}
          <S.LikeContainer onClick={handleWhiteHeartClick}>
            {isMobileOrTablet ? (
              post?.likedTheme ? (
                <Main5HeartFill title="Like" />
              ) : (
                <Main5Heart title="Like" />
              )
            ) : (
              <img
                src={post?.likedTheme ? WhiteHeartFill : WhiteHeart}
                alt="Like"
              />
            )}
            <S.LikeText>이 주제 좋아요</S.LikeText>
          </S.LikeContainer>
        </S.ProfileInfo>
      </S.HeaderSection>
      <S.PostBox>
        <S.PostTitle>{post?.boardTitle}</S.PostTitle> {/* 게시글 제목 */}
        <S.PostContent>{post?.boardContent}</S.PostContent> {/* 게시글 내용 */}
        {post?.published && (
          <S.LikeButton onClick={handleBlueHeartClick}>
            <img
              src={post?.likedBoard ? BlueHeartFill : BlueHeart}
              alt="Like"
            />
            <S.LikeCount>좋아요</S.LikeCount>
          </S.LikeButton>
        )}
      </S.PostBox>
      <S.ButtonContainer>
        {!isMobileOrTablet && (
          <LightButton text="뒤로 가기" onClick={handleBackClick} />
        )}
        {post?.owner && (
          <>
            <LightButton text="수정하기" onClick={handleEditClick} />
            <LightButton text="삭제하기" onClick={handleDeleteClick} />
          </>
        )}
      </S.ButtonContainer>
      {isDeleteModalOpen && (
        <BackDrop
          children={
            <DeleteModal
              handleConfirmModal={handleConfirmDelete}
              handleCloseModal={handleCancelDelete}
            />
          }
          isOpen={isDeleteModalOpen}
        />
      )}
      {isDeleteFail && (
        <BackDrop
          children={
            <DeleteFailModal
              handleConfirmModal={() => setIsDeleteFail(false)}
            />
          }
          isOpen={isDeleteFail}
        />
      )}
    </S.Container>
  );
};

export default ScenarioDetailPage;
