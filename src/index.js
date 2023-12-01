import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import productsLoader from './Loaders/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <p>This is error page here</p>,
    loader: productsLoader,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
      },
      {
        path: 'cart',
        element: <p>cart here</p>,
      },
      {
        path: 'about',
        element: <p>about section done</p>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
