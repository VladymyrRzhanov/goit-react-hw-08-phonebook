import React from 'react';
import PropTypes from 'prop-types';
import { MainSection, Container } from "./styles";


const Section = ({ children }) => (
  <MainSection>
    <Container>{children}</Container>
  </MainSection>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
