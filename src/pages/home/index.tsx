import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/api';

type Categorie = {
  id: string,
  name: string,
};

export default function Home() {
  const [categories, setCategories] = useState<Categorie[]>();
  const [productsList, setProductsList] = useState;
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    getCategoriesData();
  }, []);

  const handleChange = (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProductsList({
      ...productsList,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
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
          onChange={ handleChange }
        />
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
        <div className="submitted-products">
          {
            // if(productsList.length === 0) "Nenhum produto foi encontrado"
          }
        </div>
      </main>
    </>
  );
}
