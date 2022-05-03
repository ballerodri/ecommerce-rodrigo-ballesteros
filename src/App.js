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
import { CartProvider } from './context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
// import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";


function App() {

  return (
      <CartProvider>
        <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>    
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer/>
          </AuthProvider>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;