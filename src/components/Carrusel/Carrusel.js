import Carousel from 'react-bootstrap/Carousel'
import './carrusel.css'
export const Carrusel = ({imagenUno, imagenDos, imagenTres})=>{
   
    return(
        <div>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block "
      src={imagenUno}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src={imagenDos}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={imagenTres}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

        </div>
    )



}