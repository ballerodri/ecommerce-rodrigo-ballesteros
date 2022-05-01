import React, { useState } from 'react'

const ItemCount = ({stock}) => {

const [counter, setCounter] = useState(1)

const sumar = () =>{
    if(counter < stock){
        setCounter( counter + 1)
    }
}
const restar = () =>{
    if(counter > 0){
        setCounter( counter - 1)
    }
}

const onAdd = () =>{
    if (counter > 0) {
    console.log({counter})
    }
}

  return (
    <div>
        <button className="btn btn-light" onClick={restar}>-</button>
        <span className="mx-3">{counter}</span>
        <button className="btn btn-light" onClick={sumar}>+</button>
        <div>
        <button className="btn btn-secondary my-2" onClick={onAdd}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount