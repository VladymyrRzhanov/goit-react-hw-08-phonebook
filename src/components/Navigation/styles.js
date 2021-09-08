import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as PhonebookIcon } from "../../images/Phonebook.svg";

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
`;

export const Item = styled.li`
list-style: none;
padding: 10px;

&:not(:last-child) {
    margin-right: 30px;
}
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

&:hover {
    color: rgb(51 147 216);
    fill: rgb(51 147 216);
}
`

export const CustomLink = styled(NavLink)`
color:black;
text-decoration: none;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;

&.active {
    color: rgb(51 147 216);
}
`

export const Icon = styled(PhonebookIcon)`
width: 50px;
height: 50px;
margin-right: 20px;
color: black;
`