import { useState } from "react";

import "./Navbar.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="navbar">

      <div className="container navbar__wrapper">

        <a
          href="/"
          className="navbar__logo"
        >
           <img src="/logo.png" alt="SEVA Health Logo" />
        </a>

        <nav
          className={`navbar__menu ${
            menuOpen ? "active" : ""
          }`}
        >
          <a href="#">
            Home
          </a>

          <a href="#">
            About Us
          </a>

          <a href="#">
            iManage
          </a>

          <a href="#">
            Services
          </a>
        </nav>

        <button
          className="navbar__cta"
        >
          Contact
        </button>

        <button
          className="navbar__toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </button>

      </div>

    </header>
  );
}