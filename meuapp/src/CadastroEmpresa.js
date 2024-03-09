import React, { useState } from 'react';

function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    telefone: '',
    endereco: '',
    ramoAtividade: '',
    site: '',
    numeroFuncionarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restringir entrada para apenas números nos campos específicos
    if (name === "cnpj" || name === "telefone" || name === "numeroFuncionarios") {
      const re = /^[0-9\b]+$/;
      if (value === '' || re.test(value)) {
        setEmpresa(prevState => ({ ...prevState, [name]: value }));
      }
    } else {
      setEmpresa(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(empresa); // Aqui você pode integrar a lógica de envio para uma API
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-empresa">
      <div className="campo-formulario">
        <label>Razão Social:</label>
        <input type="text" name="razaoSocial" value={empresa.razaoSocial} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>Nome Fantasia:</label>
        <input type="text" name="nomeFantasia" value={empresa.nomeFantasia} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>CNPJ:</label>
        <input type="tel" name="cnpj" value={empresa.cnpj} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>Telefone:</label>
        <input type="tel" name="telefone" value={empresa.telefone} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>Endereço:</label>
        <input type="text" name="endereco" value={empresa.endereco} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>Ramo de Atividade:</label>
        <input type="text" name="ramoAtividade" value={empresa.ramoAtividade} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>Site:</label>
        <input type="text" name="site" value={empresa.site} onChange={handleChange} />
      </div>
      <div className="campo-formulario">
        <label>Número de Funcionários:</label>
        <input type="number" name="numeroFuncionarios" value={empresa.numeroFuncionarios} onChange={handleChange} />
      </div>
      <button type="submit">Cadastrar Empresa</button>
    </form>
  );
}

export default CadastroEmpresa;
