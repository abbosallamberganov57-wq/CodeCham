import { Link, NavLink } from "react-router-dom"
import Style from "./navbar.module.css"

function Navbar() {
    return (
        <header className={Style.header}>
            <div className="container">
                <div className={Style.container}>
                    <Link
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        to="/"
                        className={Style.logo}>
                        CaffeineCode
                    </Link>
                    <nav className={Style.nav}>
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? `${Style.link} ${Style.active}`
                                    : Style.link}>
                            About
                        </NavLink>
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            to="/reviews"
                            className={({ isActive }) =>
                                isActive
                                    ? `${Style.link} ${Style.active}`
                                    : Style.link}>
                            Reviews
                        </NavLink>
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive
                                    ? `${Style.link} ${Style.active}`
                                    : Style.link}>
                            Contacts
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar