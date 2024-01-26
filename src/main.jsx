import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './routes/Home'
import Cart from './routes/cart';
import Checkout from './routes/Checkout';


const router = createBrowserRouter([
  { path: '/', element:  <Home />},
  { path: 'cart', element: <Cart />},
  { path: 'checkout', element: <Checkout /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
