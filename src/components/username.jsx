import React, { useState } from 'react';
import './styles.css';

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} >
        {label}
      </label>
    </div>
  );
}


export default function username() {
  return (
    <div className="App">
      <form>
        <TextInput label="First name" />
      </form>
    </div>
  );
}
