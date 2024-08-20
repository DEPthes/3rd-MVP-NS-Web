import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const PostSuccessModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <S.ModalContainer>
      <S.ModalTitle>상상력 게시 완료!</S.ModalTitle>
      <S.ModalTextBlack>N력 +5 상승!</S.ModalTextBlack>
      <DarkButton text="확인" onClick={handleConfirmModal} />
    </S.ModalContainer>
  );
};

export default PostSuccessModal;
