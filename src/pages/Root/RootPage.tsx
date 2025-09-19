import LogoSVG from '@assets/logo.svg?react';
import * as styles from './RootPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { webPath } from '@router/index';

const RootPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(webPath.home, { replace: true });
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <LogoSVG className={styles.logo} />
    </div>
  );
};

export default RootPage;
