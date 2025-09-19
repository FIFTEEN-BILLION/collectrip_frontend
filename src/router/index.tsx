import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Root from './root';
import RootPage from '../pages/Root/RootPage';
import HomePage from '@pages/Home';
import PediaPage from '@pages/Pedia';
import MyPage from '@pages/MyPage';
import LoginPage from '@pages/Login';
import MapPage from '@pages/Map';

export const webPath = {
  root: '/',
  home: '/home',
  pedia: '/pedia',
  login: '/login',
  mypage: '/mypage',
  map: '/map',
};

const routes: RouteObject[] = [
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
  {
    path: webPath.root,
    element: <RootPage />,
  },
  {
    path: webPath.login,
    element: <LoginPage />,
  },
  {
    path: webPath.mypage,
    element: <MyPage />,
  },
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: webPath.map,
        element: <MapPage />,
      },
      {
        path: webPath.home,
        element: <HomePage />,
      },
      {
        path: webPath.pedia,
        element: <PediaPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
