import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">
          <h1>Car Reviews App</h1>
        </Link>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cars/new"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
          >
            Add Car
          </NavLink>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        © {new Date().getFullYear()} Car Reviews
      </footer>
    </div>
  );
}
