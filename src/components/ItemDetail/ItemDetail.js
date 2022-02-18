
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({id, nombre, precio, imagen, descripcion,stock}) => {

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
    <ItemCount max={stock}/>
  </Card.Body>
</Card>

        </>

        </div>
    )
}