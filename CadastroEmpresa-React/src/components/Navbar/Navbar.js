import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../assets/images/logo.png'; // Corrigido duplo ponto e vírgula

const navLinks = [
    { path: "/", text: "Início" },
    { path: "/cadastro", text: "Cadastre-se" },
    { text: "Cadastrados", onClick: () => alert('Em manutenção') },
    { text: "Quem somos?", onClick: () => alert('Em manutenção') },
    { text: "Contato", onClick: () => alert('Em manutenção') }
];

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <ul className="nav-links">
                {navLinks.map((link, index) =>
                    link.path ? (
                        <li key={index}><Link to={link.path}>{link.text}</Link></li>
                    ) : (
                        <li key={index}><a href="#" onClick={link.onClick}>{link.text}</a></li>
                    )
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
