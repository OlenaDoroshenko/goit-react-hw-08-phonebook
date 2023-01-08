import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LayoutBox from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};

export default Layout;