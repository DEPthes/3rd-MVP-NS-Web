import useNSMediaQuery from '@/hooks/useNSMediaQuery';
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
  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.Container>
      {isCheck ? (
        <CheckBoxVariantIcon
          width={isMobileOrTablet ? 12 : 24}
          onClick={() => setIsCheck(!isCheck)}
        />
      ) : (
        <CheckBoxDefaultIcon
          width={isMobileOrTablet ? 12 : 24}
          onClick={() => setIsCheck(!isCheck)}
        />
      )}
      <S.LabelText onClick={() => setIsCheck(!isCheck)}>{label}</S.LabelText>
    </S.Container>
  );
};

export default LoginCheckBox;
