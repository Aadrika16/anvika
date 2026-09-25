import "./index.css";

const links = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["About Us", "#about"],
  ["Contact", "#contact"],
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* BRAND */}
        <div className="footer__brand-section">
          <a
            href="#home"
            className="footer__brand"
            aria-label="Anvika Fine Jewellery Home"
          >
            <img
              src="/logo/logo3.svg"
              alt="Anvika Fine Jewellery"
              className="footer__logo"
            />
          </a>

          <p className="footer__tagline">
            The Essence of Elegance
            <br />
            &amp; Authenticity
          </p>

          <p className="footer__description">
            Timeless jewellery crafted to celebrate
            <br className="desktop-break" />
            elegance, beauty and individuality.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav
          className="footer__column footer__navigation"
          aria-label="Footer Navigation"
        >
          <h3>Quick Links</h3>

          <div className="footer__link-list">
            {links.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* SOCIAL */}
        <div className="footer__column footer__social-section">
          <h3>Follow Us</h3>

          <p className="footer__social-text">
            Discover our latest collections,
            <br />
            stories and timeless designs.
          </p>

          <div className="footer__socials">

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer__social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.4"
                  cy="6.6"
                  r="1"
                  className="social-dot"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="footer__social-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4.5c-.5-.1-1.8-.2-3.3-.2-3.2 0-5.4 1.9-5.4 5.5V13H5v4h3.3v7h4V17h3.4l.5-4h-3.9v-2.8C12.3 9 12.7 8 14 8Z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="footer__social-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a9 9 0 0 0-3.3 17.4c-.1-1.5 0-3.3.4-4.9l1.1-4.8s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1 4.2-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.1 0-2.5-2.1-4.5-5.2-4.5-3.7 0-6 2.8-6 5.9 0 1.1.3 1.9.8 2.5.2.3.2.4.1.7l-.3 1.1c-.1.4-.5.5-.9.4-2.4-1-3.5-3.7-3.5-6.7C3.2 7 6.6 3 12.5 3H12Z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="footer__social-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 7.2a3 3 0 0 0-2.1-2.1C18 4.6 12 4.6 12 4.6s-6 0-7.9.5A3 3 0 0 0 2 7.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 16.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.8 31 31 0 0 0-.4-4.8ZM10 15.4V8.6l6 3.4-6 3.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* LOWER STRIP */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} Anvika Fine Jewellery.
            All rights reserved.
          </p>

          <p className="footer__location">
            Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;