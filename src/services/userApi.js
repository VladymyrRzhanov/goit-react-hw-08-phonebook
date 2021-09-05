import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getCurrentUser = async () => {
    const { data } = await axios.get('/users/current');
    return data;
}

export const createNewUser = async (regDetails) => {
    const { data } = await axios.post('/users/signup', regDetails);
    // console.log(data)
    return data;
}

export const loginUser = async (loginDetails) => {
    const { data } = await axios.post('/users/login', loginDetails);
    return data;
}

export const logoutUser = async () => {
    await axios.post('/users/logout');
}