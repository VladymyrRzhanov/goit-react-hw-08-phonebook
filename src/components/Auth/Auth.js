import { NavLink } from 'react-router-dom';
import { List,Item,CustomLink } from "./styles";

const Auth = () => (
    <List>
        <Item>
            <CustomLink to='/register' exact>
                Register
            </CustomLink>
        
        </Item>
        <Item>
            <CustomLink to='/login' exact>
                Login
            </CustomLink>
        </Item>
    </List>
);

export default Auth;