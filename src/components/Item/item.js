import { Button, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Link} from  'react-router-dom'
export const Item = ({id, nombre, precio, imagen, descripcion, stock})=>{
    return (
      <Col md={3} xs={12}>
       
       <Card style={{width:'16 rem'}} >
            <Card.Img variant="top" src={imagen} />
          <Card.Body>
          <Card.Title>{nombre}</Card.Title>
    <Card.Text>
     {descripcion}
    </Card.Text>
    <Card.Text>
    Precio:$ {precio}
    </Card.Text>
    <Link to={`/detail/${id}`}>
         <Button variant="primary">Ver</Button>
    </Link>
  </Card.Body>
</Card>
</Col>
    )
}