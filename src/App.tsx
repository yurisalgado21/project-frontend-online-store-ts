import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/carrinho" element={ <ShoppingCartPage /> } />
      <Route path="/product/:id" element={ <ProductDetails /> } />
    </Routes>
  );
}

export default App;
