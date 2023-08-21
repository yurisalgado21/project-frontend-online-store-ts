import { useEffect, useState } from 'react';

import { Product } from '../../types';

function ShoppingCartPage() {
  const [shoppingCartProducts, setShoppingCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const localStorageShoppingCart = localStorage.getItem('shoppingCartProducts');
    if (localStorageShoppingCart) {
      setShoppingCartProducts(JSON.parse(localStorageShoppingCart));
    }
  }, []);

  const addProduct = () => {
    setShoppingCartProducts((prevShoppingCartProducts) => {
      [...prevShoppingCartProducts,
        
      ]
    })
  };

  const removeProduct = () => {
  };

  return (
    <div className="shopping-cart">
      <h2>Seu Carrinho de Compras</h2>
      {shoppingCartProducts
        ? shoppingCartProducts.map((product) => {
          const { title, price, id } = product;
          return (
            <p key={ id }>
              <span data-testid="shopping-cart-product-name">{title}</span>
              <span>{` - ${price}`}</span>
              <span data-testid="shopping-cart-product-quantity">{' - 1'}</span>
            </p>
          );
        })
        : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
    </div>
  );
}

export default ShoppingCartPage;
