import React from 'react';
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { pedirDatos } from "../../helpers/pedirDatos"

export const ItemDetailContainer = ()=>{
     const [item, setItem ] = useState(null);
    const {itemId} = useParams();
     useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            
            setItem(res.find((el) => el.id === itemId))
            
        })
        
        .finally(()=>{
            console.log('Fin del proceso')
        })
     }, [itemId])

    return (
        <div>


        </div>
    )
}