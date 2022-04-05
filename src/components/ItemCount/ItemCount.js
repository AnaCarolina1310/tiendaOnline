import "./itemCount.css"

export const ItemCount = ({max, min = 0, counter, setCounter}) => {
 
    
    const handleSumar = () =>{
       counter < max && setCounter(counter + 1)
    }
    const handleRestar = () =>{
       counter > min && setCounter(counter - 1)
    }

    return (
        <div className="estilosCounter">
            <button className="btn btn-outline-dark m-3" disabled={counter === min} onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-outline-dark m-3" disabled={counter === max} onClick={handleSumar}>+</button>
        </div>
    )
}