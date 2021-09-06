import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/authUser/authUser-selector";
import * as authUserOperations from "redux/authUser/authUser-operations";
import { Container, Button, Image, WelcomeText } from "./styles";
import  PhoneIcon from "images/avatar2.png";


const UserMenu = () => {
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();
    const avatar = PhoneIcon;

    return (
        <Container>
            <Image src={avatar} alt="logo" />
            <WelcomeText>Welcome, {userName}</WelcomeText>
            <Button type="button" onClick={() => dispatch(authUserOperations.logoutUser())}>
                Log out
            </Button>
        </Container>
    );
}

export default UserMenu;