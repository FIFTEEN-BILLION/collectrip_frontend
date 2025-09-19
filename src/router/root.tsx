import { Outlet, ScrollRestoration } from 'react-router-dom';
import MainLayout from '@layout/MainLayout';

const Root = () => {
  return (
    <MainLayout>
      <Outlet />
      <ScrollRestoration />
    </MainLayout>
  );
};

export default Root;
