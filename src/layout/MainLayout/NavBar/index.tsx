import { webPath } from '@router/index';
import MapIcon from '@assets/icons/nav/map.svg?react';
import HomeIcon from '@assets/icons/nav/home.svg?react';
import PediaIcon from '@assets/icons/nav/pedia.svg?react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const navBarItems = [
    {
      text: '지도',
      route: webPath.map,
      icon: MapIcon,
    },
    {
      text: 'Home',
      route: webPath.home,
      icon: HomeIcon,
    },
    {
      text: '도감',
      route: webPath.pedia,
      icon: PediaIcon,
    },
  ];

  const pathname = window.location.pathname;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        height: '64px',
        backgroundColor: 'white',
      }}
    >
      {navBarItems.map(({ text, icon: Icon, route }) => (
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            height: '100%',
          }}
          onClick={() => {
            navigate(route);
          }}
        >
          <Icon
            style={{
              width: '32px',
              height: 'auto',
              aspectRatio: '1/1',
              stroke: pathname === route ? '#CB0404' : '#8C8C8C',
            }}
          />
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              margin: 0,
              color: pathname === route ? '#CB0404' : '#8C8C8C',
            }}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
