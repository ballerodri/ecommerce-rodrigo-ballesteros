
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mocks/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = (itemId) => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    useEffect(() => {
        setLoading(true)

        getProducts
            .then((res) => {
                setItem( res.find((item) => item.id === '2') )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className='container my-5'>
            {
                loading 
                ? <img src="/Spinner-1s-100px.gif"/>
                : <ItemDetail {...item}/>
            }
        </div>
)
};
