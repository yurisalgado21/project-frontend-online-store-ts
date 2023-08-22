import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, FormValues } from '../../types';

type CheckoutProps = {
  shoppingCartProducts: Product[];
  emptyCart: () => void
};

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  endereço: '',
};

function Checkout({ shoppingCartProducts, emptyCart }: CheckoutProps) {
  const [formInfo, setFormInfo] = useState<FormValues>(INITIAL_STATE);
  const { nome, email, cpf, telefone, cep, endereço, pagamento } = formInfo;
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nome
      || !email
      || !cpf
      || !telefone
      || !cep
      || !endereço
      || !pagamento) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      emptyCart();
      navigate('/');
    }
  };

  return (
    <div>
      <div>
        <h2>Resumo de sua compra:</h2>
        {shoppingCartProducts.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              {product.title}
            </p>
            <p>
              <p>{`R$ ${product.price.toFixed(2)}`}</p>
            </p>
          </div>
        ))}
        <div />
      </div>
      <div>
        <form onSubmit={ onSubmit }>
          <label htmlFor="nome">
            <input
              id="nome"
              placeholder="Nome"
              type="text"
              name="nome"
              data-testid="checkout-fullname"
              onChange={ onChange }
              value={ nome }
            />
          </label>

          <label htmlFor="email">
            <input
              id="email"
              placeholder="E-mail"
              type="email"
              name="email"
              data-testid="checkout-email"
              onChange={ onChange }
              value={ email }
            />
          </label>

          <label htmlFor="cpf">
            <input
              id="cpf"
              placeholder="CPF"
              type="text"
              name="cpf"
              data-testid="checkout-cpf"
              onChange={ onChange }
              value={ cpf }
            />
          </label>

          <label htmlFor="telefone">
            <input
              id="telefone"
              placeholder="Telefone"
              type="text"
              name="telefone"
              data-testid="checkout-phone"
              onChange={ onChange }
              value={ telefone }
            />
          </label>
          <label htmlFor="cep">
            <input
              id="cep"
              placeholder="CEP"
              type="text"
              name="cep"
              data-testid="checkout-cep"
              onChange={ onChange }
              value={ cep }
            />
          </label>
          <label htmlFor="endereço">
            <input
              id="endereço"
              placeholder="Endereço"
              type="text"
              name="endereço"
              data-testid="checkout-address"
              onChange={ onChange }
              value={ endereço }
            />
          </label>

          <h2>Forma de pagamento</h2>
          <label htmlFor="boleto">
            <input
              data-testid="ticket-payment"
              type="radio"
              name="pagamento"
              id="boleto"
              value="boleto"
              checked={ pagamento === 'boleto' }
              onChange={ onChange }
            />
            Boleto
          </label>
          <label htmlFor="visa">
            Visa
            <input
              data-testid="visa-payment"
              type="radio"
              name="pagamento"
              id="visa"
              value="visa"
              checked={ pagamento === 'visa' }
              onChange={ onChange }
            />
            Visa
          </label>
          <label htmlFor="master">
            <input
              data-testid="master-payment"
              type="radio"
              name="pagamento"
              id="master"
              value="master"
              checked={ pagamento === 'master' }
              onChange={ onChange }
            />
            Master
          </label>
          <label htmlFor="elo">

            <input
              data-testid="elo-payment"
              type="radio"
              name="pagamento"
              id="elo"
              value="elo"
              checked={ pagamento === 'elo' }
              onChange={ onChange }
            />
            Elo
          </label>

          <button
            data-testid="checkout-btn"
            type="submit"
          >
            Comprar
          </button>
          { errorMsg && <p data-testid="error-msg">Campos inválidos</p> }
        </form>
      </div>
    </div>
  );
}

export default Checkout;
