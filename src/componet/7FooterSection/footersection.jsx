import Style from "./footersection.module.css";


function Footer() {
    return (
        <footer className={Style.Gustav}>
            <div className={Style.container}>
                <div className={Style["footer-content"]}>
                    <div className={Style["footer-left"]}>
                        <div className={Style["footer-logo"]}>Caffeine Code</div>
                        <div className={Style["footer-phone"]}>+998 95 (222)-66-65</div>
                    </div>
                    <nav className={Style["footer-nav"]}>
                        <div className={Style["footer-column"]}>
                            <a href="#main" className={Style["footer-link"]}>Главная</a>
                            <a href="#shop" className={Style["footer-link"]}>Магазин</a>
                            <a href="#blog" className={Style["footer-link"]}>Блог</a>
                        </div>
                        <div className={Style["footer-column"]}>
                            <a href="#we-make" className={Style["footer-link"]}>Мы готовим</a>
                            <a href="#our-products" className={Style["footer-link"]}>Наши продукты</a>
                            <a href="#delivery" className={Style["footer-link"]}>Доставка</a>
                        </div>
                        <div className={Style["footer-column"]}>
                            <a href="#events" className={Style["footer-link"]}>События</a>
                            <a href="#coffee-time" className={Style["footer-link"]}>Время кофе</a>
                        </div>
                        <div className={Style["footer-column"]}>
                            <a href="#contacts" className={Style["footer-link"]}>Контакты</a>
                            <a href="#instagram" className={Style["footer-link"]}>Instagram</a>
                            <a href="#youtube" className={Style["footer-link"]}>Youtube</a>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer;