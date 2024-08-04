import LoginInput from '@/components/login/LoginInput';
import * as S from '@/styles/login/LoginPageStyle';
import { useState } from 'react';

const LoginPage = () => {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  return (
    <S.Container>
      <h1>로그인</h1>
      <S.LoginWrap>
        <LoginInput
          type="text"
          text={loginText}
          setText={setLoginText}
          placeholder="아이디"
        />
        <LoginInput
          type="password"
          text={passwordText}
          setText={setPasswordText}
          placeholder="비밀번호"
        />
        <S.CheckBoxWrap></S.CheckBoxWrap>
      </S.LoginWrap>
    </S.Container>
  );
};

export default LoginPage;
