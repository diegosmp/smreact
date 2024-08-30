function Employed({ nome, exp, skill }) {
  return (
    <>
      <h2>Nome: {nome}</h2>
      <h2>Experiência: {exp}</h2>
      <h2>Skill's:</h2>
      <ul>
        <li>{skill}</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <Employed nome="Diego" exp="Pleno" skill="React Js" />
      <Employed nome="Maria" exp="Pleno" skill="UX/UI" />
    </div>
  );
}

export default App;
