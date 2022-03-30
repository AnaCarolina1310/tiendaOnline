import "./NavBar.css"
import {Link} from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "../../assets/img/logo.png"
import { IconoMenuResponsive } from "../menuResponsive/IconoMenuResponsive"
import { useState } from "react"



export const NavBar = ()=> {
    const [verMenu, setVerMenu]= useState(false)

    const ocultarNavBar =()=>{
        setVerMenu(!verMenu)
    }
   
   
   
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} style={{ width: '200px' }} alt="logo"></img>
            </Link>
            <button onClick={ocultarNavBar}><IconoMenuResponsive/></button>
            <nav className={verMenu?"nav-Bar": 'nav-Bar hidde'} >
                <Link to='/productos/bianco' className="enlaces">Bianco</Link>
                <Link   to='/productos/nero' className="enlaces">Nero</Link>
                <Link  to='/productos/rosso' className="enlaces">Rosso</Link>
               
               
            </nav>
            <CartWidget/>
        </header>
    )
}