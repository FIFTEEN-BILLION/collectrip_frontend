import LeftCarouselSVG from '@assets/icons/left-carousel.svg?react';
import RightCarouselSVG from '@assets/icons/right-carousel.svg?react';
import * as header from '@styles/header.css';
import { webPath } from '@router/index';
import { useNavigate } from 'react-router-dom';
import * as styles from './index.css';

const MyPageHeader = () => {
  const navigate = useNavigate();

  const handleClickBefore = () => {
    navigate(-1);
  };

  return (
    <div className={header.container}>
      <LeftCarouselSVG className={header.icon({ dark: true })} onClick={handleClickBefore} />
      <p className={header.title}>내 정보</p>
    </div>
  );
};

const MyPage = () => {
  const navigate = useNavigate();

  const details = [
    {
      text: '찜한 목록',
      carousel: true,
    },
    { text: '추천 이력', carousel: true },
  ];

  const others = [
    { text: '공지사항', carousel: true },
    { text: '개인정보 수집 및 이용약관', carousel: true },
    { text: '로그아웃', carousel: false },
  ];

  const handleClickLogin = () => {
    navigate(webPath.login);
  };

  return (
    <div className={styles.container}>
      <MyPageHeader />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={handleClickLogin}>
            로그인 / 회원가입
          </button>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.title}>활동 내역</p>
          <div className={styles.list}>
            {details.map(({ text, carousel }) => (
              <div key={`DETAILS_${text}`} className={styles.item}>
                <p className={styles.itemText}>{text}</p>
                {carousel && <RightCarouselSVG className={styles.carousel} />}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            {others.map(({ text, carousel }) => (
              <div key={`OTHERS_${text}`} className={styles.item}>
                <p className={styles.itemText}>{text}</p>
                {carousel && <RightCarouselSVG className={styles.carousel} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
