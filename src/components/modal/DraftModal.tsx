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
    <S.Container>
      <h1>상상력 임시저장</h1>
      <S.ModalText2Black>
        게시글을 임시 저장하시겠습니까? <br />
        <span>
          (임시 저장된 글은 마이페이지-내가 쓴 글에서 확인할 수 있습니다.)
        </span>
      </S.ModalText2Black>
      <S.ButtonWrap>
        <DarkButton text="임시저장" onClick={handleConfirmModal} />
        <LightButton text="취소" onClick={handleCloseModal} />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default DraftModal;
