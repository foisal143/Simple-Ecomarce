import React from 'react';
import { TrashIcon, TruckIcon } from '@heroicons/react/24/solid';
const ReviewCart = ({ cart, handleRemove }) => {
  const { id, name, price, quantity, picture } = cart;
  const total = price * quantity;
  return (
    <div className="lg:w-1/2 p-2  my-5 shadow-md rounded-md mx-auto  ">
      <div className="flex ">
        <img className="w-24  h-24 rounded-md" src={picture} alt="" />
        <div className="flex flex-grow flex-col justify-between items-start">
          <div className="flex flex-grow w-full  pe-5 justify-between items-center">
            <div className="ms-5 ">
              <h3>{name}</h3>
              <p>Quantity: {quantity}</p>
            </div>
            <div className="">
              <p>${price}</p>
              <p>Total: ${total}</p>
            </div>
          </div>
          <button
            className="ms-5 flex items-center"
            onClick={() => handleRemove(id)}
          >
            <TrashIcon className="w-4 h-4 me-1" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
