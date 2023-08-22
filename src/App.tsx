import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './components/ProductDetails';
import Layout from './components/Layout';
import Checkout from './pages/Checkout';
import { Product } from './types';

function App() {
  const [shoppingCartProducts, setShoppingCartProducts] = useState<Product[] >([]);

  const emptyCart = () => {
    localStorage.clear();
    setShoppingCartProducts([]);
  };

  const updateShoppingCartProducts = (newProducts: Product | Product[]) => {
    if (Array.isArray(newProducts)) {
      setShoppingCartProducts(newProducts);
    } else {
      setShoppingCartProducts([...shoppingCartProducts, newProducts]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route
          path="/carrinho"
          element={ <ShoppingCartPage
            shoppingCartProducts={ shoppingCartProducts }
            setShoppingCartProducts={ updateShoppingCartProducts }
          /> }
        />
        <Route path="/product/:id" element={ <ProductDetails /> } />
        <Route
          path="/checkout"
          element={ <Checkout
            shoppingCartProducts={ shoppingCartProducts }
            emptyCart={ emptyCart }
          /> }
        />
      </Route>
    </Routes>
  );
}

export default App;
