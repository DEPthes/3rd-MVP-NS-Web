import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const EditSuccessModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>상상력 게시 완료!</h1>
      <S.ModalTextBlack>상상력 수정이 완료되었습니다!</S.ModalTextBlack>
      <DarkButton text="확인" onClick={handleConfirmModal} />
    </S.Container>
  );
};

export default EditSuccessModal;
