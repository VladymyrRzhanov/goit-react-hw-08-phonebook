import { useSelector } from 'react-redux';
import { getIsLoggeIn } from "redux/authUser/authUser-selector";
import { List, Item, CustomLink } from './styles';


const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggeIn)
    return (
        <nav>
            <List>
                <Item>
                    {isLoggedIn && (
                        <CustomLink to='/contacts' exact>
                            Phonebook
                        </CustomLink>)
                    }
                </Item>
            </List>
        </nav>
    );
};

export default Navigation;