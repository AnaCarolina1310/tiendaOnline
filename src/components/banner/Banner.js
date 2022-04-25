import './banner.css'
import {BsClockHistory} from 'react-icons/bs'


export const Banner = (props)=>{
    
   return(
        <div className='banner'>
            <p><BsClockHistory/>{props.mensaje}<BsClockHistory/></p>
        </div>
    )
}