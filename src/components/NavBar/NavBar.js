import "./NavBar.css"
import {Link} from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = ()=> {
    return(
        <header className="header">
            <Link to="/">
                <h1>Logo</h1>
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