import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';



export const Search = styled(SearchIcon)`
  position: absolute;
  color: rgb(154 154 154);
  width: 50px;
  bottom: 50%;
  transform: translate(50%, 50%);
  right: 20px;
`;

export const Input = styled(TextField)`
&:visited ~ ${Search} {
    fill: rgb(51 147 216);
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 600px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

// export const Input = styled.input`
//   width: 300px;
//   padding: 10px 20px;
//   font-size: 16px;
//   border-radius: 5px;
// `;