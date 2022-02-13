import './item.css'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Link} from  'react-router-dom'
export const Item = ({id, nombre, precio, imagen, descripcion})=>{
    return (
        <>
       
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
    <Link to={`/detail/${id}`}>
         <Button variant="primary">Ver</Button>
    </Link>
  </Card.Body>
</Card>
        </>
    )
}