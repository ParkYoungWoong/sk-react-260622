import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'

// https:heropy.dev/#/signin
// https:heropy.dev/signin

const router = createBrowserRouter([
  {
    path: '/', // http://localhost:5173/
    element: <Home />
  },
  {
    path: '/about', // http://localhost:5173/about
    element: <About />
  },
  {
    path: '/signin', // http://localhost:5173/
    element: <SignIn />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
