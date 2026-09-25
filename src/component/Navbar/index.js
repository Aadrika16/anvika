import { useState } from "react";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* LOGO */}
      <a
        className="navbar__brand"
        href="#home"
        aria-label="Anvika Fine Jewellery home"
        onClick={closeMenu}
      >
        <img
          src="/logo/logo3.svg"
          alt="Anvika Fine Jewellery"
        />
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
      </button>

      {/* NAVIGATION */}
      <nav
        className={`navbar__links ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        <a
          className="is-active"
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#collections"
          onClick={closeMenu}
        >
          Collections
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About Us
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </a>
      </nav>

      {/* ACTIONS */}
      <div className="navbar__actions">
        <a
          className="navbar__button navbar__button--outline"
          href="#contact"
        >
          DM to Order
        </a>

        <a
          className="navbar__button navbar__button--solid"
          href="#store"
        >
          Visit Our Store
        </a>
      </div>
    </header>
  );
}

export default Navbar;