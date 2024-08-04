import * as S from '@/styles/login/LoginPageStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '@/components/login/LoginButton';
import LoginCheckBox from '@/components/login/LoginCheckBox';
import LoginInput from '@/components/login/LoginInput';
import SignupButton from '@/components/login/SignupButton';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginText, setLoginText] = useState(''); //아이디 글자
  const [passwordText, setPasswordText] = useState(''); //비밀번호 글자
  const [isCheckRememberId, setIsCheckRememberId] = useState(false); //자동 로그인 여부
  const [isCheckSaveId, setIsCheckSaveId] = useState(false); //아이디 저장 여부
  const [isWarningVisibility, setIsWarningVisibility] = useState(false); //경고 표시 여부

  //로그인 함수
  const handleLogin = () => {
    //로그인 성공 시 로그인 최초 요청 페이지로 이동
    //로그인 실패
    setIsWarningVisibility(true);
  };

  //input 내용 변경될 때 경고 메시지 숨기는 함수
  const handleTextChange =
    (setText: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      setText(value);
      setIsWarningVisibility(false);
    };

  return (
    <S.Container>
      <h1>로그인</h1>
      <S.LoginWrap>
        <LoginInput
          type="text"
          text={loginText}
          setText={handleTextChange(setLoginText)}
          placeholder="아이디"
        />
        <LoginInput
          type="password"
          text={passwordText}
          setText={handleTextChange(setPasswordText)}
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
        <S.WarningText
          style={{ visibility: isWarningVisibility ? 'visible' : 'hidden' }}
        >
          아이디, 비밀번호를 확인해주세요
        </S.WarningText>
        <LoginButton
          isDisabled={!loginText || !passwordText}
          onClick={handleLogin}
        />
        <SignupButton onClick={() => navigate('/signup')} />
      </S.LoginWrap>
    </S.Container>
  );
};

export default LoginPage;
