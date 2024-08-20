import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const DeleteSuccessModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>게시글 삭제 완료!</h1>
      <p>게시글이 삭제되었습니다!</p>
      <DarkButton text="확인" onClick={handleConfirmModal} />
    </S.Container>
  );
};

export default DeleteSuccessModal;
