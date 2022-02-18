import "./NavBar.css"
import {Link} from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "../../assets/img/logo.png"


export const NavBar = ()=> {
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} style={{ width: '200px' }} alt="logo"></img>
            </Link>
            <nav className="nav-Bar">
                <Link to='/productos/bianco' className="enlaces">Bianco</Link>
                <Link   to='/productos/nero' className="enlaces">Nero</Link>
                <Link  to='/productos/rosso' className="enlaces">Rosso</Link>
                <CartWidget/>
            </nav>
        </header>
    )
}