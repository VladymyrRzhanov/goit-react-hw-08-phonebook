import React from 'react';
import { connect } from "react-redux";
import { getFilter } from "redux/contacts/filter/filter-selector";
import { filterContacts } from "redux/contacts/filter/filter-actions";
import PropTypes from 'prop-types'
// import s from "./Filter.module.css";
import { Label, Title, Input } from "./styles";


const Filter = ({ onChange }) => (
    <Label>
        <Title>Find contacts by name:</Title>
        <Input type="text" onChange={({ target: { value } }) => onChange(value)} />
    </Label>
)

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    filter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
    onChange: filter => dispatch(filterContacts(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);