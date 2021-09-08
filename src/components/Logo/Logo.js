import { Title, Icon, LogoContainer, CustomLink,LogoText } from "./styles";

const Logo = () => {
    return (
        <Title>
            <CustomLink to='/'>
                <LogoContainer>
                    <Icon />
                    <LogoText>
                        Home
                    </LogoText>
                </LogoContainer>
            </CustomLink>
        </Title>
    );
};

export default Logo;