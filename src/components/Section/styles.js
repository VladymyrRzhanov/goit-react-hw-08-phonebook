import background from "images/back4.jpg";
import styled from 'styled-components';

export const MainSection = styled.section`
    margin: 0 auto;
    // height: 100vh;
    background-color: rgb(255 255 255);
    text-align: center;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
  width: 1200px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255 255 255);
`;