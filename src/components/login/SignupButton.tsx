import { Button } from '@/styles/login/SignupButtonStyle';

const SignupButton = ({ onClick }: { onClick: () => void }) => {
  return <Button onClick={onClick}>회원가입</Button>;
};

export default SignupButton;
