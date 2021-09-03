import React, { Component } from 'react';
import { connect } from "react-redux";
// import { addContact } from "../../redux/contacts/items/items-actions";
import { itemsOperations, itemsSelectors } from "redux/contacts/items";
// import { getFilterName } from "redux/contacts/items/items-selector";
import Notification from "components/Notification";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import alertTransition from "transition/alert.module.css";
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as AddIcon } from 'images/accept.svg';
// import s from './Form.module.css';
import { ContactForm, InputContainer, Subtitle, Input, StyledInputMask, Button, BtnText } from "./styles";

class Form extends Component {
  state = {
    name: '',
    number: '',
    alert: ''
  };

  static props = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      id: uuidv4(),
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { contacts } = this.props;
    const { name, number } = this.state;
    e.preventDefault();
    if (contacts.some(({ name }) => name.includes(this.state.name))) {
      this.setState({ alert: `${this.state.name} is already in your contacts book!` })
    } else {
      onSubmit({name, number});
    };
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onResetAlert = () => {
    this.setState({ alert: '' });
  };

  render() {
    const { name, number, alert } = this.state;
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <CSSTransition
          in={alert.length > 0}
          timeout={{ enter: 3000, exit: 50 }}
          classNames={alertTransition}
          unmountOnExit
          onEntered={() => this.onResetAlert()}
        >
          <Notification
            alertName={alert}
          />
        </CSSTransition>
        <InputContainer>
          <Subtitle>Name</Subtitle>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <Subtitle>Number</Subtitle>
          <StyledInputMask
            mask="+99(999)999-99-99"
            placeholder="Enter contact phone"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleInputChange} />
        </InputContainer>
        <Button type="submit"><BtnText>Add contact</BtnText><AddIcon width="32" height="32"/></Button>
      </ContactForm>
    );
  };
};

const mapStateToProps = state => ({
  contacts: itemsSelectors.getFilterName(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (contact) => dispatch(itemsOperations.addContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);