import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/pratos/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
      });
  }, []);

  return (
    <div className="App">
      <div className="banner-container">
        <img src="/imagens/banner.png" alt="Um banner mostrando uma pizza" />
      </div>
      <div className="logo-container">
        <img src="/imagens/logo.png" alt="Logo da Alura Pizza" />
      </div>
    </div>
  );
}

export default App;
