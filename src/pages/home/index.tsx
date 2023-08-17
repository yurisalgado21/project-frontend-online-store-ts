
import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { Link } from 'react-router-dom';

type Categorie = {
  id: string,
  name: string,
};

export default function Home() {
  const [categories, setCategories] = useState<Categorie[]>();

  useEffect(() => {
    const getCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    getCategoriesData();
  }, []);
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
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Ir para o Carrinho
        </Link>
      </main>
    </>
  );
}
