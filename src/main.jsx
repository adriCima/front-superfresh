import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './routes/Home'
import Cart from './routes/cart';
import Checkout from './routes/Checkout';
import Login from './routes/Login';
import Categories from './routes/Categories';
import Products from './routes/products/products';
import ProductDetails from './routes/products/ProductDetails';


const router = createBrowserRouter([
  { path: '/', element:  <Home />},
  { path: 'cart', element: <Cart />},
  { path: 'checkout', element: <Checkout /> },  
  { path: 'login', element: <Login /> },
  { path: 'categories', element: <Categories /> },
  { path: 'products', element: <Products /> },
  { path: 'products/:productid', element: <ProductDetails /> }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
