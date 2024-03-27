import React from 'react';

function Input({ label, name, value, onChange, type = 'text' }) {
  return (
    <div className="campo-formulario">
      <label>{label}:</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
