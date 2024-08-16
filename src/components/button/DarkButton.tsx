import { Button } from '@/styles/button/DarkButtonStyle';

const DarkButton = ({
  text,
  onClick,
  isDisabled,
  isSmall = false,
  ...props
}: {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  isSmall?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      disabled={isDisabled}
      $isSmall={isSmall}
    >
      {text}
    </Button>
  );
};

export default DarkButton;
