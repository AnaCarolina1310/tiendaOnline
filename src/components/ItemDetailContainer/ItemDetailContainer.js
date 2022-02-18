import React from 'react';
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = ()=>{
     const [item, setItem ] = useState(null);
    const {itemId} = useParams();
     useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            
            setItem(res.find((el) => el.id === Number(itemId)))
            
        })
        
        .finally(()=>{
            console.log('Fin del proceso')
        })
     }, [itemId])

    return (
        <div>

        <ItemDetail {...item}/>
      
        </div>
    )
}