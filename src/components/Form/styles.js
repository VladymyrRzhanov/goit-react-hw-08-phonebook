import styled from 'styled-components';
import InputMask from "react-input-mask";
// import { ReactComponent as AddIcon } from '../../images/accept.svg';
// import Accept from "../../images/accept.svg";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  border: 1px solid black;
  padding: 20px;
  box-shadow: 13px 13px 25px -5px rgba(34, 60, 80, 0.3);
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
  width: 300px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: rgb(0 214 0);
  border-radius: 5px;
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