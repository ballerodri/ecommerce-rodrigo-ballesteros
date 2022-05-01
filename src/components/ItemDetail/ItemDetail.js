const ItemDetail = ({id, nombre, desc, img, precio, stock, category}) => {

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}></img>
            <p>{desc}</p>
            <h4>Precio: ${precio}</h4>
            <small>Stock disponible: {stock}</small>

        </div>
    )
}

export default ItemDetail