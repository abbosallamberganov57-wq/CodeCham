import Style from "./featuressection.module.css";
import img3 from "../../image/VK.jpg";
import img4 from "../../image/FST.jpg";
import img5 from "../../image/DST.jpg";

function Features() {
    return (
        <section className={Style.Beronika}>
            <div className="container">
                <div className={Style.container}>
                    <div className={Style[`feature-cards`]}>
                        <div className={Style[`feature-card`]}>
                            <div className={Style[`feature-icon`]}>
                                <img src={img3} alt="Vkusno" />
                            </div>
                            <h3 className={Style[`feature-title`]}>Вкусно</h3>
                            <p className={Style[`feature-text`]}>У нас самый вкусный кофе</p>
                        </div>
                        <div className={Style[`feature-card`]}>
                            <div className={Style[`feature-icon`]}>
                                <img src={img4} alt="Bistro" />
                            </div>
                            <h3 className={Style[`feature-title`]}>Быстро</h3>
                            <p className={Style[`feature-text`]}>Наше кафе обслужит вас быстро</p>
                        </div>
                        <div className={Style[`feature-card`]}>
                            <div className={Style[`feature-icon`]}>
                                <img src={img5} alt="Available" />
                            </div>
                            <h3 className={Style[`feature-title`]}>Доступно</h3>
                            <p className={Style[`feature-text`]}>Кафе примет самые приятные цены</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;