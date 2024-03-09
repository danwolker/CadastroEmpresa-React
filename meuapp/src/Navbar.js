import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from './logo.png'; // Verifique o caminho do seu logo

function Navbar() {
    const showAlert = () => {
        alert('Em manutenção');
    };
    
    return (
        <nav className="navbar">
            <div className="logo">
                {/* Remova o Link que envolve a imagem do logo */}
                <img src={logoImage} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/cadastro">Cadastre-se</Link></li>
                <li><a href="#" onClick={showAlert}>Cadastrados</a></li>
                <li><a href="#" onClick={showAlert}>Quem somos?</a></li>
                <li><a href="#" onClick={showAlert}>Contato</a></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
