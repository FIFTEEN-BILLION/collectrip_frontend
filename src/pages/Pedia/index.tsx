import LeftCarouselSVG from '@assets/icons/left-carousel.svg?react';
import * as header from '@styles/header.css';
import * as progress from './progress.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as list from './list.css';
import { pediaItems, progressItems } from './constants';
import { useRef, useState } from 'react';
import * as styles from './index.css';

const PediaHeader = () => {
  return (
    <div className={header.container}>
      <LeftCarouselSVG className={header.icon({ dark: true })} />
      <p className={header.title}>도감</p>
    </div>
  );
};

const PediaProgress = ({ showToast }: { showToast: (text: string) => void }) => {
  const total = pediaItems.reduce((sum, cat) => sum + cat.badges.length, 0);
  const collected = pediaItems.reduce((sum, cat) => sum + cat.badges.filter((b) => b.collect).length, 0);
  const percent = total > 0 ? Math.round((collected / total) * 100) : 0;

  const nextGoal = progressItems.find((item) => item.goal > percent);

  const handleClickProgress = () => {
    if (nextGoal) {
      showToast(`${nextGoal.goal}% 달성시 ${nextGoal.text}`);
    } else {
      showToast('도감 완료!');
    }
  };

  return (
    <div className={progress.container} onClick={handleClickProgress}>
      <div className={progress.titleContainer}>
        <p className={progress.title}>전체 도감 진행률</p>
        <p className={progress.progress}>{percent}%</p>
      </div>
      <span className={progress.progressBar} style={assignInlineVars({ [progress.progressWidthVar]: `${percent}%` })} />
    </div>
  );
};

const PediaList = ({ showToast }: { showToast: (text: string) => void }) => {
  const handleClickBadge = (achievement: string) => () => {
    showToast(achievement);
  };

  return (
    <div className={list.container}>
      {pediaItems.map(({ title, badges }) => (
        <div className={list.categoryContainer}>
          <p className={list.categoryTitle}>{title}</p>
          <div className={list.badgeScroll}>
            <div className={list.badgeList}>
              {badges.map(({ img, collect, achievement }) => (
                <img
                  src={img}
                  alt={achievement}
                  className={list.badgeItem({ collect })}
                  onClick={handleClickBadge(achievement)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PediaPage = () => {
  const [toast, setToast] = useState<{
    text: string;
    visible: boolean;
    enable: boolean;
  }>({
    text: '',
    visible: false,
    enable: false,
  });

  const toastVisibleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toastEnableTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = async (text: string) => {
    [toastVisibleTimeoutRef, toastEnableTimeoutRef].forEach((ref) => {
      if (ref.current) clearTimeout(ref.current);
    });

    setToast({
      text,
      visible: false,
      enable: true,
    });
    await new Promise((resolve) => setTimeout(resolve, 1));
    setToast((prev) => ({
      ...prev,
      visible: true,
    }));

    toastVisibleTimeoutRef.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        visible: false,
      }));
    }, 1250);

    toastEnableTimeoutRef.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        enable: false,
      }));
    }, 1500);
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PediaHeader />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '48px',
          width: '100%',
        }}
      >
        <PediaProgress showToast={showToast} />
        <PediaList showToast={showToast} />
      </div>
      {toast.enable && <span className={styles.toast({ visible: toast.visible })}>{toast.text}</span>}
    </div>
  );
};

export default PediaPage;
