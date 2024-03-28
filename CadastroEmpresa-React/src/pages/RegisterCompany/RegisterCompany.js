import React, { useState } from 'react';
import Input from '../../components/Input'; // Ensure the path is correct
import './RegisterCompany.css'; // Ensure the file path is correct

function RegisterCompany() {
  const [company, setCompany] = useState({
    legalName: '',
    tradeName: '',
    taxId: '',
    phone: '',
    address: '',
    businessSector: '',
    website: '',
    numberOfEmployees: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["taxId", "phone", "numberOfEmployees"].includes(name)) {
      const re = /^[0-9\b]+$/; // Allows only numbers
      if (value === '' || re.test(value)) {
        setCompany(prevState => ({ ...prevState, [name]: value }));
      }
    } else {
      setCompany(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(company); // Here you can integrate the logic for sending to an API
  };

  return (
    <form onSubmit={handleSubmit} className="register-company-form">
      <Input label="Razão Social" name="legalName" value={company.legalName} onChange={handleChange} />
      <Input label="Nome Fantasia" name="tradeName" value={company.tradeName} onChange={handleChange} />
      <Input label="CNPJ" name="taxId" value={company.taxId} onChange={handleChange} type="tel" />
      <Input label="Telefone" name="phone" value={company.phone} onChange={handleChange} type="tel" />
      <Input label="Endereço" name="address" value={company.address} onChange={handleChange} />
      <Input label="Ramo de Atividade" name="businessSector" value={company.businessSector} onChange={handleChange} />
      <Input label="Site" name="website" value={company.website} onChange={handleChange} />
      <Input label="Número de Funcionários" name="numberOfEmployees" value={company.numberOfEmployees} onChange={handleChange} type="number" />
      <button type="submit" className="form-button">Cadastrar Empresa</button>
    </form>
  );
}

export default RegisterCompany;
