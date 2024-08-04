import * as S from '@/styles/login/LoginCheckBoxStyle';
import CheckBoxDefaultIcon from '@assets/icons/CheckBoxDefault.svg?react';
import CheckBoxVariantIcon from '@assets/icons/CheckBoxVariant.svg?react';

const LoginCheckBox = ({
  label,
  isCheck,
  setIsCheck,
}: {
  label: string;
  isCheck: boolean;
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <S.Container>
      {isCheck ? (
        <CheckBoxVariantIcon onClick={() => setIsCheck(!isCheck)} />
      ) : (
        <CheckBoxDefaultIcon onClick={() => setIsCheck(!isCheck)} />
      )}
      <S.LabelText>{label}</S.LabelText>
    </S.Container>
  );
};

export default LoginCheckBox;
