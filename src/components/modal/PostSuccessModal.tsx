import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';

const PostSuccessModal = ({
  isFirst,
  isTodayTheme,
  handleConfirmModal,
}: {
  isFirst: boolean;
  isTodayTheme: boolean;
  handleConfirmModal: () => void;
}) => {
  return (
    <S.Container>
      <h1>상상력 게시 완료!</h1>
      <S.ModalTextBlack>
        N력 +{isFirst ? 5 : isTodayTheme ? 3 : 2} 상승!
      </S.ModalTextBlack>
      <DarkButton text="확인" onClick={handleConfirmModal} />
    </S.Container>
  );
};

export default PostSuccessModal;
