import { useSelector } from 'react-redux';
import Navigation from "../Navigation";
import Logo from "../Logo";
import Auth from "../Auth";
import UserMenu from "../UserMenu";
import { getIsLoggeIn } from "redux/authUser/authUser-selector";
import { CSSTransition } from 'react-transition-group';
import slide from "../../transition/slide.module.css";
import { Main, Container } from "./styles";

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggeIn);
    return (
    <Main>
        <Container>
            <CSSTransition
                in={true}
                appear={true}
                classNames={slide}
                timeout={500}
            >
                <Logo />
            </CSSTransition>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <Auth />}
        </Container>
    </Main>
);
}

export default Header;