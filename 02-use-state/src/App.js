import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en React - HookusesState</h1>
        <MiPrimerEstado/>
        <hr/>
        <EjercicioComponent year={yearActual} />
      </header>
    </div>
  );
}

export default App;
