import Loader from 'react-loader-spinner';
import React from 'react';
import Section from "../Section";

const Spinner = () => (
  <Section>
    <Loader
      type="ThreeDots"
      color="rgb(51 147 216)"
      height={100}
      width={100}
      timeout={3000}
    />
  </Section>
);

export default Spinner;
