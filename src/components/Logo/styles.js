import styled from 'styled-components';
import { ReactComponent as PhonebookIcon } from "../../images/Phonebook.svg";

export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
color: black;
`;

export const Icon = styled(PhonebookIcon)`
width: 50px;
height: 50px;
margin-right: 20px;
`