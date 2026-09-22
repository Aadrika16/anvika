import { useState } from 'react';
import './index.css';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="navbar">
			<a className="navbar__brand" href="#home" aria-label="Anvika Fine Jewellery home">
				<img src="/logo/logo2.png" alt="Anvika Fine Jewellery" />
			</a>

			<button
				className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
				type="button"
				aria-label="Toggle navigation"
				aria-expanded={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<span />
				<span />
			</button>

			<nav className={`navbar__links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
				<a className="is-active" href="#home" onClick={closeMenu}>Home</a>
				<a href="#collections" onClick={closeMenu}>Collections</a>
				<a href="#about" onClick={closeMenu}>About us</a>
				<a href="#contact" onClick={closeMenu}>Contact</a>
			</nav>

			<div className="navbar__actions">
				<a className="navbar__button navbar__button--outline" href="#contact">DM to order</a>
				<a className="navbar__button navbar__button--solid" href="#store">Visit our store</a>
			</div>
		</header>
	);
}

export default Navbar;
