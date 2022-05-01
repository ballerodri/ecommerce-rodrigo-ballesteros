import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])

    return (
        <Container className="my-5">
            {
                loading
                ? <img src="/Spinner-1s-100px.gif"/>
                : <ItemDetail {...item}/>
            }
        </Container>
    )
}

export default ItemDetailContainer