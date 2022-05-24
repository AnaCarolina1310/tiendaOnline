import Carousel from "react-bootstrap/Carousel";

export const Carrusel = ({ imagenUno, imagenDos, imagenTres }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imagenUno} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={imagenDos} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagenTres} alt="Third slide" />

          {console.log(window.screen.height)}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
