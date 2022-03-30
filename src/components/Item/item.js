import './item.css'
import { Button, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Link} from  'react-router-dom'
export const Item = ({id, nombre, precio, imagen, descripcion, stock})=>{
    return (
      <Col lg={3} md={6} xs={12}>
       
       <Card  >
            <Card.Img variant="top" src={imagen} className='imagen' />
          <Card.Body className='cardBody'>
          <Card.Title >{nombre}</Card.Title>
    <Card.Text className='descripcion'>
    {descripcion}
    </Card.Text>
    <Card.Text >
    Precio:$ {precio}
    </Card.Text>
    <Link to={`/detail/${id}`} >
         <Button  variant="dark"  >Ver más</Button>
    </Link>
 
  </Card.Body>
</Card>
</Col>

    )
}