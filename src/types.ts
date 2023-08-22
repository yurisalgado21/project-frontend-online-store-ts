export type Product = {
  id?: string,
  price: number,
  thumbnail: string,
  title: string,
  shipping: {
    free_shipping: boolean
  }
};
