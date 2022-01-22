import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div>
          <p>
            Tiffany Bouchard
          </p>
        </div>
        <div>
          <ul>
            <li>
              <Link className="navbar-item" to="/about">
                Info
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/blog">
                Writing
              </Link>
            </li>
            <li>
              <a className="navbar-item" href="mailto:tiffnbouchard@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
