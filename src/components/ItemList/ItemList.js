import { Contenedor } from "../../Contenedor/Contenedor"
import { Item } from "../Item/Item"

export const ItemList = ({ productos }) => {

    return (
        <Contenedor>
            <div class="text-center">
                <img src="/robin.png" className="robin" alt="..."/>
            </div>
            <hr />
            <div className="row">
                {productos.map((el) => <Item key={el.id} {...el} />)}
            </div>
        </Contenedor>
    )
}