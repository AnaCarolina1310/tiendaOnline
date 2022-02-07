import './item.css'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
export const Item = ({nombre, precio, imagen, descripcion})=>{
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
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </>
    )
}