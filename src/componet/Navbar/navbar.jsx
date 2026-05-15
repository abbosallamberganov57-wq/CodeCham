import { Link } from "react-router-dom"
import Style from "./navbar.module.css"

function Navbar() {
    return (
        <header className={Style.header}>
            <div className="container">
                <div className={Style.container}>
                    <Link
                        to="/"
                        className={Style.logo}>
                        CaffeineCode
                    </Link>
                    <nav className={Style.nav}>
                        <Link
                            to="/about"
                            className={Style.link}>
                            О нас
                        </Link>
                        <Link
                            to="/reviews"
                            className={Style.link}>
                            Отзывы
                        </Link>
                        <Link
                            to="/contacts"
                            className={Style.link}>
                            Контакты
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar