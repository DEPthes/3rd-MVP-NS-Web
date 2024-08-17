import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import * as S from '@/styles/layout/LayoutStyle';
import BackDrop from '@/components/layout/BackDrop';
import LoginModal from '@/components/modal/LoginModal';
import { useRecoilState } from 'recoil';
import { loginModalState } from '@/recoil/login';
import { useLocation, useNavigate } from 'react-router-dom';

const Layout = ({ type }: { type: number }) => {
  const [isModal, setIsModal] = useRecoilState(loginModalState);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <S.Container>
        <Header />
        <S.Main $type={type}>
          <Outlet />
        </S.Main>
      </S.Container>
      {isModal && (
        <BackDrop
          children={
            <LoginModal
              handleClick={() => {
                setIsModal(false);
                sessionStorage.setItem('prevPath', pathname);
                navigate('/login');
              }}
            />
          }
          isOpen={isModal}
        />
      )}
    </>
  );
};

export default Layout;
