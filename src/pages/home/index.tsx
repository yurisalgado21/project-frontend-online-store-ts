import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromQuery } from '../../services/api';
import ProductCard from '../../components/ProductCard';

import { Product } from '../../types';

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

  return (
    <>
      <aside>
        <p>Categorias:</p>
        {categories && categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor={ category.id } data-testid="category">
              <input type="radio" name="category" id={ category.id } />
              {category.name}
            </label>
          </div>
        ))}
      </aside>
      <main>
        <input
          type="text"
          data-testid="query-input"
          onChange={ handleInputChange }
          value={ query }
        />
        <button type="submit" data-testid="query-button" onClick={ handleClick }>
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="submit"
          data-testid="query-button"
          onSubmit={ handleSubmit }
        >
          Buscar
        </button>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Ir para o Carrinho
        </Link>
        {products ? products.map((product) => {
          const { id, price, title, thumbnail } = product;
          return (
            <ProductCard
              key={ id }
              price={ price }
              title={ title }
              thumbnail={ thumbnail }
            />
          );
        }) : <p>Nenhum produto foi encontrado</p>}
      </main>
    </>
  );
}
