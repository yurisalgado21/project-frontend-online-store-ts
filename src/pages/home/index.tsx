import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  getCategories,
  getProductsFromCategory,
  getProductsFromQuery,
} from '../../services/api';
import ProductCard from '../../components/ProductCard';

import { Product } from '../../types';
import styles from './home.module.css';
import buttonSearch from '../../assets/Vector (1).svg';

type Categorie = {
  id: string,
  name: string,
};

export default function Home() {
  const [categories, setCategories] = useState<Categorie[]>();
  const [query, setQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const getCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    getCategoriesData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = async () => {
    const productsData = await getProductsFromQuery(query as string);
    setProducts(productsData.results);
  };

  const handleCategoryClick = async (category: string) => {
    const productsData = await getProductsFromCategory(category as string);
    setProducts(productsData.results);
  };

  return (
    <>
      <aside className={ styles.aside }>
        <p className={ styles.title }>Categorias:</p>
        <hr />
        {categories && categories.map((category) => (
          <div key={ category.id }>
            <label
              className={ styles.category }
              htmlFor={ category.id }
              data-testid="category"
            >
              <input
                type="radio"
                name="category"
                id={ category.id }
                onClick={ () => handleCategoryClick(category.id) }
              />
              {category.name}
            </label>
          </div>
        ))}
      </aside>
      <main className={ styles.container }>
        <div className={ styles['container-top'] }>
          <input
            className={ styles.input }
            type="text"
            data-testid="query-input"
            placeholder="Digite o que você busca"
            onChange={ handleInputChange }
            value={ query }
          />
          <button type="submit" data-testid="query-button" onClick={ handleClick }>
            <img
              className={ styles.buttonSearch }
              src={ buttonSearch }
              alt="button-search"
            />
          </button>
          <Link
            className={ styles.link }
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            <ShoppingCartIcon />
          </Link>
        </div>
        <div className={ styles['container-bottom'] }>
          <p className={ styles.paragraph } data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {products ? products.map((product) => {
            const { id } = product;
            return (
              <ProductCard
                key={ id }
                product={ product }
              />
            );
          }) : <p className={ styles.paragraphNot }>Nenhum produto foi encontrado</p>}
        </div>
      </main>
    </>
  );
}
