import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';

const DeleteModal = ({
  handleConfirmModal,
  handleCloseModal,
}: {
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>게시글 삭제</h1>
      <p>삭제하시겠습니까?</p>
      <S.ButtonWrap>
        <DarkButton text="삭제" onClick={handleConfirmModal} isSmall={true} />
        <LightButton text="취소" onClick={handleCloseModal} isSmall={true} />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default DeleteModal;
