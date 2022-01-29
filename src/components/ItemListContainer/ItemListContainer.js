import "./itemListContainer.css"
export const ItemListContainer = ({greeting}) =>{
    return(
        <section className="itemListContainer">
            <h2>{greeting}</h2>
        </section>
    )
}