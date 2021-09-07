import PropTypes from 'prop-types';
import { Container } from "./styles";

const PageContainer = ({ children }) => (
        <Container>
            {children}
        </Container>
);

PageContainer.propTypes = {
    children: PropTypes.node,
}

export default Container;