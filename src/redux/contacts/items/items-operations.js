import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as itemsActions from "./items-actions";
import * as contactsApi from "services/contactsApi";

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async () => {
        const contacts = await contactsApi.fetchContactsApi();
        return contacts
    })

// export const fetchContacts = () => async dispatch => {
//     dispatch(itemsActions.fetchContactsRequest());
//     try {
//         const contacts = await contactsApi.fetchContactsApi();
//         dispatch(itemsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(itemsActions.fetchContactsError(error.message));
//     }
// };

export const addContact = createAsyncThunk('contacts/addContact',
    async(contact) => {
        const item = await contactsApi.addContactApi(contact);
        return item;
     })

// export const addContact = (contact) => async dispatch => {
//     dispatch(itemsActions.addContactRequest());
//     try {
//         const item = await contactsApi.addContactApi(contact);
//         console.log(item)
//         dispatch(itemsActions.addContactSuccess(item));
//     } catch (error) {
//         dispatch(itemsActions.addContactError(error.message));
//     }
// };

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id) => {
    await contactsApi.deleteContactApi(id);
    return id;
});

// export const deleteContact = (id) => async dispatch => {
//     dispatch(itemsActions.deleteContactRequest());
//     try {
//         const contact = await contactsApi.deleteContactApi(id);
//         dispatch(itemsActions.deleteContactSuccess(id));
//     } catch (error) {
//         dispatch(itemsActions.deleteContactError(error.message));
//     }
// };