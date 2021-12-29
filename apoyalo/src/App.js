import PersonCard from "./components/PersonCard";


function App() {
  return (
    <div className="App">
      <PersonCard primerNombre = {'Jane'} primerApellido ={'Doe'} edad={45} colorPelo = {'Negro'} />
      <PersonCard primerNombre = {'John'} primerApellido ={'Smith'} edad={88} colorPelo = {'Café'} />
      <PersonCard primerNombre = {'Millard'} primerApellido ={'Fillmore'} edad={50} colorPelo = {'Rubio'} />
      <PersonCard primerNombre = {'Maria'} primerApellido ={'Smith'} edad={62} colorPelo = {'Rojo'} />
    </div>
  );
}

export default App;
