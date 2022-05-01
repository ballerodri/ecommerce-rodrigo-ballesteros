import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="/robin.png" alt="logo" className="logo d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link" >INICIO</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/category/tops" className="dropdown-item" >TOPS</Link></li>
                                <li><Link to="/category/remeras" className="dropdown-item" >REMERAS</Link></li>
                                <li><Link to="/category/sweaters" className="dropdown-item" >SWEATERS</Link></li>
                                <li><Link to="/category/pantalones" className="dropdown-item" >PANTALONES</Link></li>
                                <li><Link to="/category/chalecos" className="dropdown-item" >CHALECOS</Link></li>
                                <li><Link to="/category/bodys" className="dropdown-item" >BODYS</Link></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                {/* <li><a className="dropdown-item" >ACCESORIOS</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link" >CONTACTO</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}