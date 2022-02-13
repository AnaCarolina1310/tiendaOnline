import "./itemListContainer.css"
import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Item } from "../Item/item"
import { useParams } from "react-router-dom"

export const ItemListContainer = () =>{
   const  [productos, setProductos ] = useState([]); 
    
   const {catId} = useParams();
   
    useEffect(()=>{
        pedirDatos()
                    .then((res)=>{
                        if(catId){ 
                        setProductos(res.filter((el) => el.categoria === catId))
                        } else {setProductos(res)}
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    .finally(()=>{
                        console.log('Fin del proceso')
                    })
    }, [catId])
    
    
    return(
        <section className="itemListContainer">
           <div className="row">
            {productos.map((el, i)=> <Item key={i} nombre={el.nombre} precio={el.precio} descripcion={el.descripcion} imagen={el.imagen}/>)}
            </div>
        </section>
    )
}