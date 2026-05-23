import Style from "./productssection.module.css";
import img7 from "../../image/esp.jpg";
import img8 from "../../image/lat.jpg";
import img9 from "../../image/cap.jpg";

function ProductsSec({ addToCart }) {
    return (
        <section className={Style.gara} id="select">
            <div className="container">
                <div className={Style.container}>
                    <div className={Style[`products-header`]}>
                        <h2 className={Style["section-title"]}>
                            Наши новые<br />
                            <span className={Style["text-green"]}>Продукты</span>
                        </h2>
                        <p className={Style["products-subtitle"]}>
                            Успейте купить самые гармоничные напитки
                            в новом кафе Caffeine Code и не забудьте
                            о скидке, кофе Caffeine Code и
                            не забудьте о скидке
                        </p>
                    </div>
                    <div className={Style[`product-cards`]}>
                        <div className={Style[`product-card`]}>
                            <div className={Style[`product-image-wrapper`]}>
                                <img src={img7} alt="Fast" />
                            </div>
                            <h3 className={Style[`product-name`]}>Espresso</h3>
                            <p className={Style[`product-desc`]}>Наше кафе обслужит вас</p>
                            <div className={Style[`product-footer`]}>
                                <div className={Style[`product-price`]}>
                                    <span className={Style[`price`]}>7.45$</span>
                                    <span className={Style[`volume`]}>340 ml</span>
                                </div>
                                <button
                                    className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}
                                    onClick={() =>
                                        addToCart({
                                            name: "Espresso",
                                            price: 7.45
                                        })
                                    }
                                >
                                    Купить
                                </button>
                            </div>
                        </div>
                        <div className={Style[`product-card`]}>
                            <div className={Style[`product-image-wrapper`]}>
                                <img src={img8} alt="Fast" />
                            </div>
                            <h3 className={Style[`product-name`]}>Latte</h3>
                            <p className={Style[`product-desc`]}>Наше кафе обслужит вас</p>
                            <div className={Style[`product-footer`]}>
                                <div className={Style[`product-price`]}>
                                    <span className={Style[`price`]}>7.45$</span>
                                    <span className={Style[`volume`]}>340 ml</span>
                                </div>
                                <button
                                    className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}
                                    onClick={() =>
                                        addToCart({
                                            name: "Latte",
                                            price: 7.45
                                        })
                                    }
                                >
                                    Купить
                                </button>
                            </div>
                        </div>
                        <div className={Style[`product-card`]}>
                            <div className={Style[`product-image-wrapper`]}>
                                <img src={img9} alt="Cappuccino" />
                            </div>
                            <h3 className={Style[`product-name`]}>Cappuccino</h3>
                            <p className={Style[`product-desc`]}>Наше кафе обслужит вас</p>
                            <div className={Style[`product-footer`]}>
                                <div className={Style[`product-price`]}>
                                    <span className={Style[`price`]}>7.45$</span>
                                    <span className={Style[`volume`]}>340 ml</span>
                                </div>
                                <button
                                    className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}
                                    onClick={() =>
                                        addToCart({
                                            name: "Cappuccino",
                                            price: 7.45
                                        })
                                    }
                                >
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductsSec;