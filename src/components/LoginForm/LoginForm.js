import React, { useState,  } from 'react';
import { connect, useDispatch } from "react-redux";
import * as authUserOperations from "redux/authUser/authUser-operations";
import { ReactComponent as AddIcon } from 'images/accept.svg';
import { ContactForm, InputContainer, Subtitle, Input, Button, BtnText } from "./styles";

const RegisterForm = ({users, onSubmit}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authUserOperations.loginUser({ email, password }));
        reset();
    };


  const reset = () => {
    setEmail('');
    setPassword('');
  };

    return (
        <ContactForm onSubmit={handleSubmit}>
            <InputContainer>
                <Subtitle>Email</Subtitle>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleInputChange}
                />
            </InputContainer>
            <InputContainer>
                <Subtitle>Password</Subtitle>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter password"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleInputChange}
                />
            </InputContainer>
            <Button type="submit"><BtnText>Log in</BtnText><AddIcon width="32" height="32" /></Button>
        </ContactForm>
    );
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (user) => dispatch(authUserOperations.loginUser(user))
})

export default connect( mapDispatchToProps)(RegisterForm);