import React from 'react';

function ShoppingCartPage() {
  return (
    <div className="shopping-cart">
      <h2>Seu Carrinho de Compras</h2>
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    </div>
  );
}

export default ShoppingCartPage;
