import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, desc, img, precio, stock, category}) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        if (cantidad === 0) return

        const addItem = {
            id, nombre, precio, stock, cantidad
        }

        console.log(addItem)
    }
    
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}></img>
            <p>{desc}</p>
            <h4>Precio: ${precio}</h4>
            <small>Stock disponible: {stock}</small>

            <ItemCount 
                max={stock} 
                counter={cantidad} 
                setCounter={setCantidad}
            />
            <button className="btn btn-secondary my-2" onClick={handleAgregar}>Agregar al carrito</button>
            <hr/>
            <button className="btn btn-outline-secondary" onClick={handleNavigate}>Volver</button>
        </div>
    )
}

export default ItemDetail