import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/carrinho" element={ <ShoppingCartPage /> } />
    </Routes>
  );
}

export default App;
