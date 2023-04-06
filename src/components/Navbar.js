import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-dark"
      data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link">
              <Link
                className={`nav-link ${
                  props.activeCategory === undefined ? "active" : ""
                }`}
                aria-current="page"
                to="/top-headlines">
                Top Headlines
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "science" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "business" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "entertainment" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "general" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "health" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "sports" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li
              className={`nav-link ${
                props.activeCategory === "technology" ? "active" : ""
              }`}>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
