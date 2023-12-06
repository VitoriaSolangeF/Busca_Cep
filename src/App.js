import { FiSearch } from "react-icons/fi";
import './styles.css'


function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        />

        <button className="ButtonSearch">
          <FiSearch size={25} color="white"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP:79003222</h2>

        <span>Rua Teste</span>
        <span>Complemento: Algum</span>
        <span>Vila SSJ</span>
        <span>Fortaleza</span>

      </main>

    </div>
  );
}

export default App;
