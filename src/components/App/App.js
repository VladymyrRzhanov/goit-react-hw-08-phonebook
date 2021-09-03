import Form from 'components/Form';
import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { connect } from "react-redux";
import { itemsSelectors } from "redux/contacts/items";
// import s from './App.module.css';
import slide from "transition/slide.module.css";
import pop from "transition/pop.module.css";
import { CSSTransition } from 'react-transition-group';
import { Title, Subtitle } from "./styles";
import { ContactsBookPage } from "pages/ContactsBookPage";

const App = ({contacts}) => {
  console.log(contacts)
  return (
    <>
      <Section>
        <CSSTransition
          in={true}
          appear={true}
          classNames={slide}
          timeout={500}
        >
          <Title>
            Phonebook
          </Title>
        </CSSTransition>
        {/* <Form /> */}
      </Section>
      <Section>
        {/* <ContactsBookPage/> */}
        <CSSTransition
          in={contacts.length > 1}
          classNames={pop}
          timeout={500}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={!!contacts.length}
          classNames={pop}
          timeout={500}
          unmountOnExit
        >
        <Subtitle>Contacts</Subtitle>
          </CSSTransition>
        <ContactsList />
      </Section>
    </>
  );
};

const mapStateToProps = state => ({
  contacts: itemsSelectors.getItems(state)
});

export default connect(mapStateToProps)(App);
