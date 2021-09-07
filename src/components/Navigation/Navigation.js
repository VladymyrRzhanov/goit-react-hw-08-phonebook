import { useSelector } from 'react-redux';
import { List, Item, CustomLink } from './styles';
import { getIsLoggeIn } from "redux/authUser/authUser-selector";


const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggeIn)
    return (
        <nav>
            <List>
                <Item>
                    <CustomLink to='/' exact>
                        Home
                    </CustomLink>
                </Item>
                <Item>
                    {isLoggedIn && (
                        <CustomLink to='/contacts' exact>
                            Contacts
                        </CustomLink>)
                    }
                </Item>
            </List>
            
            
        </nav>
    );
};

export default Navigation;