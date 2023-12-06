import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {
  const [input, setInput] = useState('')
  
  function handleSearch() {
    alert("CLICOU" + input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="white"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP:01001-000</h2>

        <span>Logradouro: "Praça da Sé"</span>
        <span>Complemento: "lado ímpar"</span>
        <span>Bairro: "Sé"</span>
        <span>Localidade: "São Paulo"</span>
        <span>Uf: "SP"</span>

      </main>

    </div>
  );
}

export default App;
