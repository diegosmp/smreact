import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = [...names, name];
    setNames(name);
    localStorage.setItem("minha-chave", newName);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
