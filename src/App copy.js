import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

    return (
        <BrowserRouter>
          
          <NavBar/>

          <Routes>
            <Route path="/" element={ <ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={ <ItemListContainer/>}/>
            <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
            <Route path="/contacto" element={ <Contacto/>}/>
            <Route path="/nosotros" element={ <Nosotros/>}/>

            <Route path="*" element={ <Navigate to="/"/>}/>
          </Routes>

        </BrowserRouter>
    );
}

export default App;
