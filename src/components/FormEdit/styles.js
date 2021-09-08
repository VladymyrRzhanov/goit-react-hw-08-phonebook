import styled from 'styled-components';
import InputMask from "react-input-mask";
import FormControl from '@material-ui/core/FormControl';

export const CustomForm = styled(FormControl)`
    width: 220px;
    margin: 10px;

@media screen and (min-width: 768px) {
    width: 430px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  border: 1px solid rgb(161 161 161 / 50%);;
  box-shadow: 13px 13px 25px -5px rgba(34, 60, 80, 0.3);

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const InputContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
`;

export const StyledInputMask = styled(InputMask)`
  width: 180px;
  position: absolute;
  bottom: 2px;
  left: 2px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
@media screen and (min-width: 768px) {
      width: 300px;
  }
  &:hover, &:focus {
    outline: none;
  }
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: rgb(51 147 216);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnText = styled.span`
  margin-right: 10px;
  font-weight: 700;
  font-size: 16px;
`;