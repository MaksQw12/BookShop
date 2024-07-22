import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <div className="content-header">
      <div className="content-header-block">
        <div className="content-element-logo">
          <img src={Logo} alt="" className="element-image" />
          <Link className="element-link">Магазин книг</Link>
        </div>

        <div className="content-element-btn">
          <Link to="/" className="element-link">
            Главная
          </Link>
          <Link className="element-link">Каталог</Link>
          <Link className="element-link">Заказы</Link>
        </div>

        <div className="content-element-auth">
          <Link to="/Auth" className="element-link">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
