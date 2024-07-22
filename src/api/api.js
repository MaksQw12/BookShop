import axios from 'axios';

export const API_URL = 'http://26.197.135.59:7172/api/';
const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
