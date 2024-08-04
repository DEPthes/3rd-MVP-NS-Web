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
          style={{ cursor: 'pointer' }}
          onClick={() => setText('')}
        />
      )}
    </S.InputWrap>
  );
};

export default LoginInput;
