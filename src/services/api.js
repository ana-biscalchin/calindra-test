import axios from 'axios';

const api = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://store.omelete.com.br/autocomplete/',
});

export default api;