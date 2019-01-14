import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burguer-f8e0d.firebaseio.com/'
});

export default instance;