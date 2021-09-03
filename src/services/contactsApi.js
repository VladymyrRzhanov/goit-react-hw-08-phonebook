import axios from 'axios';

export const fetchContactsApi = async () => {
    const { data } = await axios.get('http://localhost:4040/contacts');
    return data;
}

export const addContactApi = async (contact) => {
    const { data } = await axios.post('http://localhost:4040/contacts', contact);
    return data;
}

export const deleteContactApi = async (id) => {
    const { data } = await axios.delete(`http://localhost:4040/contacts/${id}`);
    return data;
}