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

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
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
              {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
              Tiffany Bouchard
            </p>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
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
          </div>
      </nav>
    );
  }
};

export default Navbar;
