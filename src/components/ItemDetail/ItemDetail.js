
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import './itemDetail.css'
import {Button, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext';
import { Carrusel } from '../Carrusel/Carrusel';

export const ItemDetail = ({id, nombre, precio, imagen,stock, descList, descripcion, imagenDos}) => {
  const [ cantidad, setCantidad] = useState(0)
  
  const{cart, agregarAlCarrito, isInCart} = useContext(CartContext);
  console.log(cart)
  const handleAgregar = ()=>{
    if(cantidad === 0) return
   
    if (!isInCart(id)){
    const agregarItem = {
      id, nombre, precio, stock, cantidad, imagen, descList
    }
    agregarAlCarrito(agregarItem)
    
   }
    
  
}

    return (
  
     
      <div className='row imagenesProd' >
         <Col lg={4} md={6} xs={12}>
             <Carrusel imagenUno={imagen} imagenDos={imagenDos} imagenTres={imagen}/>
         </Col>
         <Col lg={8} md={6} xs={12} className='contenido'>
             <h2>{nombre}</h2>
             <p>{descripcion}</p>
             <h3>Precio: ${precio}</h3>
     
      
        {
      isInCart(id)
      ? <>
             <p >El producto ha sido añadido al carrito</p>
             <Link to="/" className="btn btn-dark my-6 ">
                Continuar comprando
             </Link>
          
          </>
       :
       <>
               
              <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} productosStock={stock} />
               <Button variant="dark" className='my-6 boton' disabled={cantidad === 0} onClick={handleAgregar}>Añadir al carrito</Button>
       
      </>
    

    }
        </Col>
       </div>
    
    
   
   
    )
}