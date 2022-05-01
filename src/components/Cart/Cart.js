import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="container my-4">
            <h2>Tu carrito esta vacio</h2>
            <hr />
            <h5>Volver a la tienda para comprar</h5>
            <Link to={"/"} className="btn btn-secondary my-3">Volver</Link>
        </div>
    }

    return (
        <div className="container my-4">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                        <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                            <BsFillTrashFill />
                        </button>
                    </div>
                ))
            }

            <hr />
            <h2>Total: ${totalCart()}</h2>

            <div className="my-2">
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                <button className="btn btn-success mx-2">Terminar mi compra</button>
            </div>
        </div>
    )
}