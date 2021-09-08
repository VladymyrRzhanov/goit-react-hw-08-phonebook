import { Title, Icon, LogoContainer, CustomLink } from "./styles";

const Logo = () => {
    return (
        <Title>
            <CustomLink to='/'>
                <LogoContainer>
                    <Icon />
                    Home
                </LogoContainer>
            </CustomLink>
        </Title>
    );
};

export default Logo;