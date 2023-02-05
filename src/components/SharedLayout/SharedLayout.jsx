import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import Loader from '../Loader';
import { Header, Link } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      overflow="hidden"
    >
      <Header>
        <nav>
          {!isLoggedIn && (
            <>
              <Link to="/">Home</Link>
              <Link to="/login">Log in</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </nav>
        {isLoggedIn && <UserMenu />}
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
    </Box>
  );
};

export default SharedLayout;
