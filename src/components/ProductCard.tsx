import { Link } from 'react-router-dom';
import { Product } from '../types';

function ProductCard({ id, title, thumbnail, price }: Product) {
  return (
    <div data-testid="product">
      <Link
        data-testid="product-detail-link"
        to={ `/product/${id}` }
      >
        <p>{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
