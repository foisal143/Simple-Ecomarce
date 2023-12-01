import { getLocalValue } from '../utilitys/loacalData';

const productsLoader = async () => {
  const productsJson = await fetch('products.json');
  const products = await productsJson.json();
  const localData = getLocalValue();
  const carts = [];
  for (const id in localData) {
    const product = products.find(product => product.id === id);
    if (product) {
      product.quantity = product.quantity + 1;
      carts.push(product);
    } else {
      product.quantity = 1;
      carts.push(product);
    }
  }
  return { carts, products };
};

export default productsLoader;
