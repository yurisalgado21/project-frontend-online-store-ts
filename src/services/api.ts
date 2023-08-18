export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategory(categoryId:string) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const data = await response.json();
  return data;
}

export async function getProductsFromQuery(query:string) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();
  return data;
}

export async function getProductById(id: string) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
}
