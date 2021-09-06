import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as PhonebookIcon } from "../../images/Phonebook.svg";

export const CustomLink = styled(Link)`
color:black;
text-decoration: none;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
`
export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

&:hover {
    color: rgb(51 147 216);
    fill: rgb(51 147 216);
}
`

export const Title = styled.h1`
color: black;
`;

export const Icon = styled(PhonebookIcon)`
width: 50px;
height: 50px;
margin-right: 20px;
color: black;
`
