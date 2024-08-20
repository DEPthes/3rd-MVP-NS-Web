import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';

const DraftModal = ({
  handleConfirmModal,
  handleCloseModal,
}: {
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
}) => {
  return (
    <S.ModalContainer>
      <S.ModalTitle>상상력 임시저장</S.ModalTitle>
      <S.ModalText2Black>
        게시글을 임시 저장하시겠습니까? <br />
        <span>
          (임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
        </span>
      </S.ModalText2Black>
      <S.ModalBtn>
        <DarkButton text="임시저장" onClick={handleConfirmModal} />
        <LightButton text="취소" onClick={handleCloseModal} />
      </S.ModalBtn>
    </S.ModalContainer>
  );
};

export default DraftModal;
