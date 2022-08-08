import logo from './logo.svg';
import './App.css';
import { Gestion } from './components/Gestion';
import { Tarea } from './Tarea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/*  <Tarea />*/}

          <Gestion />
      </header>
    </div>
  );
}

export default App;
