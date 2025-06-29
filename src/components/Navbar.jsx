import './Navbar.css';
import Logo from '../assets/logoportfolio.png';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (e, id) => {
  e.preventDefault();
  setMenuOpen(false); // Pour refermer le menu burger si ouvert

  const target = document.getElementById(id);
  if (target) {
    const y = target.getBoundingClientRect().top + window.pageYOffset - 70; // 70px offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  return (
    <>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="logo" src={Logo} alt="Logo" />
        </div>

        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#header" onClick={(e) => handleScroll(e, 'header')}>ACCUEIL</a></li>
        <li><a href="#apropos" onClick={(e) => handleScroll(e, 'apropos')}>À PROPOS</a></li>
        <li><a href="#projets" onClick={(e) => handleScroll(e, 'projets')}>PROJETS</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACT</a></li>
        </ul>
      </nav>
    </>
  );
}
