import './item.css'
export const Item = ({nombre, precio, imagen, descripcion})=>{
    return (
        <>
       
        <section className='seccion'>
            <div className='productos'>
            <img src={imagen} alt={nombre}/>
            <h3 className='nombre'>{nombre}</h3>
            <p>{descripcion}</p>
            <h4>Precio:{precio}</h4>
            </div>
        </section>
        </>
    )
}