import logo from './logo.svg';
import './App.css';
import { MiComponente } from './components/MiComponente';
import { PruebasCustom } from './components/PruebasCustom';
import { Formulario } from './components/Formulario';
import { MiUsuario } from './components/MiUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <MiComponente />
          <PruebasCustom />
          <Formulario />
          <MiUsuario />
      </header>
    </div>
  );
}

export default App;
