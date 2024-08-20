import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';
import { useSetRecoilState } from 'recoil';
import { loginModalState } from '@/recoil/login';

const LoginModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  const setLoginModalState = useSetRecoilState(loginModalState);

  return (
    <S.Container>
      <h1>로그인 필요</h1>
      <p>로그인이 필요한 기능입니다. 로그인 하시겠습니까?</p>
      <S.ButtonWrap>
        <DarkButton text="로그인" onClick={handleConfirmModal} isSmall={true} />
        <LightButton
          text="취소"
          onClick={() => setLoginModalState(false)}
          isSmall={true}
        />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default LoginModal;
