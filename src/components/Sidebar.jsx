import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Sign In' },
  { to: '/dashboard', label: 'Dashboard' }
]

export default function Sidebar() {
  return (
    <>
      {navigations.map(function (nav) {
        return (
          <div key={nav.to}>
            <NavLink
              to={nav.to}
              className={function (state) {
                return state.isActive ? 'text-red-500' : ''
              }}>
              {nav.label}
            </NavLink>
          </div>
        )
      })}
    </>
  )
}
