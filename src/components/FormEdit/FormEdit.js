import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { itemsOperations } from "redux/contacts/items";
import { ContactForm, InputContainer, Subtitle, Input, Button, BtnText,StyledInputMask } from "./styles";

const FormEdit = ({userName, userNumber, userId, onClose}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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
        dispatch(itemsOperations.editContact({userId, name, number}));
        reset();
        onClose()
    };


  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
        <ContactForm onSubmit={handleSubmit}>
            <InputContainer>
          <Subtitle>Name</Subtitle>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete='off'
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <Subtitle>Number</Subtitle>
          <StyledInputMask
            mask="+99(999)999-99-99"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleInputChange} />
        </InputContainer>
            <Button type="submit"><BtnText>Edit</BtnText></Button>
        </ContactForm>
    );
};

export default FormEdit;