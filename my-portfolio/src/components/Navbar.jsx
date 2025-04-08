// src/components/Navbar.jsx
import '../styles/navbar.css';
import NavItem from './NavItem.jsx';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyPortfolio</h1>
      <ul className="nav-links">
        <NavItem label="About" href="#about" hoverColor="#DB5461" />
        <NavItem label="Projects" href="#projects" hoverColor="#FEC9F1" />
        <NavItem label="Technology" href="#skills" hoverColor="#6EA4BF" />
        <NavItem label="Contact" href="#contact" hoverColor="#F3B700" />
      </ul>
    </nav>
  );
}

export default Navbar;
