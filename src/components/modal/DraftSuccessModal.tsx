import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const DraftSuccessModal = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>임시저장 완료!</h1>
      <S.ModalTextBlack2>
        (임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
      </S.ModalTextBlack2>
      <DarkButton text="확인" onClick={handleConfirmModal} />
    </S.Container>
  );
};

export default DraftSuccessModal;
