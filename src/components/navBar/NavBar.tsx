import { navRoutes } from "@/router/routes";
import { NavLink } from "react-router";
import './styles.scss';

export default function NavBar() {
  const baseClass = 'navigation-bar'
  return (
    <nav className={baseClass}>
      {navRoutes.map((route) => (
        <NavLink
          key={route.to}
          to={route.to}
          className={({ isActive }) => (isActive ? 'active-link' : '')}>
          {route.title}
        </NavLink>
      ))}
    </nav>
  )
}

// export default function NavBar() {
//   return (
//     <nav>
//       <NavLink
//         to='/home'
//         className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Home |
//       </NavLink>
//       <NavLink
//         to='/About'
//         className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         About |
//       </NavLink>
//       <NavLink
//         to='/Contacts'
//         className={({ isActive }) => (isActive ? 'active-link' : '')}>
//         Contacts
//       </NavLink>
//     </nav>
//   )
// }

