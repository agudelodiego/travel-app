import "./App.css";
import {Normalize} from "styled-normalize";


//----------PRUEBAS DE COMPONENTES-----------
import NavigationBar from "./components/navBar/navBar.js";
//-------------------------------------------

function App() {
  return (
    <div className="App">
      <Normalize />
      <NavigationBar />
    </div>
  );
}

export default App;
