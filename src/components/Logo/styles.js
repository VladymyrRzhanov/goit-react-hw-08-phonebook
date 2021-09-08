import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as PhonebookIcon } from "../../images/Phonebook.svg";

export const CustomLink = styled(Link)`
color:black;
text-decoration: none;
font-weight: 700;
font-size: 14px;
text-transform: uppercase;

@media screen and (min-width: 768px) {
    font-size: 20px;
  }
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

export const LogoText = styled.p`
display: none;
@media screen and (min-width: 768px) {
    display: inline;
  }
`;

export const Title = styled.h1`
color: black;
`;

export const Icon = styled(PhonebookIcon)`
width: 30px;
height: 30px;
color: black;
@media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right:20px;
  }
`;
