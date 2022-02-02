
function App() {
const names = ['Jorge', 'Juan', 'Andrea']

  return (
    <div className="container">
      {<ul>
        {names.map(name => <li>{name}</li>)}
      </ul>}
    </div>
  );
}

export default App;
