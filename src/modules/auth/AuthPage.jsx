import { Link } from 'react-router-dom';
import { Context } from '../../main';
import { useContext, useState } from 'react';
import './authPage.css';

const AuthPage = () => {
  const { authStore } = useContext(Context);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    return await authStore.postAuth(login, password);
  };
  return (
    <div className="wrapper-content-auth">
      <div className="content-window">
        <div className="content-name">
          <h2>Авторизоватся</h2>
        </div>
        <div className="content-logIn">
          <input
            type="text"
            className="content-input-one"
            placeholder="Логин"
            value={login}
            onChange={handleSetLogin}
          />
          <input
            type="text"
            className="content-input-two"
            placeholder="Пароль"
            value={password}
            onChange={handleSetPassword}
          />
          <button className="content-btn" onClick={handleAuth}>
            Войти
          </button>
          <Link to="/" className="content-link">
            Вернутся на страницу
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
