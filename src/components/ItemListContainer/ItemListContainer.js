import { useEffect } from "react"
import { useState } from "react"
import { Item } from "../Item/item"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import './ItemListContainer.css'

export const ItemListContainer = () =>{
   const  [productos, setProductos ] = useState([]); 
   const [imagen, setImagen] = useState(null)
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
    
    useEffect(()=>{
        if(catId=== 'nero'){
            setImagen('https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/tintos.png?alt=media&token=930f7e98-b3bb-4b88-9e0e-592d2edb2e9b')
        } else if(catId=== 'bianco'){
            setImagen('https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/BLANCOS.png?alt=media&token=f15cc48f-6063-45b0-b104-5860fe3a8097')
        } else if(catId=== undefined){
            setImagen('https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/shop.png?alt=media&token=929a98bb-7640-4c84-acd3-8131b830e43c')
        } else if(catId === 'rosso'){
            setImagen('https://firebasestorage.googleapis.com/v0/b/coder-6098d.appspot.com/o/ROSADOS.png?alt=media&token=899679ea-be57-4f37-8403-66444cc7cdba')
        }
    },[catId])
    
    return(
      <>

    <div className="contenedorImagenCategorias">
      <img src={imagen} alt={catId} className='imagenesCategoria'/>
    </div>
    <div className="container">
            <hr/>
        <div className="row">
         {productos.map((el, i)=> <Item  key={i} nombre={el.nombre} stock={el.stock} id={el.id} precio={el.precio} descripcion={el.descripcion} imagen={el.imagen} descList={el.descList}/>)}
        </div> 
        
         </div>
         </>
    )
}