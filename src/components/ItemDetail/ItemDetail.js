import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import Select from "../Select/Select"

const options = [
    {value: 'L', text: 'Large'},
    {value: 'M', text: 'Medium'},
    {value: 'S', text: 'Small'},
    {value: 'XS', text: 'XSmall'}
]

export const ItemDetail = ({ id, nombre, img, desc, precio, stock, categoria }) => {

    const [cantidad, setCantidad] = useState(0)
    const [talle, setTalle] = useState('M')
    const navigate = useNavigate();

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }

            agregarAlCarrito(addItem)
        }
    }

    return (
        <div className="itemdetail">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            <small>Stock disponible: {stock}</small>
            {stock === 0 && <p className="stock">¡Producto sin stock!</p>}
            {stock <= 3 && stock != 0 && <p className="stock">¡Últimas unidades!</p>}

            <div className="my-2">   
            <Select
                options={options}
                onSelect={setTalle}
            />
            </div> 
            {
                isInCart(id)
                    ? <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>                 
                    :
                    <>
                        <ItemCount
                            max={stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                        />
                        <button className="btn btn-secondary my-2" onClick={handleAgregar}>Agregar al carrito</button>
                    </>
            }
            <hr/>
            <button className="btn btn-secondary my-3" onClick={() => navigate(-1)}>Volver</button>
        </div>
    )
}