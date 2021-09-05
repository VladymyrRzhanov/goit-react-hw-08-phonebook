import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Section from 'components/Section';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from "pages/HomePage";
import ContactsBookPage from "pages/ContactsBookPage";
import {RegisterPage} from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import * as authUserOperations from "redux/authUser/authUser-operations";
// import s from './App.module.css';
import Header from "../Header";

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserOperations.getCurrentUser())
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/contacts'>
            <ContactsBookPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </Section>
    </>
  );
};

export default App;
