import { useForm } from "../../hooks/useForm";
import { Col } from "react-bootstrap";
import { Loading } from "../Loading/Loading";

const inicialForm = {
  nombre: "",
  email: "",
  comentarios: "",
};
const validacionesForm = (form) => {
  let errores = {};
  let expNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let expEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let expComentarios = /^.{1,255}$/;

  if (!expNombre.test(form.nombre.trim())) {
    errores.nombre = "El campo 'nombre' solo acepta letras y espacios vacios";
  }
  if (!form.email.trim()) {
    errores.email = "El campo 'Email' es requerido";
  } else if (!expEmail.test(form.email.trim())) {
    errores.email = "El campo 'Email' es incorrecto";
  }

  if (!form.comentarios.trim()) {
    errores.comentarios = "Agrega tu comentario";
  } else if (!expComentarios.test(form.comentarios.trim())) {
    errores.comentarios = "El campo 'comentarios acepta hasta 255 caracteres";
  }

  return errores;
};

export const ContactUs = () => {
  const {
    form,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(inicialForm, validacionesForm);

  return (
    <>
      <div className="container my-5">
        <h2>Contacto</h2>
        <Col lg={6}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Nombre"
              name="nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.nombre}
            />
            {errores.nombre && <p>{errores.nombre}</p>}
            <input
              type="text"
              className="form-control my-2"
              placeholder="E-mail"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
            />
            {errores.email && <p>{errores.email}</p>}
            <textarea
              type="textArea"
              className="form-control my-2"
              placeholder="Escribe tu mensaje"
              name="comentarios"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comentarios}
            />
            {errores.comentarios && <p>{errores.comentarios}</p>}
            <input type="submit" className="form-control my-2" value="Enviar" />
          </form>
          {loading && <Loading />}
          {response && <p>El mensaje se envio correctamente</p>}
        </Col>
      </div>
    </>
  );
};
