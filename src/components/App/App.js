import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Section from 'components/Section';
import { Switch } from 'react-router-dom';
import * as authUserOperations from "redux/authUser/authUser-operations";
import { getIsCurrentUser } from "redux/authUser/authUser-selector";
import Header from "../Header";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";

const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const ContactsBookPage = lazy(() => import('../../pages/ContactsBookPage' /* webpackChunkName: "contacts-page" */));
const RegisterPage = lazy(() => import('../../pages/RegisterPage' /* webpackChunkName: "register-page" */));
const LoginPage = lazy(() => import('../../pages/LoginPage' /* webpackChunkName: "login-page" */));

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserOperations.getCurrentUser())
  }, [dispatch]);

  return (
    <>
      {getIsCurrentUser && (
        <>
          <Header />
          <Section>
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Switch>
                <PublicRoute path='/' exact>
                  <HomePage />
                </PublicRoute>
                <PrivateRoute path='/contacts' redirectTo='/login'>
                  <ContactsBookPage />
                </PrivateRoute>
                <PublicRoute path='/register' restricted>
                  <RegisterPage />
                </PublicRoute>
                <PublicRoute path='/login' restricted redirectTo='/contacts'>
                  <LoginPage />
                </PublicRoute>
              </Switch>
            </Suspense>
          </Section>
        </>
      )}
    </>
  );
};

export default App;
