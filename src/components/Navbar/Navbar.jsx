import { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  return (
    <header className="navbar">

      <div className="container navbar__wrapper">

        <Link
          to="/"
          className="navbar__logo"
        >
          <img
            src="/logo.png"
            alt="SEVA Health Logo"
          />
        </Link>

        <nav
          className={`navbar__menu ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/imanage">
            iManage
          </Link>

          <div
            className="navbar__dropdown"
            onMouseEnter={() =>
              setServicesOpen(true)
            }
            onMouseLeave={() =>
              setServicesOpen(false)
            }
          >

            <button
              className="navbar__dropdown-btn"
            >
              Services
            </button>

            {servicesOpen && (

              <div className="navbar__dropdown-menu">

                <Link
                  to="/services/residential-care"
                >
                  Residential Care
                </Link>

                <Link
                  to="/services/day-program"
                >
                  Day Program Services
                </Link>

                <Link
                  to="/services/in-home-support"
                >
                  In-Home Support
                </Link>

                <Link
                  to="/services/rehabilitation"
                >
                  Rehabilitation
                </Link>

                <Link
                  to="/services/respite-care"
                >
                  Respite Care
                </Link>

              </div>

            )}

          </div>

        </nav>

        <Link
          to="/contact"
          className="navbar__cta"
        >
          Contact
        </Link>

        <button
          className="navbar__toggle"
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >
          ☰
        </button>

      </div>

    </header>
  );
}