import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import AppLayout from './pages/AppLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,

      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Product />,
        },
        {
          path: '/cart',
          element: <Cart />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
