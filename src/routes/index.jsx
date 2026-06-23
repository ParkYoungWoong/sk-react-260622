import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Stores from './pages/Stores'
import StoreDetails from './pages/StoreDetails'

// https:heropy.dev/#/signin
// https:heropy.dev/signin

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/', // http://localhost:5173/
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: <About />
      },
      {
        path: '/signin', // http://localhost:5173/signin
        element: <SignIn />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/stores', // http://localhost:5173/stores
        element: <Stores />
      },
      {
        path: '/stores/:storeId', // http://localhost:5173/stores/41
        element: <StoreDetails />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
