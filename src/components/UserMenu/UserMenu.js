import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/authUser/authUser-selector";
import * as authUserOperations from "redux/authUser/authUser-operations";
import { Container,Button } from "./styles";

const UserMenu = () => {
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();
    return (
    <Container>
        <p>Welcome, {userName}</p>
        <Button type="button" onClick={()=>dispatch(authUserOperations.logoutUser())}>
            Log out
        </Button>
    </Container>
);
}

export default UserMenu;