import background from "images/back4.jpg";
import styled from 'styled-components';

export const MainSection = styled.section`
    flex: 1 0 auto;
    background-color: rgb(255 255 255);
    text-align: center;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50px;
    padding-bottom: 50px;
`;