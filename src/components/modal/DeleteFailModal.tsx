import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const DeleteFailModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>삭제 실패</h1>
      <p>게시글 삭제에 실패했습니다.</p>
      <DarkButton text="확인" onClick={handleConfirmModal} isSmall={true} />
    </S.Container>
  );
};

export default DeleteFailModal;
