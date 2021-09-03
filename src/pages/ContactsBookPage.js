import { connect } from "react-redux";
import Form from "components/Form";
import Filter from "components/Filter";
import { itemsSelectors } from "redux/contacts/items";
import ContactsList from "components/ContactsList";
import { CSSTransition } from 'react-transition-group';
import { Subtitle } from "components/App/styles";
import pop from "transition/pop.module.css";

export const ContactsBookPage = ({ contacts }) => {
    console.log(contacts)
    return (
    <>
        <Form />
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
    </>
);
}

const mapStateToProps = state => ({
  contacts: itemsSelectors.getFilterName(state)
});

export default connect(mapStateToProps)(ContactsBookPage);