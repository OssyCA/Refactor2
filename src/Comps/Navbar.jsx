import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <header>
        <Link to="/" className="logo">
          <h2>
            Portfo<span>lio</span>
          </h2>
        </Link>
        <nav>
          <ul className={isNavOpen ? "open" : ""}>
            {" "}
            {/* Add class "open" to ul when isNavOpen is true */}
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <p className="toggle-input" onClick={() => setIsNavOpen(!isNavOpen)}>
          ✅
        </p>
      </header>
    </>
  );
};

export default Navbar;
