import * as S from '@/styles/modal/SignupModalStyle';
import DarkButton from '../button/DarkButton';
import { useNavigate } from 'react-router-dom';

const SignupModal = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <h1>회원가입 완료!</h1>
      <p>이제 상상의 나래를 마음껏 펼쳐볼까요?</p>
      <DarkButton
        text="확인"
        onClick={() => navigate('/login')}
        isSmall={true}
      />
    </S.Container>
  );
};

export default SignupModal;
