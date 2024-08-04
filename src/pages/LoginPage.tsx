import LoginCheckBox from '@/components/login/LoginCheckBox';
import LoginInput from '@/components/login/LoginInput';
import * as S from '@/styles/login/LoginPageStyle';
import { useState } from 'react';

const LoginPage = () => {
  const [loginText, setLoginText] = useState(''); //아이디 글자
  const [passwordText, setPasswordText] = useState(''); //비밀번호 글자
  const [isCheckRememberId, setIsCheckRememberId] = useState(false); //자동 로그인 여부
  const [isCheckSaveId, setIsCheckSaveId] = useState(false); //아이디 저장 여부

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
        <S.CheckBoxWrap>
          <LoginCheckBox
            label="자동 로그인"
            isCheck={isCheckRememberId}
            setIsCheck={setIsCheckRememberId}
          />
          <LoginCheckBox
            label="아이디 저장"
            isCheck={isCheckSaveId}
            setIsCheck={setIsCheckSaveId}
          />
        </S.CheckBoxWrap>
      </S.LoginWrap>
    </S.Container>
  );
};

export default LoginPage;
