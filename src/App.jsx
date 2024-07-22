import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './modules/mainPage/MainPage';
import AuthPage from './modules/auth/AuthPage';
function App() {
  return (
    <div className="wrapper-content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Auth" element={<AuthPage />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
