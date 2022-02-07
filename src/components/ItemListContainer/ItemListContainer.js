import "./itemListContainer.css"
import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Item } from "../Item/item"
export const ItemListContainer = () =>{
   const  [productos, setProductos ] = useState([]); 
    
   
    useEffect(()=>{
        pedirDatos()
                    .then((res)=>{
                        setProductos(res)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    .finally(()=>{
                        console.log('Fin del proceso')
                    })
    })
    
    
    return(
        <section className="itemListContainer">
           
            {productos.map((el, i)=> <Item key={i} nombre={el.nombre} precio={el.precio} descripcion={el.descripcion} imagen={el.imagen}/>)}
        </section>
    )
}