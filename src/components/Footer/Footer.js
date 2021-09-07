import Container from "../Container";
import { CustomFooter, Copyright } from "./styles";

const Footer = () => (
    <CustomFooter>
        <Container>
            <Copyright>&copy; 2021 All rights reserved</Copyright>
        </Container>
    </CustomFooter>
);

export default Footer;