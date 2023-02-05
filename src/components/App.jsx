import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import Box from './Box';
import Loader from './Loader';
import SharedLayout from './SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense
      fallback={
        <Box margin="0 auto">
          <Loader />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Home />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
