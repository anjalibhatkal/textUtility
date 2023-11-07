import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                  onClick={() => handleLinkClick("/")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    activeLink === "/about" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/about")}
                >
                  {props.aboutText}
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkSwitch"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="darkSwitch">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};
