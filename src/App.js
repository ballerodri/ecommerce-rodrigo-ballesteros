import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!" />
    </>
  );
}

export default App;
