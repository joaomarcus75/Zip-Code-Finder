import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import React from 'react';

import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [zipcode, setZipCode] = useState({});

  async function handleSearch() {
   

    if (input === '') {
      alert("You need to type the zip code...");
      return;
    }

    try {

      const response = await api.get(`${input}/json`);
      setZipCode(response.data)
      setInput('');

    } catch {
      alert("There is a problem with your zip code..");
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Zip Code Finder</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Type the zip code.."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000" />
        </button>
      </div>


      {Object.keys(zipcode).length > 0 && (

        <main className="main">
          <h2>Zip Code:{zipcode.cep} </h2>
          <span>{zipcode.logradouro}</span>
          <span>Complement: {zipcode.complemento} </span>
          <span>{zipcode.bairro}</span>
          <span>Localization: {zipcode.localidade}</span>
          <span>FU: {zipcode.uf}</span>
          <span>DDD: {zipcode.ddd}</span>
        </main>
      )}

    </div>
  );
}

export default App;