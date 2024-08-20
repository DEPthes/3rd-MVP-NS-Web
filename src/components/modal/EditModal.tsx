import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';

const EditModal = ({
  handleConfirmModal,
  handleCloseModal,
}: {
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>상상력 수정</h1>
      <S.ModalTextBlack>상상력을 수정하시겠습니까?</S.ModalTextBlack>
      <S.ButtonWrap>
        <DarkButton text="수정" onClick={handleConfirmModal} />
        <LightButton text="취소" onClick={handleCloseModal} />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default EditModal;
