import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import Loader from '../Loader';
import { Header, Link } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Log in</Link>
          <Link to="/register" end>
            Register
          </Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <UserMenu />
      </Header>
      <Suspense
        fallback={
          <Box paddingTop="90px">
            <Loader />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
