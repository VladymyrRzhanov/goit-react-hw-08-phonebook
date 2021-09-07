import React from 'react';
import PropTypes from 'prop-types';
import { MainSection } from "./styles";

const Section = ({children}) => (
    <MainSection>
        {children}
    </MainSection>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;