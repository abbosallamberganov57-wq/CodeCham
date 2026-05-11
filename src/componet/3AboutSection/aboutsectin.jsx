import Style from "./aboutsection.module.css";
import img6 from "../../image/zal.png";

function AboutSec() {
    return (
        <section className={Style.Vivian}>
            <div className="container">
                <div className={Style.container}>
                    <div className={Style[`delicious-content`]}>
                        <div className={Style[`delicious-left`]}>
                            <div className={Style[`image-wrapper`]}>
                                <div className={Style[`we-have-badge`]}>У нас есть</div>
                                <img src={img6} alt="Interior" className={Style[`delicious-image`]} />
                            </div>
                        </div>
                        <div className={Style[`delicious-right`]}>
                            <h2 className={Style[`section-title`]}>
                                Мы готовим<br /><span className={Style[`text-green`]}>вкусно</span>
                            </h2>
                            <p className={Style[`delicious-text`]}>
                                Только в 2025 году мы сделали более 100 000<br />
                                заказов для вас, ваших близких, всех вас, и в<br />
                                2026 году мы готовы очаровать кофе<br />
                                <span className={Style[`cooking-badge`]}>Процесс приготовления</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSec;