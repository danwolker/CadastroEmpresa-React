import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PaginaInicial from './pages/home/HomePage';
import CadastroEmpresa from './pages/RegisterCompany/RegisterCompany';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<PaginaInicial />} />
                    <Route path="/cadastro" element={<CadastroEmpresa />} />
                    {/* Adicione mais rotas conforme necessário */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
