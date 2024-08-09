import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/layout/HeaderStyle';
import BackDrop from './BackDrop';
import { useEffect, useState } from 'react';
import HamMenuIcon from '@/assets/icons/HamMenu.svg?react';
import HamMenuMIcon from '@/assets/icons/HamMenuM.svg?react';
import HamMenuTIcon from '@/assets/icons/HamMenuT.svg?react';

const Header = () => {
  const { isTablet, isMobile, isDesktop } = useNSMediaQuery();
  const [isViewHamItem, setIsViewHamItem] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setIsViewHamItem(false);
    }
  }, [isDesktop]);

  return (
    <>
      {isMobile || isTablet ? (
        <>
          <S.Container>
            <S.NavMain to="/">N력 키우기</S.NavMain>
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
                  <S.HamNavLinks to="/">서비스 소개</S.HamNavLinks>
                  <S.HamNavLinks to="/">이용 방법</S.HamNavLinks>
                  <S.HamNavLinks to="/scenario">나였다면</S.HamNavLinks>
                  <S.HamNavLinks to="/report">N 보고서</S.HamNavLinks>
                  <S.HamNavLinks to="/ranking">N력 랭킹</S.HamNavLinks>
                  <S.HamNavLinks to="/profile">마이페이지</S.HamNavLinks>
                </S.HamNav>
              }
              isOpen={isViewHamItem}
              onBackdropClick={() => setIsViewHamItem(!isViewHamItem)}
            />
          )}
        </>
      ) : (
        <S.Container>
          <S.NavMain to="/">N력 키우기</S.NavMain>
          <S.Nav>
            <S.NavLinks to="/">서비스 소개</S.NavLinks>
            <S.NavLinks to="/">이용 방법</S.NavLinks>
            <S.NavLinks to="/scenario">나였다면</S.NavLinks>
            <S.NavLinks to="/report">N 보고서</S.NavLinks>
            <S.NavLinks to="/ranking">N력 랭킹</S.NavLinks>
            <S.NavLinks to="/profile">마이페이지</S.NavLinks>
          </S.Nav>
        </S.Container>
      )}
    </>
  );
};

export default Header;
