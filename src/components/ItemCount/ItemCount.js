

export const ItemCount = ({max, min = 0, counter, setCounter}) => {

    
    const handleSumar = (e) => {
        // op lógico AND
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }


    return (
        <div>
            <button className="btn btn-outline-secondary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-secondary" onClick={handleSumar}>+</button>
        </div>
    )
}