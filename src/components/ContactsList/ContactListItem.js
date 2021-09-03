import React from 'react';
import PropTypes from 'prop-types';
// import s from './ContactListItem.module.css';
import { Item, ItemContainer, Button, Data } from "./styles";

const ContactListItem = ({ onDelete, name, number }) => (
  <Item>
    <ItemContainer>
      <Button type="button" onClick={onDelete}>Delete X</Button>
      <Data>
        <span>{name}:</span>
        <span>{number}</span>
      </Data>
    </ItemContainer>
  </Item>
);

ContactListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
