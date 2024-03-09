import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import PaginaInicial from './PaginaInicial';
import CadastroEmpresa from './CadastroEmpresa';

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
