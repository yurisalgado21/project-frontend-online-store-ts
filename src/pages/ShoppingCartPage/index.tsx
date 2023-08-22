import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types';

type ShoppingCartPageProps = {
  shoppingCartProducts: Product[];
  setShoppingCartProducts: (newProducts: Product | Product[]) => void;
};

function ShoppingCartPage({ shoppingCartProducts, setShoppingCartProducts }
: ShoppingCartPageProps) {
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const localStorageShoppingCart = localStorage.getItem('shoppingCartProducts');
    if (localStorageShoppingCart) {
      setShoppingCartProducts(JSON.parse(localStorageShoppingCart));
    }
  }, []);

  const handleIncreaseCount = (productId: string) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
  };

  const handleDecreaseCount = (productId: string) => {
    if (productCounts[productId] > 1) {
      setProductCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  const handleRemove = (event: any): void => {
    const newShoppingCartProducts = shoppingCartProducts
      .filter((product) => product.id !== event.target.id);
    setShoppingCartProducts(newShoppingCartProducts);
  };

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cartProduct');
    if (localStorageCart) {
      const saveCartProduct = JSON.parse(localStorageCart) || [];
      setShoppingCartProducts(saveCartProduct);
    }
  }, []);

  const navigate = useNavigate();
  const checkoutPage = async () => {
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart">
      <h2>Seu Carrinho de Compras</h2>
      {shoppingCartProducts.length > 0 ? (
        <div>
          {shoppingCartProducts.map((product) => {
            const { title, price, id } = product;
            const productCount = productCounts[id as string] || 1;

            return (
              <div key={ id }>
                <button
                  data-testid="remove-product"
                  id={ product.id }
                  onClick={ (event) => handleRemove(event) }
                >
                  X
                </button>
                <span data-testid="shopping-cart-product-name">{title}</span>
                <span>{` - R$${price}`}</span>
                <span data-testid="shopping-cart-product-quantity">
                  {` - ${productCount}`}
                </span>
                <button
                  data-testid="product-decrease-quantity"
                  onClick={ () => handleDecreaseCount(id as string) }
                >
                  -
                </button>
                <button
                  data-testid="product-increase-quantity"
                  onClick={ () => handleIncreaseCount(id as string) }
                >
                  +
                </button>
              </div>

            );
          })}
          <button
            data-testid="checkout-products"
            onClick={ () => checkoutPage() }
          >
            Finalizar Compra
          </button>
        </div>
      ) : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </div>
  );
}

export default ShoppingCartPage;
