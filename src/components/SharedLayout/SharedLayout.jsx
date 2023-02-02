import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import Loader from '../Loader';
import { Container, Header, Link } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <nav>
            <Link to="/">Log in</Link>
            <Link to="/register" end>
              Register
            </Link>
            <Link to="/contacts">Contacts</Link>
          </nav>
          <UserMenu />
        </Box>
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
    </Container>
  );
};

export default SharedLayout;
