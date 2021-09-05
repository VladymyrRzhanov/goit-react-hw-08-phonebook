import { NavLink } from 'react-router-dom';
import { List,Item } from "./styles";

const Auth = () => (
    <List>
        <Item>
            <NavLink to='/register'>
                Register
            </NavLink>
        
        </Item>
        <Item>
            <NavLink to='/login'>
                Login
            </NavLink>
        </Item>
    </List>
);

export default Auth;