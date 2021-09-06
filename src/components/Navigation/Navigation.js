import { useSelector } from 'react-redux';
import { CustomLink } from './styles';
import { getIsLoggeIn } from "redux/authUser/authUser-selector";


const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggeIn)
    return (
        <nav>
            <CustomLink to='/' exact>
                Home
            </CustomLink>
            {isLoggedIn && (
                <CustomLink to='/contacts' exact>
                    Contacts
                </CustomLink>)
            }
        </nav>
    );
};

export default Navigation;