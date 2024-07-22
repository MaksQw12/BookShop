import './mainPage.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Routes, Route } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className="wrapper-content-mainPage">
      <Header />

      <Routes>
        <Route />
        <Route></Route>
        <Route></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default MainPage;
