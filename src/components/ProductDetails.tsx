import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../types';
import { getProductById } from '../services/api';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getById = async () => {
      const dataProduct = await getProductById(id as string);
      setProduct(dataProduct);
    };
    getById();
  }, []);

  const handleClick = () => {
    navigate('/carrinho');
  };

  return (
    <div>
      <li>
        <p data-testid="product-detail-name">{product?.title}</p>
        <img
          data-testid="product-detail-image"
          src={ product?.thumbnail }
          alt="product-foto"
        />
        <p data-testid="product-detail-price">{product?.price}</p>
      </li>
      <button
        data-testid="shopping-cart-button"
        onClick={ handleClick }
      >
        Ir para o carrinho de compras

      </button>
    </div>
  );
}
