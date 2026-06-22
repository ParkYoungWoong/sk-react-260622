import { NavLink } from 'react-router'

export default function Sidebar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </>
  )
}
