import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/login/LoginInputStyle';
import InputCancelIcon from '@assets/icons/InputCancel.svg?react';

const LoginInput = ({
  type,
  text,
  setText,
  placeholder,
}: {
  type: 'text' | 'password';
  text: string;
  setText: (value: string) => void;
  placeholder: string;
}) => {
  const { isMobileOrTablet } = useNSMediaQuery();

  return (
    <S.InputWrap>
      <S.Input
        type={type}
        placeholder={placeholder}
        minLength={1}
        value={text}
        spellCheck={false}
        onChange={event => setText(event.target.value)}
      />
      {text.length > 0 && (
        <InputCancelIcon
          width={isMobileOrTablet ? 12 : 16}
          strokeWidth={isMobileOrTablet ? 1 : 2}
          style={{ cursor: 'pointer' }}
          onClick={() => setText('')}
        />
      )}
    </S.InputWrap>
  );
};

export default LoginInput;
