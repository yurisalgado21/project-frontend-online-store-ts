import React from 'react';
import { Link } from 'react-router-dom';

function ProductListingPage() {
  return (
    <div className="product-listing">
      <input type="text" placeholder="Buscar produtos" />
      <div className="product-list">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
      <Link to="/carrinho" data-testid="shopping-cart-button">
        Ir para o Carrinho
      </Link>
    </div>
  );
}

export default ProductListingPage;
