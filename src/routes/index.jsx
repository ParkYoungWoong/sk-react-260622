import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'

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
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
