import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { itemsOperations } from "redux/contacts/items";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import { ContactForm, Button, BtnText,StyledInputMask, CustomForm } from "./styles";

const FormEdit = ({ userName, userNumber, userId, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
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

  useEffect(() => {
    setName(userName);
    setNumber(userNumber)
  }, [userName, userNumber])

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
    dispatch(itemsOperations.editContact({ userId, name, number }));
    reset();
    onClose()
  };


  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
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
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          variant="outlined"
          onChange={handleInputChange} />
      </CustomForm>
      <Button type="submit"><BtnText>Edit contact</BtnText><EditIcon width="32" height="32" /></Button>
    </ContactForm>
  );
};

export default FormEdit;