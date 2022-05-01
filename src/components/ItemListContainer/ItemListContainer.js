import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

export const ItemListContainer = ( {greeting} ) => {

    return (
        <section className="item-list-container">
            <h2>{greeting}</h2>
            <hr/>
            <p>MUSCULOSA BASICA MORLEY</p>
            <ItemCount 
                stock="10"
            />
        </section>
    )
}