// import Herobackground from "images/back2.jpg";
import styled from 'styled-components';
import background from "images/back4.jpg";

export const HeroContainer = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 200px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

export const Title = styled.h1`
font-size: 4em;
margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
font-size: 2em;
`