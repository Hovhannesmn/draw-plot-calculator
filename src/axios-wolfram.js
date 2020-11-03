import axios from 'axios';

const env = process.env.NODE_ENV;
const baseURL = env === 'production' ? 'https://wolfram-proxy.herokuapp.com/v1' : '/v1';

const instance = axios.create({
    baseURL,
});

export default instance;