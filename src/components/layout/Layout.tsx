import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import * as S from '@/styles/layout/LayoutStyle';

const Layout = ({ type }: { type: number }) => {
  return (
    <S.Container>
      <Header />
      <S.Main type={type}>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};

export default Layout;
