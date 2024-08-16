import { useNavigate } from 'react-router-dom';
import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/layout/HeaderStyle';
import BackDrop from './BackDrop';
import { useEffect, useState } from 'react';
import HamMenuIcon from '@/assets/icons/HamMenu.svg?react';
import HamMenuMIcon from '@/assets/icons/HamMenuM.svg?react';
import HamMenuTIcon from '@/assets/icons/HamMenuT.svg?react';
import { postSignout } from '@/apis/auth/postSignout';
import { useHandleUnauthorized } from '@/utils/handleUnauthorized';

const Header = () => {
  const { isMobileOrTablet, isTablet, isMobile, isDesktop } = useNSMediaQuery();
  const [isViewHamItem, setIsViewHamItem] = useState(false);
  const isAccessToken = !!localStorage.getItem('accessToken');
  const handleUnauthorized = useHandleUnauthorized();
  const navigate = useNavigate();

  const handleServiceIntroductionClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    navigate('/', { state: { scrollToIntroduction: true } });
  };

  const handleUsageClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    navigate('/', { state: { scrollToUsage: true } });
  };

  useEffect(() => {
    if (isDesktop) {
      setIsViewHamItem(false);
    }
  }, [isDesktop]);

  const handleSignOut = async () => {
    if (isAccessToken) {
      const response = await postSignout(handleUnauthorized);
      if (response.check) {
        console.log('로그아웃');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
    }
  };

  return (
    <>
      {isMobileOrTablet ? (
        <>
          <S.Container>
            <S.NavMain to="/" onClick={handleSignOut}>
              N력 키우기
            </S.NavMain>
            <HamMenuIcon onClick={() => setIsViewHamItem(!isViewHamItem)} />
          </S.Container>
          {isViewHamItem && (
            <BackDrop
              children={
                <S.HamNav>
                  {isMobile && (
                    <HamMenuMIcon
                      onClick={() => setIsViewHamItem(!isViewHamItem)}
                    />
                  )}
                  {isTablet && (
                    <HamMenuTIcon
                      onClick={() => setIsViewHamItem(!isViewHamItem)}
                    />
                  )}
                  <S.HamNavLinks
                    to="/"
                    onClick={handleServiceIntroductionClick}
                  >
                    서비스 소개
                  </S.HamNavLinks>
                  <S.HamNavLinks to="/" onClick={handleUsageClick}>
                    이용 방법
                  </S.HamNavLinks>
                  <S.HamNavLinks to="/scenario">나였다면</S.HamNavLinks>
                  <S.HamNavLinks to="/report">N 보고서</S.HamNavLinks>
                  <S.HamNavLinks to="/ranking">N력 랭킹</S.HamNavLinks>
                  <S.HamNavLinks
                    to={isAccessToken ? '/profile' : '/login'}
                    onClick={() =>
                      sessionStorage.setItem('prevPath', '/profile')
                    }
                  >
                    마이페이지
                  </S.HamNavLinks>
                </S.HamNav>
              }
              isOpen={isViewHamItem}
              onBackdropClick={() => setIsViewHamItem(!isViewHamItem)}
            />
          )}
        </>
      ) : (
        <S.Container>
          <S.NavMain to="/" onClick={handleSignOut}>
            N력 키우기
          </S.NavMain>
          <S.Nav>
            {/* "서비스 소개" 클릭 시 항상 메인 페이지로 이동 후 스크롤 */}
            <S.NavLinks
              to="/" // 메인 페이지 경로 설정
              onClick={handleServiceIntroductionClick} // 클릭 시 스크롤 동작 제어
            >
              서비스 소개
            </S.NavLinks>
            {/* "이용 방법" 클릭 시 항상 메인 페이지로 이동 후 스크롤 */}
            <S.NavLinks
              to="/" // 메인 페이지 경로 설정
              onClick={handleUsageClick} // 클릭 시 스크롤 동작 제어
            >
              이용 방법
            </S.NavLinks>
            <S.NavLinks to="/scenario">나였다면</S.NavLinks>
            <S.NavLinks to="/report">N 보고서</S.NavLinks>
            <S.NavLinks to="/ranking">N력 랭킹</S.NavLinks>
            <S.NavLinks
              to={isAccessToken ? '/profile' : '/login'}
              onClick={() => sessionStorage.setItem('prevPath', '/profile')}
            >
              마이페이지
            </S.NavLinks>
          </S.Nav>
        </S.Container>
      )}
    </>
  );
};

export default Header;
