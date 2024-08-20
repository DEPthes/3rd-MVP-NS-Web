import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const PostSuccessModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>상상력 게시 완료!</h1>
      <S.ModalTextBlack>N력 +5 상승!</S.ModalTextBlack>
      <DarkButton text="확인" onClick={handleConfirmModal} />
    </S.Container>
  );
};

export default PostSuccessModal;
