import styled from 'styled-components';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const Logout = styled(ExitToAppOutlinedIcon)`
color: rgb(51 147 216);
cursor: pointer;
`;

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Button = styled.button`
margin-left: 10px;
    cursor: pointer;
    background-color: rgb(51 147 216);
    color: rgb(255 255 255);
    padding: 7px 12px;
    border-radius: 5px;
    font-weight: 700;
    border: none;
    font-size: 16px;
`;

export const Image = styled.img`
width: 40px;
height: 40px;
margin-right: 10px;
`;

export const WelcomeText = styled.p`
font-weight: 500;
font-size: 16px;
margin-right: 10px;
`