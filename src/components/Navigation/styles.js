import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(NavLink)`
color:black;
text-decoration: none;
padding: 10px;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;

&.active {
    color: rgb(51 147 216);
}
`