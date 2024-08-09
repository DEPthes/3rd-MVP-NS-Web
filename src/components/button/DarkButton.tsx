import { Button } from '@/styles/button/DarkButtonStyle';

const DarkButton = ({
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

export default DarkButton;
