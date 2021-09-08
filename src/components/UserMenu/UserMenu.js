import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/authUser/authUser-selector";
import * as authUserOperations from "redux/authUser/authUser-operations";
import { Container, Image, WelcomeText, Logout } from "./styles";
import  PhoneIcon from "images/avatar2.png";

const UserMenu = () => {
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();
    const avatar = PhoneIcon;

    return (
        <Container>
            <Image src={avatar} alt="logo" />
            <WelcomeText>Welcome, {userName}</WelcomeText>
            <Logout onClick={() => dispatch(authUserOperations.logoutUser())}/>
        </Container>
    );
}

export default UserMenu;