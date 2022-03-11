import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"

export const Checkout = () =>{
    const {cart, precioTotal} = useContext(CartContext)
    const [values, setValues ] = useState({
        nombre: '',
        email:'',
        tel: ''
    })
const handleInputChange = (e)=>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}
 const handleSubmit = (e) =>{
     e.preventDefault()
    if((values.nombre === '' || values.nombre.length < 6)|| values.email === '' || values.tel.length < 9){
       alert('Completar los datos correctamente')
    } else{
        const order = {
            comprador:values,
            items: cart,
            total: precioTotal()
        }
        console.log(order)
       console.log(order.items.length)
    }
     
 }


    
    
    
    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                className="form-control my-2"
                type='text'
                placeholder="Nombre"
                value={values.nombre}
                onChange={handleInputChange}
                name='nombre'
                />
                 <input
                className="form-control my-2"
                type='email'
                placeholder="E-mail"
                onChange={handleInputChange}
                value={values.email}
                name='email'
                />
                <input
                className="form-control my-2"
                type='tel'
                placeholder="Telefono"
                onChange={handleInputChange}
                value={values.tel}
                name='tel'
                />
            <button type="submit" className="btn btn-primary">
            Enviar
            </button>
            
            </form>
|           
        </div>
    )
}