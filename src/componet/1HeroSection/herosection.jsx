import Style from "./herosection.module.css";
import img1 from "../../image/CTL.png";
import img2 from "../../image/BRcup.png";
function Hero() {
    return (
        <section className={Style.Atora} id="home">
            <div className="container">
                <div className={Style.finch}>
                    <div className={Style.Ban}>
                        <div className={Style.Barutora}>
                            <h1 className={Style.Berurion}>
                                Caffeine   <br /> <span className={Style.Wainhaito}>Code</span>
                            </h1>
                            <p className={Style.Banesu}>
                                Успейте купить самые гармоничные напитки в<br />
                                новом кафе Caffeine Code и не забудьте о скидке!
                            </p>
                            <div className={Style.Arubion}>
                                <a href="#select" className={`${Style.btn} ${Style['btn-primary']}`}>
                                    Выбрать кофе
                                </a>
                                <a href="#more" className={`${Style.btn} ${Style['btn-secondary']}`}>
                                    Подробнее
                                </a>
                            </div>
                            <div className={Style.stats}>
                                <div className={Style['stat-item']}>
                                    <div className={Style[`stat-number`]}>9k<span className={Style[`text-green`]}>+</span></div>
                                    <div className={Style[`stat-label`]}>Загрузок</div>
                                </div>
                                <div className={Style[`stat-item`]}>
                                    <div className={Style[`stat-number`]}>2k<span className={Style[`text-green`]}>+</span></div>
                                    <div className={Style[`stat-label`]}>Лайков и<br />Подписчиков</div>
                                </div>
                                <div className={Style[`stat-item`]}>
                                    <div className={Style[`stat-number`]}>28<span className={Style[`text-green`]}>+</span></div>
                                    <div className={Style[`stat-label`]}>Пять звезд<br />Отзывов</div>
                                </div>
                            </div>
                        </div>
                        <div className={Style[`hero-right`]}>
                            <div className={Style[`coffee-cup-wrapper`]}>
                                <div className={Style[`badge-discount`]}>-25%</div>
                                <div className={Style[`we-have-badge`]}>У нас есть</div>
                                <img src={img1} alt="Coffeine Code" className={Style[`caffeine_code`]} />
                                <img src={img2} alt="Droid" className={Style[`droid`]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;