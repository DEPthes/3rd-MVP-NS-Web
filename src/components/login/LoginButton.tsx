import * as S from '@/styles/login/LoginButtonStyle';

const LoginButton = ({
  isDisabled,
  onClick,
}: {
  isDisabled: boolean;
  onClick: () => void;
}) => {
  return (
    <S.Container disabled={isDisabled} onClick={onClick}>
      로그인
    </S.Container>
  );
};

export default LoginButton;
