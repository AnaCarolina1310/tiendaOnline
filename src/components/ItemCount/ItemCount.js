

export const ItemCount = ({max, min = 0, counter, setCounter}) => {
 
    
    const handleSumar = () =>{
       counter < max && setCounter(counter + 1)
    }
    const handleRestar = () =>{
       counter > min && setCounter(counter - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary my-2" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-outline-primary m-2" onClick={handleSumar}>+</button>
        </div>
    )
}