import { useEffect } from "react"
import { useState } from "react"
import { Item } from "../Item/item"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import './ItemListContainer.css'

export const ItemListContainer = () =>{
   const  [productos, setProductos ] = useState([]); 
    
   const {catId} = useParams();
   
    useEffect(()=>{
        const productosRef = collection(db, 'productos')
        const q = catId ? query(productosRef,where('categoria', '==', catId)) : productosRef;
        getDocs(q)
            .then((res)=>{
                setProductos(res.docs.map((doc)=> {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
    }, [catId])
    console.log(catId)
    
    return(
      
        <div className="container">
            <hr/>
                   <div className="row">
                    {productos.map((el, i)=> <Item  key={i} nombre={el.nombre} stock={el.stock} id={el.id} precio={el.precio} descripcion={el.descripcion} imagen={el.imagen}/>)}
                    </div> 
        
         </div>
    )
}