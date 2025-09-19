import CrossSVG from '@assets/icons/cross.svg?react';
import LogoSVG from '@assets/logo.svg?react';
import * as header from '@styles/header.css';
import * as styles from './index.css';
import KakaoSVG from '@assets/icons/login/kakao.svg?react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClickBefore = () => {
    navigate(-1);
  };

  const handleClickKakao = () => {
    console.log('카카오로 계속하기');
  };

  return (
    <div className={styles.container}>
      <div className={header.container}>
        <CrossSVG className={header.icon({ dark: true })} onClick={handleClickBefore} />
      </div>
      <div className={styles.content}>
        <LogoSVG className={styles.logo} />
        <p className={styles.divider}>로그인/회원가입</p>
        <button className={styles.button} onClick={handleClickKakao}>
          <KakaoSVG />
          카카오로 계속하기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
