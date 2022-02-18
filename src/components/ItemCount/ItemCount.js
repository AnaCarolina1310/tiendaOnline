import { useState } from "react"

export const ItemCount = () => {
 
    const [counter, setCounter ] = useState(0)
    const handleSumar = () =>{
        setCounter(counter + 1)
    }
    const handleRestar = () =>{
        setCounter(counter - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-outline-primary" onClick={handleSumar}>+</button>
        </div>
    )
}