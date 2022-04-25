
import { useForm } from "../../hooks/useForm"
import {Col} from 'react-bootstrap'

 const inicialForm = {
     nombre: '',
     email: '',
     comentarios:''
 }
 const validacionesForm =(form)=>{
     let errores = {};
     let expNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
     let expEmail = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
     let expComentarios =  /^.{1,255}$/;

     if(!form.nombre.trim()){
         errores.nombre = "El campo 'nombre' es necesario"
     }else if(!expNombre.test(form.nombre.trim())){
         errores.nombre = "El campo 'nombre' solo acepta letras y espacios vacios"
     }
     if(!form.email.trim()){
        errores.email = "El campo 'e-mail' es necesario"
    }else if(!expEmail.test(form.email.trim())){
        errores.email = "El campo 'nombre' solo correos electronicos"
    }
    if(!form.comentarios.trim()){
        errores.comentarios = "Agrega tu comentario"
    }else if(!expComentarios.test(form.comentarios.trim())){
        errores.comentarios = "El campo 'comentarios acepta hasta 255 caracteres"
    }

     return errores;
 } 

export const ContactUs =()=>{
  const {
    form,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
}= useForm(inicialForm, validacionesForm)

    return(
        <>
        <div className="container my-5">
        <h2>Contacto</h2>
        <Col lg={6}>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            className="form-control my-2"
            placeholder="Nombre" 
            name="nombre" 
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nombre}/>
            {errores.nombre && <p>{errores.nombre}</p>}
            <input 
            type='text' 
            className="form-control my-2"
            placeholder="E-mail" 
            name="email" 
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}/>
            
            <textarea 
            type='textArea' 
            className="form-control my-2"
            placeholder="Escribe tu mensaje" 
            name="comentarios" 
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comentarios}/>
           
           <input type='submit'
            className="form-control my-2" 
            value='Enviar'/>
        </form>
        </Col>
        
      
        
        </div>
        </>
    )
}