import * as S from '@/styles/layout/HeaderStyle';

const Header = () => {
  return (
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
  );
};

export default Header;
