import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from './Box';
import Loader from './Loader';
import SharedLayout from './SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const App = () => {
  return (
    <Suspense
      fallback={
        <Box margin="0 auto">
          <Loader />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
