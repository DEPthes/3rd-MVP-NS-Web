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
    <S.ModalContainer>
      <S.ModalTitle>상상력 게시</S.ModalTitle>
      <S.ModalTextBlack>상상력을 게시하시겠습니까?</S.ModalTextBlack>
      <S.ModalBtn>
        <DarkButton text="게시" onClick={handleConfirmModal} />
        <LightButton text="취소" onClick={handleCloseModal} />
      </S.ModalBtn>
    </S.ModalContainer>
  );
};

export default PostModal;
