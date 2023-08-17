import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <div>
      <input type="text" />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Link to="/carrinho" data-testid="shopping-cart-button">
        Ir para o Carrinho
      </Link>
    </div>
  );
}
