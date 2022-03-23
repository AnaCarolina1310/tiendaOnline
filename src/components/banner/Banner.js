import './banner.css'
export const Banner = (props)=>{
    return(
        <div className="banner">
            <p>{props.mensaje}</p>
        </div>
    )
}