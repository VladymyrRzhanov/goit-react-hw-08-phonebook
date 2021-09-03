import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Slice = styled(CSSTransition)(
{
enter: {
  opacity: 0,
  transform: translateX(-100%)
},
enterActive: {
  opacity: 1,
  transform: translateX(0),
  transition: 250ms ease-in-out,
},

exit: {
  opacity: 1,
  transform: translateX(0),
},
exitActive: {
  opacity: 0,
  transform: translateX(-100%),
  transition: 250ms ease-in-out,
}

}

);

// export default Slice