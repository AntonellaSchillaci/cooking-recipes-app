import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Cooking Recipes</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}>Preferiti</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
