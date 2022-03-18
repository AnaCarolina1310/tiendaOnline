import {BsFacebook} from  'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './footer.css'
export  const Footer =()=>{

    return(
     <div className="container my-5">
     <hr/>
        <div className='redes'>
            <BsFacebook className='redesIcons'/>
            <BsTwitter className='redesIcons'/>
            <BsInstagram className='redesIcons'/>
        </div>
     </div>
    )
}