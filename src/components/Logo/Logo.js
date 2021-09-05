import { Link } from 'react-router-dom';
import { Title, Icon, LogoContainer } from "./styles";

const Logo = () => (
    <Title>
        <Link to='/'>
            <LogoContainer>
                <Icon />
                Phonebook
            </LogoContainer>
        </Link>
    </Title>
);

export default Logo;