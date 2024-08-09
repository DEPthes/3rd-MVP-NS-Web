import { Button } from '@/styles/button/LightButtonStyle';

const LightButton = ({
  text,
  onClick,
  isDisabled,
}: {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <Button onClick={onClick} disabled={isDisabled}>
      {text}
    </Button>
  );
};

export default LightButton;
