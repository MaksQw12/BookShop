import $api from '../api/api';

export default class AuthService {
  static async postAuth(login, password) {
    return await $api.post(`Users/Authorization?login=${login}&password=${password}`);
  }
}
