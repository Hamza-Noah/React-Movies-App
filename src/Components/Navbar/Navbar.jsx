import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navBg}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Noxe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="tvshows">
                Tvshows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="people">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 me-end">
            <ul className="list-unstyled d-flex align-items-center">
              <li>
                <a href="#">
                  <i className="fab fa-facebook mx-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram mx-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube mx-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-spotify mx-2"></i>
                </a>
              </li>
            </ul>

            <li className="nav-item">
              <Link className="nav-link" to="login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
