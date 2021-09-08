import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const Container = styled.div`
  width: 70%;
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
    background-color: rgb(51 147 216);    
    transform: scaleX(0);
    transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const BtnDelete = styled(DeleteForeverIcon)`
  position: absolute;
  right: 20px;
  cursor: pointer;
  color: rgb(51 147 216);
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.2);
  }

  &:hover ~ ${Data} {
    transform: scale(1.1);
  }

  &:hover ~ ${Data}::before {
    transform: scaleX(1);
  }
`;

export const BtnEdit = styled(EditIcon)`
  position: absolute;
  right: 60px;
  color: rgb(51 147 216);
  cursor: pointer;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.2);
  }

  &:hover ~ ${Data} {
    transform: scale(1.1);
  }

  &:hover ~ ${Data}::before {
    transform: scaleX(1);
  }
`;