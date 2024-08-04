import { Button } from '@/styles/button/DarkButtonStyle';

const DarkButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default DarkButton;
