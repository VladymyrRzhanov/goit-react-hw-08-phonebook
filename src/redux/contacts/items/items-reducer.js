// import * as contactsActions from "./items-actions";
import { fetchContacts, addContact, deleteContact, editContact } from './items-operations';
import { createReducer } from '@reduxjs/toolkit';

export const itemsReducer = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    
    [addContact.fulfilled]: ((state, { _, payload }) => [payload, ...state]),
    
    [deleteContact.fulfilled]: (state, { _, payload }) => (state.filter(contact => contact.id !== payload)),

    [editContact.fulfilled]: (state, { _, payload }) => (state.map(contact=> contact.id === payload.id ? payload : contact))
});

export const errorReducer = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [addContact.rejected]: (_, { payload }) => payload,
    [deleteContact.rejected]: (_, { payload }) => payload,
    
    [fetchContacts.pending]: () => null,
    [addContact.pending]: () => null,
    [deleteContact.pending]: () => null,
})