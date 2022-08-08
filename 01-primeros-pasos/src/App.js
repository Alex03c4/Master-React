import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponentes } from './TercerComponentes';
import { EventosComponente } from './EventosComponente';
function App() {
  const ficha_medica={
    altura:"187cm",
    grupo:"H+",
    estado:"Bueno",
    alergias:"Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <MiComponente />  
          <hr/>
          <SegundoComponente/>
          <hr/>
          <TercerComponentes nombre='Ary' apellido='Cordero'
          ficha={ficha_medica}
          />
          <hr/>
          <EventosComponente/>
                    
        </div>
      </header>
      
    </div>
  );
}

export default App;
