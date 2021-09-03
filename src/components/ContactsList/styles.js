import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
`;

export const Item = styled.li`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  box-shadow: 13px 13px 25px -5px rgb(34 60 80 / 30%);

  &:not(:last-child) {
  margin-bottom: 10px;
}
`;

export const ItemContainer = styled.div`
  width: 70%;
  padding: 20px 50px;
`;

export const Data = styled.div`
  position: relative;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: red;    
    transform: scaleX(0);
    transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 20px;
  /* background-image: "Cancel"; */
  /* width: 30px;
  height: 30px; */
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: contain; */
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  background-color: red;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.2);
  }

  &:hover ~ Data {
    transform: scale(1.1);
  }

  &:hover ~ Data::before {
    transform: scaleX(1);
  }
`;