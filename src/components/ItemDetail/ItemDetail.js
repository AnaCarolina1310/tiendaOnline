import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
export const ItemDetail = ({id, nombre, precio, imagen, descripcion}) => {

    return (
        <div >
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
    
  </Card.Body>
</Card>
        </>

        </div>
    )
}