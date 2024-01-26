import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './routes/Home'
import Cart from './routes/cart';


const router = createBrowserRouter([
  {
    path: '/',
    element:  <Home />
  },
  {
    path: 'cart',
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
