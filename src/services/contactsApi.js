import axios from 'axios';

// axios.defaults.baseURL='http://localhost:4040/contacts'

export const fetchContactsApi = async () => {
    const { data } = await axios.get('/contacts');
    return data;
}

export const addContactApi = async (contact) => {
    const { data } = await axios.post('/contacts', contact);
    return data;
}

export const deleteContactApi = async (contactId) => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
}