import {Carrusel} from '../Carrusel/Carrusel'
import { ContactUs } from '../ContactUs/ContactUs'
export const About = ()=>{
    return(
        <>
        <Carrusel imagenUno='https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/1.png?alt=media&token=84ba1336-14d4-49c1-b2d5-c6cb5ed8ea39' imagenDos='https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/2.png?alt=media&token=67a2540a-343f-4143-9319-0b6ccec7f826' imagenTres='https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/3.png?alt=media&token=ec2510fd-42c9-4246-b30a-a1869d4c72f9'/>
        <div className="container">
           <h2>About us</h2>
        </div>
        </>
    )
}