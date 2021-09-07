import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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