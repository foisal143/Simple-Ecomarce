import React from 'react';
import { CartsContext, ProductsContext } from '../../App';
import { useContext } from 'react';
import ShopCarts from '../ShopCarts/ShopCarts';
import { addToLocalStorage } from '../../utilitys/loacalData';
import toast from 'react-hot-toast';
const Shop = () => {
  const products = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartsContext);
  const handleAddToCart = product => {
    let newCarts = [];
    const exists = cart.find(cp => cp.id === product.id);
    if (exists) {
      exists.quantity = exists.quantity + 1;

      const rest = cart.filter(cp => cp.id !== product.id);
      newCarts = [...rest, exists];
    } else {
      product.quantity = 1;

      newCarts = [...cart, product];
    }
    setCart(newCarts);
    addToLocalStorage(product.id);
    toast.success('product added !');
  };
  return (
    <div className="my-12 px-5 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {products.map(product => (
        <ShopCarts
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
        ></ShopCarts>
      ))}
    </div>
  );
};

export default Shop;
