import { Product } from '../types';

type ProductCartProps = {
  product: Product,
};

function ProductCard({ product }: ProductCartProps) {
  const { title, thumbnail, price } = product;
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
      <p>{title}</p>
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
