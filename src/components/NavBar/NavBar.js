import "./NavBar.css"
import {Link} from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "../../assets/img/logo.png"
import { useState } from "react"
import {GoTriangleRight, GoTriangleDown} from 'react-icons/go'


export const NavBar = ()=> {
    const [verMenu, setVerMenu]= useState(false)

    const ocultarNavBar =()=>{
        setVerMenu(!verMenu)
    }

    return(
        <header className="header">
            <Link to="/">
                <img src={logo}  alt="logo"></img>
            </Link>
            
            <button className="btn btn-ligth botonNavBar" onClick={ocultarNavBar}><Link to='/shop' className="enlaces">Shop{!verMenu?<GoTriangleDown/>:<GoTriangleRight/>}</Link></button>
            <nav className={verMenu?"nav-Bar": 'nav-Bar hidde'} >
                <Link to='/productos/bianco' className="enlaces">Vinos Blancos </Link>
                <Link   to='/productos/nero' className="enlaces">Vinos Tintos </Link>
                <Link  to='/productos/rosso' className="enlaces">Vinos Rosados</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}