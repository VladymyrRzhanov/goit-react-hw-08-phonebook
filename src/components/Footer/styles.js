import styled from 'styled-components';

export const CustomFooter = styled.footer`
  flex: 0 0 auto;
  border-top:1px solid rgb(161 161 161 / 50%);
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: rgb(255 255 255);
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  width: 1200px;
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

export const Copyright = styled.p`
font-weight: 500;
font-size: 16px;
`;