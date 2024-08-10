import { Button } from '@/styles/button/DarkButtonStyle';

const DarkButton = ({
  text,
  onClick,
  isDisabled,
  isSmall = false,
}: {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  isSmall?: boolean;
}) => {
  return (
    <Button onClick={onClick} disabled={isDisabled} isSmall={isSmall}>
      {text}
    </Button>
  );
};

export default DarkButton;
