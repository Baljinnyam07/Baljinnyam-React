import { Link } from "react-router-dom";

function NavbarMenuItem({ item }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={item.link}>
        {item.label}
      </Link>
    </li>
  );
}

export default function NavbarDropdown({ items = [], title = "" }) {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item, index) => (
            <NavbarMenuItem item={item} key={`menu-item-${index}`} />
          ))}
        </ul>
      </div>
    </>
  );
}
