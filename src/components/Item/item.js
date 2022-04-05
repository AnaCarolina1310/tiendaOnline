import './item.css'
import { Button, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Link} from  'react-router-dom'
export const Item = ({id, nombre, precio, imagen, descList, stock})=>{
    return (
  <Col lg={4} md={6} xs={12} className='cardProducto' >
       <Card  >
            <Card.Img variant="top" src={imagen} className='cardImagen' />
            <Card.Body className='cardBody'>
              <Card.Title className='cardImagen' >{nombre}</Card.Title>
              <Card.Text className='descripcion'>{descList}</Card.Text>
              <Card.Text >Precio:$ {precio}</Card.Text>
              <Link to={`/detail/${id}`} ><Button  variant="dark" className='botonItem' >Ver más</Button></Link>
            </Card.Body>
        </Card>
  </Col>

    )
}