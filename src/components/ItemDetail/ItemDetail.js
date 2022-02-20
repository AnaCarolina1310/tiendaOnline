
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import './itemDetail.css'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import { CartContext } from '../CartContext/CartContext';

export const ItemDetail = ({id, nombre, precio, imagen,stock}) => {
  const [ cantidad, setCantidad] = useState(0)
  
  const{cart, agregarAlCarrito, isInCart} = useContext(CartContext);
  console.log(cart)
  const handleAgregar = ()=>{
    if(cantidad === 0) return
   
    if (!isInCart(id)){
    const agregarItem = {
      id, nombre, precio, stock, cantidad
    }
    agregarAlCarrito(agregarItem)
    
   }
    
  
}

    return (
 
      <Card style={{ width: '60%', margin:'10px auto', border:'none', display:'flex'}}>
      <Card.Img variant="top" src={imagen} style={{width:'40%',margin:'10px auto' }} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
        <Card.Text>
          Precio: ${precio}
        </Card.Text>
        <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
        <Button variant="success"  onClick={handleAgregar}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
    )
}