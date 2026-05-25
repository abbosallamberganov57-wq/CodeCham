import { Link, NavLink } from "react-router-dom"
import Style from "./navbar.module.css"

function Navbar({ cartCount }) {
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
                            О компании
                        </NavLink>
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            to="/reviews"
                            className={({ isActive }) =>
                                isActive
                                    ? `${Style.link} ${Style.active}`
                                    : Style.link}>
                            Отзывы
                        </NavLink>
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive
                                    ? `${Style.link} ${Style.active}`
                                    : Style.link}>
                            Контакты
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive
                                    ? `${Style.link} ${Style.active}`
                                    : Style.link
                            }
                        >
                            Корзина ({cartCount})
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar