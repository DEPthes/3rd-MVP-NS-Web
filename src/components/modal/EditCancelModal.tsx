import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';

const EditCancelModal = ({
  handleConfirmModal,
  handleCloseModal,
}: {
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>상상력 수정 취소</h1>
      <S.ModalText2Black>
        상상력 수정을 그만 두시겠습니까? <br />
        <span>(작성된 글은 저장되지 않습니다.)</span>
      </S.ModalText2Black>
      <S.ButtonWrap>
        <DarkButton text="그만두기" onClick={handleConfirmModal} />
        <LightButton text="계속하기" onClick={handleCloseModal} />
      </S.ButtonWrap>
    </S.Container>
  );
};

export default EditCancelModal;
