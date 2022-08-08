import logo from './logo.svg';
import './App.css';
import {PrimerComponente} from './components/PrimerComponente.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrimerComponente />
      </header>
    </div>
  );
}

export default App;
