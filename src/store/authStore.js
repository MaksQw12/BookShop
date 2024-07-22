import { makeAutoObservable } from 'mobx';
import AuthService from '../services/authService';

export default class AuthStore {
  userId = localStorage.getItem('userId') || null;
  constructor() {
    makeAutoObservable(this);
  }

  async postAuth(login, password) {
    try {
      const response = await AuthService.postAuth(login, password);
      // if (response.status == 200) {
      //   localStorage.setItem('userId', response.data.id);
      // }
      console.log(response.status);
    } catch {}
  }
}
