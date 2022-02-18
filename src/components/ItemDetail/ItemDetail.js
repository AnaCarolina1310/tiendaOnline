
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import './itemDetail.css'


export const ItemDetail = ({id, nombre, precio, imagen,stock}) => {
  const [ cantidad, setCantidad] = useState(0)
  const handleAgregar = ()=>{
    const agregarItem = {
      id, nombre, precio, stock, cantidad
    }
    console.log(agregarItem)
  }


    return (
 
   <div>
     
          <img src={imagen} alt={nombre} />
     
     
        <h2>{nombre}</h2>
        <h2>Precio: ${precio}</h2>
        <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
        <button className="btn btn-success my-3" onClick={handleAgregar}>
          Agregar al carrito
        </button>
        </div>
    )
}