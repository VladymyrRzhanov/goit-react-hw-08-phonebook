import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { itemsOperations, itemsSelectors } from "redux/contacts/items";
import Notification from "components/Notification";
import alertTransition from "transition/alert.module.css";
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import CustomForm from '@material-ui/core/CustomForm';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { ContactForm,  StyledInputMask, Button, BtnText, CustomForm } from "./styles";

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(itemsSelectors.getItems)

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '50ch',
    },
  }));
  
  const classes = useStyles();


  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      setAlert(`${name} is already in your contacts book!`)
    } else {
      dispatch(itemsOperations.addContact({ name, number }));
    };
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onResetAlert = () => {
    setAlert('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <CSSTransition
        in={alert.length > 0}
        timeout={{ enter: 3000, exit: 50 }}
        classNames={alertTransition}
        unmountOnExit
        onEntered={() => onResetAlert()}
      >
        <Notification
          alertName={alert}
        />
      </CSSTransition>

      <CustomForm className={clsx(classes.margin)} variant="outlined">
        <TextField
          label="Name"
          type="text"
          autoComplete="off"
          name="name"
          value={name}
          variant="outlined"
          required
          onChange={handleInputChange}
        />
      </CustomForm>
      <CustomForm className={clsx(classes.margin)} variant="outlined">
        <TextField
          label="Phone"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="?????????? ???????????????? ???????????? ???????????????? ???????? ?? ?????????? ?????????????????? ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +"
          variant="outlined"
          autoComplete="off"
          required
          onChange={handleInputChange}
        />
        <StyledInputMask
          label="Phone"
          mask="+99(999)999-99-99"
          type="tel"
          autoComplete="off"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="?????????? ???????????????? ???????????? ???????????????? ???????? ?? ?????????? ?????????????????? ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +"
          required
          variant="outlined"
          onChange={handleInputChange} />
      </CustomForm>
      <Button type="submit"><BtnText>Add contact</BtnText><AddIcon width="32" height="32" /></Button>
    </ContactForm>
  );
};

export default Form;