import './index.css';

const links = [
  ['Home', '#home'],
  ['Collections', '#collections'],
  ['About us', '#about'],
  ['Contact', '#contact'],
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand-block">
          <a className="footer__brand" href="#home" aria-label="Anvika Fine Jewellery home">
            <img src="/anvika-logo.svg" alt="Anvika Fine Jewellery" />
          </a>
          <p>The Essence of Elegance &amp;<br />Authenticity</p>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          <h2>Quick links</h2>
          {links.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
      </div>
      <div className="footer__bottom">
        <p>© Anvika Fine Jewellery. All rights reserved. RH Hyderabad</p>
      </div>
    </footer>
  );
}

export default Footer;
