import React, { useState } from 'react';
import './styles.css';

function TextInput({ type = 'text', label = 'Username', onChange }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue); // Call the prop function with the updated value
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'}>{label}</label>
    </div>
  );
}

export default function Username({ onChange }) {
  return (
    <div className="App">
      <TextInput label="Username" onChange={onChange} />
    </div>
  );
}
