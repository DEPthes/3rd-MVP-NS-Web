import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';

const PostModal = ({
  handleConfirmModal,
  handleCloseModal,
}: {
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>상상력 게시</h1>
      <S.ModalTextBlack>상상력을 게시하시겠습니까?</S.ModalTextBlack>
      <S.ButtonWrap>
        <DarkButton text="게시" onClick={handleConfirmModal} />
        <LightButton text="취소" onClick={handleCloseModal} />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default PostModal;
