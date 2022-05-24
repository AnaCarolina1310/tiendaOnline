import {
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { CartContext } from "../CartContext/CartContext";

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
    fyh: Timestamp.fromDate(new Date()),
  });

  const generarOrden = () => {
    const order = {
      comprador: values,
      items: cart,
      total: precioTotal(),
    };

    const orderRefe = collection(db, "orders");
    addDoc(orderRefe, order).then((res) => {
      cart.forEach((element) => {
        const docRef = doc(db, "productos", element.id);
        getDoc(docRef).then((dataDoc) => {
          updateDoc(docRef, { stock: dataDoc.data().stock - element.cantidad });
        });
      });

      setOrderId(res.id);
      vaciarCarrito();
    });
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.nombre === "" ||
      values.nombre.length < 6 ||
      values.email === "" ||
      values.tel.length < 9
    ) {
      alert("Completar los datos correctamente");
    }
    generarOrden();
  };
  if (orderId) {
    return (
      <div className="container my-2">
        <h2>Gracias por su compra! Su numero de orden es: {orderId}</h2>
        <hr />
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />
        <input
          className="form-control my-2"
          type="email"
          placeholder="E-mail"
          onChange={handleInputChange}
          value={values.email}
          name="email"
        />
        <input
          className="form-control my-2"
          type="tel"
          placeholder="Telefono"
          onChange={handleInputChange}
          value={values.tel}
          name="tel"
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
