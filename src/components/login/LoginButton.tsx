import { Button } from '@/styles/login/LoginButtonStyle';

const LoginButton = ({
  isDisabled,
  onClick,
}: {
  isDisabled: boolean;
  onClick: () => void;
}) => {
  return (
    <Button disabled={isDisabled} onClick={onClick}>
      로그인
    </Button>
  );
};

export default LoginButton;
