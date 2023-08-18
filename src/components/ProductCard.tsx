import { Product } from '../types';

function ProductCard({ title, thumbnail, price }: Product) {
  return (
    <div data-testid="product">
      <p>{title}</p>
      <img src={ thumbnail } alt={ title } />
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
