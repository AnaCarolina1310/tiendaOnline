
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';


export const ItemDetail = ({id, nombre, precio, imagen,stock}) => {
  const [ cantidad, setCantidad] = useState(0)
  const handleAgregar = ()=>{
    const agregarItem = {
      id, nombre, precio, stock, cantidad
    }
    console.log(agregarItem)
  }


    return (
        <div >
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
     {descripcion}
    </Card.Text>
    <Card.Text>
    Precio: {precio}
    </Card.Text>
    <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
    <button className="btn btn-success my-3" onClick={handleAgregar}>
      Agregar al carrito
    </button>
  </Card.Body>
</Card>
        </div>
    )
}