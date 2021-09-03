import PropTypes from 'prop-types';
import { Container } from "./styles";

const Notification = ({alertName}) => {
    return (
        <Container>
            <h1>{alertName}</h1>
        </Container>
    )
};

Notification.propTypes = {
    alertName: PropTypes.string.isRequired,
};

export default Notification;