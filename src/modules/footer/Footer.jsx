import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="content-footer">
      <div className="content-element">
        <div className="content-element-top">
          <div className="content-left">
            <p>
              Мы - магазин книг и продаем наш товар уже 10 лет. У нас нет конкурентов, ведь наш
              товар. Самый лучший. Мы стартовали как маленькая компания для продажи самых простых
              книг, но Сейчас у нас большой ассортимент книг как для детей, так и для взрослых. А
              так же мы. Продаем редкие книги, которые вы больше не купите нигде.
            </p>
          </div>

          <div className="content-right">
            <div className="content-element-btn-footer">
              <Link to="/" className="element-link">
                Главная
              </Link>
              <Link className="element-link">Каталог</Link>
              <Link className="element-link">Заказы</Link>
            </div>
          </div>
        </div>
        <div className="content-element-bot">© Все права защищены</div>
      </div>
    </div>
  );
};

export default Footer;
