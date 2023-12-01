import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
export const ProductsContext = createContext([]);
export const CartsContext = createContext([]);
function App() {
  const { products, carts } = useLoaderData();
  const [cart, setCart] = useState(carts);
  return (
    <>
      <ProductsContext.Provider value={products}>
        <CartsContext.Provider value={[cart, setCart]}>
          <Navbar></Navbar>
          <div className="min-h-[calc(100vh-160px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
          <Toaster></Toaster>
        </CartsContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
