import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw-proffy-deploy.herokuapp.com/',
});

export default api;