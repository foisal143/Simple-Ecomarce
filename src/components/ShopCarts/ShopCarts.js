import React from 'react';

const ShopCarts = ({ product, handleAddToCart }) => {
  const { id, name, price, category, picture } = product;
  return (
    <div className="shadow-md p-3 rounded-md">
      <img className="rounded-md md:h-80 mx-auto" src={picture} alt="" />

      <div className="md:w-11/12 mx-auto ms-5">
        <h2 className="text-xl font-semibold mt-5">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="md:w-10/12 mx-auto ">
        <button
          onClick={() => handleAddToCart(product)}
          className="btn-primary w-full"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCarts;
