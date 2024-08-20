import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/scenario/OtherPersonPageStyle';
import BlueHeart from '@assets/icons/BlueHeart.svg';
import BlueHeartFill from '@assets/icons/BlueHeartFill.svg';
import { getProfile } from '@/apis/user/getProfile';
import { boardLike } from '@/apis/board/boardLike';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';
import { TUserProfileResponse } from '@/types/mytype';
import Pagination from '@/components/pagination/Pagination';
import Loading from '@/components/layout/Loading';

const OtherPersonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<
    TUserProfileResponse['information'] | null
  >(null);
  const handleUnauthorized = useHandleUnauthorized();
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (id) {
        // id가 숫자로 변환될 수 있는지 확인
        const response = await getProfile(
          parseInt(id),
          pageNum,
          handleUnauthorized,
        );
        if (response) {
          setProfile(response.information);
          setIsLoading(false);
        } else {
          console.error('프로필을 불러오지 못했습니다.');
        }
      } else {
        console.error('id가 없습니다.');
      }
    };

    fetchProfile();
  }, [id, handleUnauthorized, pageNum]);

  const handleTitleClick = (postId: number) => {
    navigate(`/scenario/${postId}`);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const handleLikeClick = async (boardId: number, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const response = await boardLike(boardId, handleUnauthorized);

      if (response) {
        setProfile(prevProfile => {
          if (prevProfile) {
            return {
              ...prevProfile,
              userProfileRes: {
                ...prevProfile.userProfileRes,
                boardListResList:
                  prevProfile.userProfileRes.boardListResList.map(board =>
                    board.boardId === boardId
                      ? {
                          ...board,
                          likeCount: board.isLiked
                            ? board.likeCount - 1
                            : board.likeCount + 1,
                          isLiked: !board.isLiked,
                        }
                      : board,
                  ),
              },
            };
          }
          return prevProfile;
        });
      } else {
        console.error('게시글 좋아요 실패');
      }
    } catch (error) {
      console.error('게시글 좋아요 요청 중 오류 발생:', error);
    }
  };

  const truncateContent = (content: string) => {
    const maxLength = 50;
    if (content.length > maxLength) {
      return (
        <>
          {content.slice(0, maxLength)}
          <span style={{ color: 'var(--Gray1)' }}>...더보기</span>
        </>
      );
    }
    return content;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Container>
          {profile && (
            <>
              <S.ProfileContainer>
                <S.ProfileCircle
                  src={profile.userProfileRes.imageUrl}
                  alt="Profile"
                />
                <S.ProfileNickname>
                  {profile.userProfileRes.nickname}
                </S.ProfileNickname>
              </S.ProfileContainer>
              <S.PostList>
                {profile.userProfileRes.boardListResList.map(board => (
                  <S.PostBox
                    key={board.boardId}
                    onClick={() => handleTitleClick(board.boardId)}
                  >
                    <S.LeftWrap>
                      <S.PostTitle>{board.title}</S.PostTitle>
                      <S.PostContent>
                        {truncateContent(board.content)}
                      </S.PostContent>
                    </S.LeftWrap>
                    <S.LikeButton
                      onClick={e => handleLikeClick(board.boardId, e)}
                    >
                      <img
                        src={board.isLiked ? BlueHeartFill : BlueHeart}
                        alt="Like"
                      />
                      <S.LikeCount>{board.likeCount}</S.LikeCount>
                    </S.LikeButton>
                  </S.PostBox>
                ))}
              </S.PostList>
            </>
          )}
          {profile?.pageInfo && (
            <Pagination
              pageInfo={profile?.pageInfo}
              pageNum={pageNum}
              setPageNum={setPageNum}
            />
          )}
        </S.Container>
      )}
    </>
  );
};

export default OtherPersonPage;
