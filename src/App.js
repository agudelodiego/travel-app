import "./App.css";
import {Normalize} from "styled-normalize";


//----------PRUEBAS DE COMPONENTES-----------
import NavigationBar from "./components/navBar/navBar.js";
import HomePage from "./pages/Home/home";
//-------------------------------------------

function App() {
  return (
    <div className="App">
      <Normalize />
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
