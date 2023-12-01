import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useLoaderData } from 'react-router-dom';

function App() {
  const { products, carts } = useLoaderData();

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-160px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
