import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import Formulario from "./components/Formulario";
import TimerPadre from "./components/TimerPadre";
import Usuario from './components/Usuario';

function App() {
  return (
    <div>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Usuario></Usuario>
      <hr />
      <h2>Useffect - UseRef</h2>
      <Counter></Counter>
      <hr />
      <hr />
      <h2>UseReducer</h2>
      <ContadorRed></ContadorRed>
      <hr />
      <h2>CustomHooks</h2>
      <Formulario></Formulario>
      
    </div>
  );
}

export default App;