import React, { useState } from 'react';
import Modal from "../Modal";
import FormEdit from "../FormEdit";
import PropTypes from 'prop-types';
import { Item, ItemContainer, BtnDelete, BtnEdit, Data } from "./styles";

const ContactListItem = ({ onDelete, name, number, id }) => {
  const [modalShow, setModalShow] = useState(false)

  const toggleModal = () => {
        setModalShow(!modalShow);
    };
  
  return (
    <>
      {modalShow &&
        <Modal
          onClose={toggleModal}
        >
        <FormEdit userName={ name} userNumber={number} userId={id } onClose={toggleModal}/>
        </Modal>}
      <Item>
        <ItemContainer>
          <BtnDelete type="button" onClick={onDelete}>Delete X</BtnDelete>
          <BtnEdit onClick={toggleModal}/>
          <Data>
            <span>{name}:</span>
            <span>{number}</span>
          </Data>
        </ItemContainer>
      </Item>
    </>
  );
}

ContactListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;