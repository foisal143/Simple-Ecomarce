import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import MyModal from './components/Modal/Modal';
import Spiner from './components/Spiner/Spiner';
export const ProductsContext = createContext([]);
export const CartsContext = createContext([]);
function App() {
  const navigation = useNavigation();
  const { products, carts } = useLoaderData();
  const [cart, setCart] = useState(carts);
  const [isOpen, setIsOpen] = useState(false);
  const sesionData = sessionStorage.getItem('isExist');
  if (cart.length && sesionData !== 'true') {
    setIsOpen(true);
    sessionStorage.setItem('isExist', 'true');
  }
  if (navigation.state === 'loading') {
    return <Spiner></Spiner>;
  }
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
          <MyModal isOpen={isOpen} setIsOpen={setIsOpen}></MyModal>
        </CartsContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
