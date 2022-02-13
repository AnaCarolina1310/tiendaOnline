import "./NavBar.css"
import {Link} from "react-router-dom"

export const NavBar = ()=> {
    return(
        <header className="header">
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <nav className="nav-Bar">
                <Link to='/' className="enlaces">Bianco</Link>
                <Link   to='/' className="enlaces">Nero</Link>
                <Link  to='/' className="enlaces">Rosso</Link>
            </nav>
        </header>
    )
}