import "./styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import Cart from "./components/Cart/Cart";


function App() {

  return (
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          <Route path="/" element={ <ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer/>}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={ <Cart/>}/>
          <Route path="/contacto" element={ <Contacto/>}/>
          <Route path="/nosotros" element={ <Nosotros/>}/>

          <Route path="*" element={ <Navigate to="/"/>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;