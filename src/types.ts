export type Product = {
  id?: string,
  price: number,
  thumbnail: string,
  title: string,
};

export type FormValues = {
  nome?: string,
  email?: string,
  cpf?: string,
  telefone?: string,
  cep?: string,
  endereço?: string,
  pagamento?: string
};
