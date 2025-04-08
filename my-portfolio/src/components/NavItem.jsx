import '../styles/navbar.css';
function NavItem({ href, label, hoverColor }) {
    return (
      <li class="bg-li">
        <a
          href={href}
          className="nav-link"
          style={{ "--hover-color": hoverColor }}
        >
          {label}
        </a>
      </li>
    );
  }
  
  export default NavItem;
  