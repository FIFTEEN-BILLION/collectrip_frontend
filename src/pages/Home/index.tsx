import LogoSVG from '@assets/logo.svg?react';
import FillSVG from '@assets/icons/fill.svg?react';
import MenuSVG from '@assets/icons/menu.svg?react';
import * as header from '@styles/header.css';
import { useNavigate } from 'react-router-dom';
import { webPath } from '@router/index';
import BackgroundBeachPNG from '@assets/images/backgrounds/beach.png';
import CharacterApeachPNG from '@assets/images/characters/apeach.png';
import * as decos from './decos.css';
import * as styles from './index.css';
import { useState } from 'react';

import AskPNG from '@assets/images/ask.png';

const HomeHeader = ({ handleOpenEdit }: { handleOpenEdit: () => void }) => {
  const navigate = useNavigate();

  const handleClickMenu = () => {
    navigate(webPath.mypage);
  };

  return (
    <div className={header.container}>
      <LogoSVG className={header.logo} />
      <FillSVG className={header.icon({})} onClick={handleOpenEdit} />
      <MenuSVG className={header.icon({})} onClick={handleClickMenu} />
    </div>
  );
};

const HomeDecos = ({ CharacterImage }: { CharacterImage: string }) => {
  return (
    <div className={decos.container}>
      <img className={decos.background} src={BackgroundBeachPNG} alt="background" />
      <div className={decos.characterShadow} />
      <img className={decos.character} src={CharacterImage} alt="character" />
    </div>
  );
};

import LeftCarouselSVG from '@assets/icons/left-carousel.svg?react';

const HomeEditDecos = ({ handleCloseEdit }: { handleCloseEdit: () => void }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
    >
      <div className={header.container}>
        <LeftCarouselSVG className={header.icon({ dark: true })} onClick={handleCloseEdit} />
        <p className={header.title}>인테리어</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [character] = useState(CharacterApeachPNG);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    setIsOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setIsOpenEdit(false);
  };

  return (
    <div className={styles.container}>
      <HomeHeader handleOpenEdit={handleOpenEdit} />
      <div className={styles.content}>
        <HomeDecos CharacterImage={character} />
        <div className={styles.inputContainer({ inputFocus })}>
          <div className={styles.inputContents({ inputFocus })}>
            {inputFocus && (
              <div className={styles.inputDecoContainer}>
                <img src={character} alt="input_character" className={styles.inputDecoCharacter} />
                <img src={AskPNG} alt="input_ask" className={styles.inputDecoAsk} />
              </div>
            )}
            <input
              type="text"
              placeholder="캐릭터에게 여행 질문을 해주세요"
              className={styles.input}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
          </div>
        </div>
      </div>
      {isOpenEdit && <HomeEditDecos handleCloseEdit={handleCloseEdit} />}
    </div>
  );
};

export default HomePage;
