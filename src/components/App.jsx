import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from './Box';
import Loader from './Loader';
import SharedLayout from './SharedLayout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import NotFoundPage from 'pages/NotFoundPage';

const Contacts = lazy(() => import('../pages/Contacts'));

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
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
