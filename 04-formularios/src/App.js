import logo from './logo.svg';
import './App.css';
import { FormularioComponent } from './component/FormularioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <FormularioComponent/>
      </header>
    </div>
  );
}

export default App;
