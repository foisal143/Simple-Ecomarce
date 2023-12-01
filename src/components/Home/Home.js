import React from 'react';
import './Home.css';
import home from './home.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="h-[calc(85vh-160px)] flex justify-center items-center bg-slate-200">
        <div className="text-center">
          <h1 className="md:text-6xl text-4xl   bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black animate-text  font-bold">
            Wellcome To BDGadegts
          </h1>
          <p className="md:w-10/12 mx-auto my-2 ">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <Link to="/shop">
            <button className="btn-primary">Shop Now</button>
          </Link>
          <Link to="/about">
            <button className="btn-outlined">Learn More</button>
          </Link>
        </div>
      </div>
      <div className=" w-10/12 mx-auto mb-12">
        <img className="w-full rounded-md -mt-32" src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
