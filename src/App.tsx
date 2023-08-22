import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './components/ProductDetails';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/carrinho" element={ <ShoppingCartPage /> } />
        <Route path="/product/:id" element={ <ProductDetails /> } />
      </Route>
    </Routes>
  );
}

export default App;
