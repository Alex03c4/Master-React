import logo from './logo.svg';
import './App.css';
import { MisJuegos } from './components/MisJuegos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MisJuegos />
      </header>
    </div>
  );
}

export default App;
