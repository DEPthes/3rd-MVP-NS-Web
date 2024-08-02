import { Button } from '@/styles/button/LightButtonStyle';

const LightButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default LightButton;
