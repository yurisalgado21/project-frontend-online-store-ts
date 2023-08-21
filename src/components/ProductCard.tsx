import { Link } from 'react-router-dom';
import { Product } from '../types';

type ProductCartProps = {
  product: Product,
};

function ProductCard({ product }: ProductCartProps) {
  const { title, thumbnail, price, id } = product;

  const handleAddProductToShoppingCart = () => {
    const shoppingCartProducts = localStorage.getItem('shoppingCartProducts');
    if (shoppingCartProducts) {
      localStorage.setItem('shoppingCartProducts', JSON.stringify(
        [...JSON.parse(shoppingCartProducts), product],
      ));
    } else {
      localStorage.setItem('shoppingCartProducts', JSON.stringify(
        [product],
      ));
    }
  };

  return (
    <div data-testid="product">
      <Link
        data-testid="product-detail-link"
        to={ `/product/${id}` }
      >
        <p>{title}</p>
      </Link>
      <img src={ thumbnail } alt={ title } />
      <p>{price}</p>
      <button
        data-testid="product-add-to-cart"
        onClick={ handleAddProductToShoppingCart }
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCard;
