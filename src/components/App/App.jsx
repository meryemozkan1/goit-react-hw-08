import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute.jsx';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute.jsx';

import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegistrationPage = lazy(() =>
  import('../../pages/Registration/Registration')
);
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <b>Kullanıcı bilgileri güncelleniyor...</b>
    </div>
  ) : (
    <Layout>
      <Suspense fallback={<div style={{ padding: '20px' }}>Sayfa yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={RegistrationPage}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={LoginPage}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={ContactsPage}
              />
            }
          />

          <Route
            path="*"
            element={<div style={{ padding: '20px' }}>Sayfa Bulunamadı</div>}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}