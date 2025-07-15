import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../public/caractif-logo.png"; // ✅ import correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CarActif" /> {/* ✅ ici on utilise l'import */}
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">🏠 Accueil</Link>
        <Link to="/vendre">🪙 Vendez votre voiture</Link>
        <Link to="/vehicules">🚗 Nos véhicules</Link>
        <Link to="/equipe">👥 Notre équipe</Link>
        <Link to="/contact">📞 Contactez-nous</Link>
      </div>

      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

