import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <NavLink to="/#">
                  <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                </NavLink>
                23 Ranking Street, New York
              </small>
              <small className="me-3 text-white-50">
                <NavLink to="/#">
                  <i className="fas fa-envelope me-2 text-secondary"></i>
                </NavLink>
                Email@Example.com
              </small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex">
              <small>Note : We help you to Grow your Business</small>
            </div>
            <div className="top-link">
              <NavLink
                to="/#"
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-facebook-f text-primary"></i>
              </NavLink>
              <NavLink
                to="/#"
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-twitter text-primary"></i>
              </NavLink>
              <NavLink
                to="/#"
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-instagram text-primary"></i>
              </NavLink>
              <NavLink
                to="/#"
                className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"
              >
                <i className="fab fa-linkedin-in text-primary"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid bg-primary sticky-top">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <NavLink to="/index.html" className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                High<span className="text-secondary">Tech</span>{" "}
              </h1>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <NavLink
                  to="/"
                  className="nav-item nav-link"
                >
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink to="/feature" className="nav-item nav-link">
                  Features
                </NavLink>
                <NavLink to="/shop" className="nav-item nav-link">
                  Shop
                </NavLink>
                <div className="nav-item dropdown">
                  <NavLink
                    to="/#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </NavLink>
                  <div className="dropdown-menu rounded">
                    {/* <NavLink to="/team" className="dropdown-item">
                      Our Team
                    </NavLink> */}
                    <NavLink to="/testimonial" className="dropdown-item">
                      Testimonials
                    </NavLink>
                    <NavLink to="/404" className="dropdown-item">
                      404 Page
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <NavLink to="/#" className="position-relative animated tada infinite">
                  <i className="fa fa-phone-alt text-white fa-2x"></i>
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}
                  >
                    <span>
                      <i className="fa fa-comment-dots text-secondary"></i>
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary">Call: + 0123 456 7890</span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4 ">
                <NavLink to="/#">
                  <i className="bi bi-search text-white fa-2x"></i>{" "}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}
