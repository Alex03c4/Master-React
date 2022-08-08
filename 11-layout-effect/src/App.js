import logo from './logo.svg';
import './App.css';
import {Ejemplo} from './conponents/Ejemplo.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ejemplo />
      </header>
    </div>
  );
}

export default App;
