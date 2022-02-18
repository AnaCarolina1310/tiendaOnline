import { useState } from "react"

export const ItemCount = () => {
 
    const [counter, setCounter ] = useState(0)


    return (
        <div>
            <button className="btn btn-outline-primary">-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-outline-primary">+</button>
        </div>
    )
}