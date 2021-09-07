import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section';
import { Switch } from 'react-router-dom';
import * as authUserOperations from "redux/authUser/authUser-operations";
import { getIsCurrentUser } from "redux/authUser/authUser-selector";
import Header from "../Header";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import Loader from "../Loader";
import Footer from "../Footer";
import Container from 'components/Container';

const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const ContactsBookPage = lazy(() => import('../../pages/ContactsBookPage' /* webpackChunkName: "contacts-page" */));
const RegisterPage = lazy(() => import('../../pages/RegisterPage' /* webpackChunkName: "register-page" */));
const LoginPage = lazy(() => import('../../pages/LoginPage' /* webpackChunkName: "login-page" */));

const App = () => {
  
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser)

  useEffect(() => {
    dispatch(authUserOperations.getCurrentUser())
  }, [dispatch]);

  return (
    <>
      {isCurrentUser ? (<Loader />) : (
        <>
          <Header />
              <Suspense fallback={<Loader />}>
                <Switch>
          <Section>
            <Container>
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
            </Container>
          </Section>
                </Switch>
              </Suspense>
              <Footer />
        </>
      )}
    </>
  );
};

export default App;
