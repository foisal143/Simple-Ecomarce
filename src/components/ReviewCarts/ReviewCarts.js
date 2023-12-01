import React from 'react';
import { CartsContext } from '../../App';
import { useContext } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import { removeAllCarts, removeSingleCart } from '../../utilitys/loacalData';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const ReviewCarts = () => {
  const [carts, setCarts] = useContext(CartsContext);
  let total = 0;
  for (const product of carts) {
    total = product.price + total * product.quantity;
  }
  const handleRemove = id => {
    const restCarts = carts.filter(cp => cp.id !== id);
    setCarts(restCarts);
    removeSingleCart(id);
    toast.error('Product removed!');
  };
  const allCartsClear = () => {
    setCarts([]);
    removeAllCarts();
    toast.success('All Delete done');
  };
  return (
    <div className="bg-slate-100 p-5 min-h-[calc(100vh-160px)]">
      <div>
        {carts.map(cart => (
          <ReviewCart
            key={cart.id}
            cart={cart}
            handleRemove={handleRemove}
          ></ReviewCart>
        ))}
      </div>
      <div className="text-end lg:w-1/2 mx-auto">
        <h4 className="text-xl">Total Amount: ${total}</h4>
        <p className="text-slate-500">Not including taxes and shipping costs</p>
        <div className="my-5">
          {carts.length > 0 ? (
            <button onClick={allCartsClear} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back To Shop</button>
            </Link>
          )}
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarts;
